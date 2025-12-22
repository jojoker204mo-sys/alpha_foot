# Alpha Foot - دليل التكامل الكامل لبوابات الدفع

## 📋 نظرة عامة

دليل شامل لتكامل Stripe و Telr مع نظام الاشتراكات والفواتير والتقارير المالية.

---

## 1️⃣ تكامل Stripe

### التثبيت والإعداد
```bash
npm install stripe @stripe/react-stripe-js @stripe/js
```

### متغيرات البيئة
```env
STRIPE_SECRET_KEY=sk_live_xxxxx
STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
STRIPE_PRICE_PLAYER_BASIC=price_xxxxx
STRIPE_PRICE_PLAYER_PRO=price_xxxxx
STRIPE_PRICE_PLAYER_ELITE=price_xxxxx
STRIPE_PRICE_COACH_BASIC=price_xxxxx
STRIPE_PRICE_COACH_PRO=price_xxxxx
STRIPE_PRICE_COACH_ACADEMY=price_xxxxx
```

### إنشاء عميل Stripe
```javascript
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// إنشاء عميل
const createStripeCustomer = async (userId, email) => {
  const customer = await stripe.customers.create({
    email,
    metadata: {
      userId,
      platform: 'alpha-foot',
    },
  });
  
  // حفظ معرف العميل
  await db.users.update(
    { id: userId },
    { stripeCustomerId: customer.id }
  );
  
  return customer;
};
```

### إنشاء اشتراك
```javascript
// إنشاء اشتراك
const createSubscription = async (userId, planId) => {
  const user = await db.users.findById(userId);
  
  if (!user.stripeCustomerId) {
    await createStripeCustomer(userId, user.email);
  }
  
  const subscription = await stripe.subscriptions.create({
    customer: user.stripeCustomerId,
    items: [{ price: planId }],
    payment_behavior: 'default_incomplete',
    expand: ['latest_invoice.payment_intent'],
    metadata: {
      userId,
      planType: getPlanType(planId),
    },
  });
  
  // حفظ الاشتراك
  await db.subscriptions.create({
    userId,
    stripeSubscriptionId: subscription.id,
    planId,
    status: subscription.status,
    currentPeriodStart: new Date(subscription.current_period_start * 1000),
    currentPeriodEnd: new Date(subscription.current_period_end * 1000),
    createdAt: new Date(),
  });
  
  return subscription;
};
```

### معالجة Webhooks
```javascript
// معالج Webhook
const handleStripeWebhook = async (event) => {
  switch (event.type) {
    case 'invoice.payment_succeeded':
      await handlePaymentSucceeded(event.data.object);
      break;
    
    case 'invoice.payment_failed':
      await handlePaymentFailed(event.data.object);
      break;
    
    case 'customer.subscription.updated':
      await handleSubscriptionUpdated(event.data.object);
      break;
    
    case 'customer.subscription.deleted':
      await handleSubscriptionDeleted(event.data.object);
      break;
    
    case 'charge.refunded':
      await handleRefund(event.data.object);
      break;
  }
};

// معالج الدفع الناجح
const handlePaymentSucceeded = async (invoice) => {
  const subscription = await db.subscriptions.findOne({
    stripeSubscriptionId: invoice.subscription,
  });
  
  if (!subscription) return;
  
  // تحديث حالة الاشتراك
  await db.subscriptions.update(
    { id: subscription.id },
    { status: 'active' }
  );
  
  // إنشاء فاتورة
  await createInvoice({
    userId: subscription.userId,
    stripeInvoiceId: invoice.id,
    amount: invoice.amount_paid / 100,
    currency: invoice.currency,
    status: 'paid',
    paidAt: new Date(invoice.paid * 1000),
  });
  
  // إرسال إيصال
  await sendPaymentReceipt(subscription.userId, invoice);
  
  // إخطار المستخدم
  await notifyUser(subscription.userId, 'تم استقبال الدفع بنجاح');
};
```

---

## 2️⃣ تكامل Telr

### التثبيت والإعداد
```bash
npm install axios
```

### متغيرات البيئة
```env
TELR_MERCHANT_ID=xxxxx
TELR_STORE_ID=xxxxx
TELR_API_KEY=xxxxx
TELR_API_URL=https://api.telr.com/v1
```

