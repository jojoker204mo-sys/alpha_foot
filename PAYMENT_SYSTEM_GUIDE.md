# Alpha Foot - دليل نظام الدفع والاشتراكات

## 💳 نظرة عامة على نظام الدفع

نظام دفع متقدم وآمن يدعم Stripe و Telr مع إدارة شاملة للاشتراكات والفواتير.

---

## 🏗️ البنية المعمارية لنظام الدفع

### 1. المكونات الرئيسية

**خادم الدفع (Payment Server):**
- معالجة طلبات الدفع
- التحقق من الدفع
- إدارة الاشتراكات
- إنشاء الفواتير
- معالجة المبالغ المسترجعة

**قاعدة البيانات:**
- جدول المعاملات
- جدول الاشتراكات
- جدول الفواتير
- جدول السجلات

**الواجهات الأمامية:**
- صفحة الدفع
- صفحة الاشتراكات
- صفحة الفواتير
- صفحة السجلات

### 2. تدفق الدفع

```
المستخدم → اختيار الخطة → ملء البيانات → معالجة الدفع → التحقق → تأكيد
```

---

## 💰 خطط الاشتراكات

### 1. خطط اللاعبين

| الخطة | السعر | المميزات |
|------|------|---------|
| **أساسي** | 99 ج.م/شهر | لوحة تحكم أساسية، تقارير بسيطة |
| **احترافي** | 299 ج.م/شهر | جميع الميزات الأساسية + تحليلات متقدمة |
| **نخبة** | 599 ج.م/شهر | جميع الميزات + استشارة مع خبير |

### 2. خطط المدربين

| الخطة | السعر | المميزات |
|------|------|---------|
| **مبتدئ** | 199 ج.م/شهر | إدارة فريق صغير (10 لاعبين) |
| **محترف** | 499 ج.م/شهر | إدارة فريق كبير (50 لاعب) |
| **أكاديمية** | 1,499 ج.م/شهر | إدارة أكاديمية كاملة |

### 3. خطط الأكاديميات والأندية

| الخطة | السعر | المميزات |
|------|------|---------|
| **ذهبي** | 2,999 ج.م/شهر | 30 لاعب + 5 مدربين |
| **بلاتيني** | 5,999 ج.م/شهر | 100 لاعب + 20 مدرب |
| **ماسي** | 9,999 ج.م/شهر | عدد غير محدود |

---

## 🔐 الأمان والتشفير

### 1. معايير الأمان
- استخدام HTTPS فقط
- تشفير البيانات الحساسة
- توافق مع PCI DSS
- عدم تخزين بيانات البطاقة

### 2. التحقق والمصادقة
- التحقق من هوية المستخدم
- التحقق من صحة البيانات
- التحقق من الدفع
- تسجيل جميع المعاملات

---

## 📱 تكامل Stripe

### 1. إعداد Stripe
```javascript
// تثبيت المكتبة
npm install stripe @stripe/react-stripe-js

// إنشاء عميل Stripe
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
```

### 2. إنشاء جلسة دفع
```javascript
// إنشاء جلسة دفع
const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: [{
    price_data: {
      currency: 'egp',
      product_data: { name: 'خطة احترافية' },
      unit_amount: 29900, // 299 ج.م
    },
    quantity: 1,
  }],
  mode: 'subscription',
  success_url: 'https://alphafoot.com/success',
  cancel_url: 'https://alphafoot.com/cancel',
});
```

### 3. معالجة Webhooks
```javascript
// معالجة أحداث Stripe
app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const event = req.body;
  
  switch(event.type) {
    case 'payment_intent.succeeded':
      // معالجة الدفع الناجح
      break;
    case 'customer.subscription.updated':
      // معالجة تحديث الاشتراك
      break;
    case 'customer.subscription.deleted':
      // معالجة إلغاء الاشتراك
      break;
  }
  
  res.json({received: true});
});
```

---

## 🇪🇬 تكامل Telr

### 1. إعداد Telr
```javascript
// تثبيت المكتبة
npm install telr-payment

// إنشاء عميل Telr
import Telr from 'telr-payment';
const telr = new Telr({
  merchantId: process.env.TELR_MERCHANT_ID,
  apiKey: process.env.TELR_API_KEY,
});
```

### 2. إنشاء طلب دفع
```javascript
// إنشاء طلب دفع
const payment = await telr.createPayment({
  amount: 29900, // 299 ج.م
  currency: 'EGP',
  description: 'خطة احترافية',
  orderId: 'ORDER_123',
  customerEmail: 'user@example.com',
});
```

### 3. معالجة الرد
```javascript
// معالجة رد Telr
app.post('/telr-callback', (req, res) => {
  const { orderId, status, transactionId } = req.body;
  
  if (status === 'success') {
    // تحديث الاشتراك
    updateSubscription(orderId, transactionId);
  }
  
  res.json({success: true});
});
```

---

## 📊 إدارة الاشتراكات

### 1. إنشاء اشتراك
```javascript
// إنشاء اشتراك جديد
const subscription = await db.subscriptions.create({
  userId: user.id,
  planId: plan.id,
  status: 'active',
  startDate: new Date(),
  endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  price: plan.price,
  stripeSubscriptionId: stripeSubscription.id,
});
```