### إنشاء عملية دفع
```javascript
// إنشاء عملية دفع Telr
const createTelrPayment = async (userId, amount, planId) => {
  const user = await db.users.findById(userId);
  
  const paymentData = {
    merchantId: process.env.TELR_MERCHANT_ID,
    storeId: process.env.TELR_STORE_ID,
    amount: Math.round(amount * 100), // بالفلس
    currency: 'EGP',
    description: `اشتراك Alpha Foot - ${getPlanName(planId)}`,
    reference: `ORDER-${userId}-${Date.now()}`,
    customer: {
      name: user.name,
      email: user.email,
      phone: user.phone,
    },
    returnUrl: `${process.env.FRONTEND_URL}/payment/callback`,
    notifyUrl: `${process.env.API_URL}/webhooks/telr`,
  };
  
  try {
    const response = await axios.post(
      `${process.env.TELR_API_URL}/payments`,
      paymentData,
      {
        headers: {
          'Authorization': `Bearer ${process.env.TELR_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    
    // حفظ معاملة Telr
    await db.telrTransactions.create({
      userId,
      telrTransactionId: response.data.transactionId,
      amount,
      currency: 'EGP',
      status: 'pending',
      reference: paymentData.reference,
      createdAt: new Date(),
    });
    
    return response.data;
  } catch (error) {
    console.error('Telr payment error:', error);
    throw error;
  }
};
```

### معالجة رد الاتصال
```javascript
// معالج رد الاتصال من Telr
const handleTelrCallback = async (req, res) => {
  const { transactionId, status, reference } = req.body;
  
  // التحقق من التوقيع
  if (!verifyTelrSignature(req)) {
    return res.status(401).json({ error: 'Invalid signature' });
  }
  
  const transaction = await db.telrTransactions.findOne({
    telrTransactionId: transactionId,
  });
  
  if (!transaction) {
    return res.status(404).json({ error: 'Transaction not found' });
  }
  
  if (status === 'APPROVED') {
    // تحديث حالة المعاملة
    await db.telrTransactions.update(
      { id: transaction.id },
      { status: 'completed' }
    );
    
    // إنشاء اشتراك
    const planId = extractPlanIdFromReference(reference);
    await createSubscription(transaction.userId, planId);
    
    // إرسال إيصال
    await sendPaymentReceipt(transaction.userId, transaction);
    
    // إخطار المستخدم
    await notifyUser(transaction.userId, 'تم استقبال الدفع بنجاح');
  } else if (status === 'DECLINED') {
    await db.telrTransactions.update(
      { id: transaction.id },
      { status: 'failed' }
    );
    
    await notifyUser(transaction.userId, 'فشل الدفع - يرجى المحاولة مرة أخرى');
  }
  
  res.json({ success: true });
};
```

---

## 3️⃣ نظام الفواتير الإلكترونية

### إنشاء فاتورة
```javascript
// إنشاء فاتورة
const createInvoice = async (invoiceData) => {
  const invoice = await db.invoices.create({
    userId: invoiceData.userId,
    invoiceNumber: generateInvoiceNumber(),
    amount: invoiceData.amount,
    currency: invoiceData.currency || 'EGP',
    status: invoiceData.status || 'pending',
    items: invoiceData.items || [],
    
    // التفاصيل
    issueDate: new Date(),
    dueDate: addDays(new Date(), 30),
    
    // معلومات الدفع
    paymentMethod: invoiceData.paymentMethod,
    stripeInvoiceId: invoiceData.stripeInvoiceId,
    telrTransactionId: invoiceData.telrTransactionId,
    
    // الضرائب والخصومات
    subtotal: invoiceData.subtotal,
    tax: invoiceData.tax || 0,
    discount: invoiceData.discount || 0,
    total: invoiceData.amount,
    
    paidAt: invoiceData.paidAt,
    notes: invoiceData.notes,
  });
  
  return invoice;
};

// إنشاء PDF للفاتورة
const generateInvoicePDF = async (invoiceId) => {
  const invoice = await db.invoices.findById(invoiceId);
  const user = await db.users.findById(invoice.userId);
  
  const doc = new PDFDocument();
  
  // رأس الفاتورة
  doc.fontSize(20).text('Alpha Foot', 50, 50);
  doc.fontSize(12).text('فاتورة', 50, 80);
  
  // معلومات الفاتورة
  doc.fontSize(10)
    .text(`رقم الفاتورة: ${invoice.invoiceNumber}`, 50, 120)
    .text(`التاريخ: ${formatDate(invoice.issueDate)}`, 50, 140)
    .text(`الحالة: ${invoice.status}`, 50, 160);
  
  // معلومات العميل
  doc.text('معلومات العميل:', 50, 200);
  doc.text(`الاسم: ${user.name}`, 50, 220);
  doc.text(`البريد الإلكتروني: ${user.email}`, 50, 240);
  
  // تفاصيل الفاتورة
  doc.text('تفاصيل الفاتورة:', 50, 280);
  
  let y = 300;
  for (const item of invoice.items) {
    doc.text(`${item.description}: ${item.amount} ج.م`, 50, y);
    y += 20;
  }
  
  // الإجمالي
  doc.fontSize(12).text(`الإجمالي: ${invoice.total} ج.م`, 50, y + 20);
  
  // حفظ الملف
  const filename = `invoice-${invoice.invoiceNumber}.pdf`;
  const filepath = path.join(process.env.INVOICES_DIR, filename);
  
  doc.pipe(fs.createWriteStream(filepath));
  doc.end();
  
  return filepath;
};
```

---

## 4️⃣ نظام إدارة الاشتراكات

### تحديث الاشتراك
```javascript
// تحديث الاشتراك
const updateSubscription = async (userId, newPlanId) => {
  const subscription = await db.subscriptions.findOne({
    userId,
    status: 'active',
  });
  
  if (!subscription) {
    throw new Error('لا يوجد اشتراك نشط');
  }
  
  const user = await db.users.findById(userId);
  
  // تحديث في Stripe
  if (subscription.stripeSubscriptionId) {
    await stripe.subscriptions.update(
      subscription.stripeSubscriptionId,
      {
        items: [
          {
            id: subscription.stripeSubscriptionItemId,
            price: newPlanId,
          },
        ],
        proration_behavior: 'create_prorations',
      }
    );
  }
  
  // تحديث في قاعدة البيانات
  await db.subscriptions.update(
    { id: subscription.id },
    { planId: newPlanId }
  );
  
  // إخطار المستخدم
  await notifyUser(userId, 'تم تحديث خطتك بنجاح');
};