### 2. تحديث الاشتراك
```javascript
// ترقية الاشتراك
const updatedSubscription = await db.subscriptions.update(
  { id: subscription.id },
  {
    planId: newPlan.id,
    price: newPlan.price,
    updatedAt: new Date(),
  }
);
```

### 3. إلغاء الاشتراك
```javascript
// إلغاء الاشتراك
const cancelledSubscription = await db.subscriptions.update(
  { id: subscription.id },
  {
    status: 'cancelled',
    endDate: new Date(),
  }
);

// إلغاء من Stripe
await stripe.subscriptions.del(subscription.stripeSubscriptionId);
```

---

## 📄 إدارة الفواتير

### 1. إنشاء فاتورة
```javascript
// إنشاء فاتورة
const invoice = await db.invoices.create({
  subscriptionId: subscription.id,
  userId: user.id,
  amount: subscription.price,
  status: 'paid',
  date: new Date(),
  dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  items: [{
    description: plan.name,
    quantity: 1,
    price: plan.price,
  }],
});
```

### 2. تحميل الفاتورة
```javascript
// تحميل الفاتورة كـ PDF
app.get('/invoices/:id/download', async (req, res) => {
  const invoice = await db.invoices.findById(req.params.id);
  
  // إنشاء PDF
  const pdf = generateInvoicePDF(invoice);
  
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="invoice.pdf"');
  res.send(pdf);
});
```

---

## 💸 معالجة المبالغ المسترجعة

### 1. طلب استرجاع
```javascript
// إنشاء طلب استرجاع
const refund = await db.refunds.create({
  transactionId: transaction.id,
  userId: user.id,
  amount: transaction.amount,
  reason: 'customer_request',
  status: 'pending',
});
```

### 2. معالجة الاسترجاع
```javascript
// معالجة الاسترجاع من Stripe
const refund = await stripe.refunds.create({
  payment_intent: transaction.stripePaymentId,
  amount: transaction.amount,
});

// تحديث حالة الاسترجاع
await db.refunds.update(
  { id: refund.id },
  { status: 'completed', stripeRefundId: refund.id }
);
```

---

## 📈 التقارير المالية

### 1. تقرير الإيرادات
```javascript
// الحصول على إيرادات اليوم
const todayRevenue = await db.transactions.sum('amount', {
  where: {
    status: 'completed',
    createdAt: { $gte: startOfDay, $lte: endOfDay },
  },
});

// الحصول على إيرادات الشهر
const monthRevenue = await db.transactions.sum('amount', {
  where: {
    status: 'completed',
    createdAt: { $gte: startOfMonth, $lte: endOfMonth },
  },
});
```

### 2. تقرير الاشتراكات
```javascript
// عدد الاشتراكات النشطة
const activeSubscriptions = await db.subscriptions.count({
  where: { status: 'active' },
});

// عدد الاشتراكات الملغاة
const cancelledSubscriptions = await db.subscriptions.count({
  where: { status: 'cancelled' },
});
```

---

## 🔔 الإشعارات والبريد الإلكتروني

### 1. إشعار الدفع الناجح
```javascript
// إرسال بريد إلكتروني
await sendEmail({
  to: user.email,
  subject: 'تم تأكيد الدفع',
  template: 'payment_success',
  data: {
    userName: user.name,
    planName: plan.name,
    amount: transaction.amount,
  },
});
```

### 2. إشعار تجديد الاشتراك
```javascript
// إرسال تذكير قبل انتهاء الاشتراك
const expiringSubscriptions = await db.subscriptions.find({
  where: {
    status: 'active',
    endDate: { $lte: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
  },
});

for (const subscription of expiringSubscriptions) {
  await sendEmail({
    to: subscription.user.email,
    subject: 'سينتهي اشتراكك قريباً',
    template: 'subscription_expiring',
  });
}
```

---

## 🧪 الاختبار

### 1. بطاقات اختبار Stripe
- **4242 4242 4242 4242**: بطاقة ناجحة
- **4000 0000 0000 0002**: بطاقة مرفوضة
- **4000 0025 0000 3155**: بطاقة تتطلب مصادقة

### 2. اختبار الاشتراكات
```javascript
// اختبار إنشاء اشتراك
test('should create subscription', async () => {
  const subscription = await createSubscription(user, plan);
  expect(subscription.status).toBe('active');
});

// اختبار ترقية الاشتراك
test('should upgrade subscription', async () => {
  const updated = await upgradeSubscription(subscription, newPlan);
  expect(updated.planId).toBe(newPlan.id);
});
```

---

## 📝 ملاحظات مهمة

- جميع المبالغ بالجنيه المصري (EGP)
- الاشتراكات تتجدد تلقائياً كل شهر
- يمكن إلغاء الاشتراك في أي وقت
- المبالغ المسترجعة تتم خلال 5-7 أيام عمل
- جميع المعاملات مشفرة وآمنة

---

**تاريخ الإنشاء:** ديسمبر 2025
**المؤسس:** مهاب عماد إبراهيم حسن
**الإصدار:** 1.0.0