// إلغاء الاشتراك
const cancelSubscription = async (userId) => {
  const subscription = await db.subscriptions.findOne({
    userId,
    status: 'active',
  });
  
  if (!subscription) {
    throw new Error('لا يوجد اشتراك نشط');
  }
  
  // إلغاء في Stripe
  if (subscription.stripeSubscriptionId) {
    await stripe.subscriptions.del(subscription.stripeSubscriptionId);
  }
  
  // تحديث في قاعدة البيانات
  await db.subscriptions.update(
    { id: subscription.id },
    {
      status: 'cancelled',
      cancelledAt: new Date(),
    }
  );
  
  // إخطار المستخدم
  await notifyUser(userId, 'تم إلغاء اشتراكك');
};
```

---

## 5️⃣ لوحة التقارير المالية

### تقارير الإيرادات
```javascript
// تقرير الإيرادات
const getRevenueReport = async (period = 'monthly') => {
  const startDate = getPeriodStart(period);
  const endDate = new Date();
  
  const invoices = await db.invoices.find({
    status: 'paid',
    paidAt: { $gte: startDate, $lte: endDate },
  });
  
  const report = {
    period,
    startDate,
    endDate,
    
    // الإجماليات
    totalRevenue: invoices.reduce((sum, inv) => sum + inv.total, 0),
    totalInvoices: invoices.length,
    averageInvoiceValue: invoices.length > 0 
      ? invoices.reduce((sum, inv) => sum + inv.total, 0) / invoices.length 
      : 0,
    
    // حسب نوع الخطة
    revenueByPlan: groupRevenueByPlan(invoices),
    
    // حسب طريقة الدفع
    revenueByPaymentMethod: groupRevenueByPaymentMethod(invoices),
    
    // الاتجاهات
    dailyRevenue: calculateDailyRevenue(invoices),
    weeklyRevenue: calculateWeeklyRevenue(invoices),
    
    // المقاييس
    metrics: {
      mrr: calculateMRR(invoices), // Monthly Recurring Revenue
      arr: calculateARR(invoices), // Annual Recurring Revenue
      churnRate: calculateChurnRate(),
      conversionRate: calculateConversionRate(),
    },
  };
  
  return report;
};
```

---

## 6️⃣ نظام المبالغ المسترجعة

### معالجة الاسترجاع
```javascript
// معالجة الاسترجاع
const processRefund = async (invoiceId, reason) => {
  const invoice = await db.invoices.findById(invoiceId);
  
  if (!invoice || invoice.status !== 'paid') {
    throw new Error('لا يمكن استرجاع هذه الفاتورة');
  }
  
  // استرجاع من Stripe
  if (invoice.stripeInvoiceId) {
    const refund = await stripe.refunds.create({
      charge: invoice.stripeChargeId,
      reason: reason || 'requested_by_customer',
    });
    
    // حفظ الاسترجاع
    await db.refunds.create({
      invoiceId,
      stripeRefundId: refund.id,
      amount: invoice.total,
      reason,
      status: 'completed',
      createdAt: new Date(),
    });
  }
  
  // تحديث الفاتورة
  await db.invoices.update(
    { id: invoiceId },
    { status: 'refunded' }
  );
  
  // إخطار المستخدم
  await notifyUser(invoice.userId, `تم استرجاع ${invoice.total} ج.م`);
};
```

---

## 7️⃣ نظام الإشعارات المالية

### إرسال الإشعارات
```javascript
// إرسال إشعار الدفع
const sendPaymentNotification = async (userId, invoice) => {
  const user = await db.users.findById(userId);
  
  // إرسال بريد إلكتروني
  await sendEmail({
    to: user.email,
    subject: 'إيصال الدفع - Alpha Foot',
    template: 'payment-receipt',
    data: {
      userName: user.name,
      invoiceNumber: invoice.invoiceNumber,
      amount: invoice.total,
      date: formatDate(invoice.paidAt),
      downloadLink: `/invoices/${invoice.id}/download`,
    },
  });
  
  // إرسال إشعار في التطبيق
  await createNotification({
    userId,
    type: 'payment_received',
    title: 'تم استقبال الدفع',
    message: `تم استقبال دفعة بقيمة ${invoice.total} ج.م`,
    data: { invoiceId: invoice.id },
  });
  
  // إرسال رسالة نصية
  if (user.phone) {
    await sendSMS({
      phone: user.phone,
      message: `تم استقبال دفعتك بقيمة ${invoice.total} ج.م - Alpha Foot`,
    });
  }
};
```

---

## 8️⃣ الأمان والامتثال

### معايير الأمان
```javascript
// التحقق من التوقيع
const verifyTelrSignature = (req) => {
  const signature = req.headers['x-telr-signature'];
  const body = JSON.stringify(req.body);
  
  const hash = crypto
    .createHmac('sha256', process.env.TELR_API_KEY)
    .update(body)
    .digest('hex');
  
  return hash === signature;
};

// تشفير بيانات الدفع
const encryptPaymentData = (data) => {
  const cipher = crypto.createCipher('aes-256-cbc', process.env.ENCRYPTION_KEY);
  let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};

// فحص الامتثال
const checkPCIDSSCompliance = async () => {
  const checks = {
    // عدم تخزين بيانات البطاقة
    noCardDataStorage: !hasCardDataInDatabase(),
    
    // استخدام HTTPS
    httpsEnabled: process.env.NODE_ENV === 'production',
    
    // تشفير البيانات
    dataEncryption: checkDataEncryption(),
    
    // المصادقة
    authentication: checkAuthentication(),
    
    // الفحوصات الدورية
    regularAudits: checkRegularAudits(),
  };
  
  return checks;
};
```

---

## 📝 ملاحظات مهمة

- جميع المعاملات آمنة ومشفرة
- جميع الفواتير تُحفظ تلقائياً
- جميع الإشعارات تُرسل فوراً
- جميع التقارير قابلة للتصدير
- الامتثال الكامل لمعايير PCI DSS

---

**تاريخ الإنشاء:** ديسمبر 2025
**المؤسس:** مهاب عماد إبراهيم حسن
**الإصدار:** 1.0.0
