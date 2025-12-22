# Alpha Foot - دليل ميزات التواصل الاجتماعي والإحالات

## 🌐 نظرة عامة

نظام تواصل اجتماعي متكامل مع نظام إحالات قوي يشجع المستخدمين على مشاركة المنصة والحصول على عمولات.

---

## 📱 ميزات التواصل الاجتماعي

### 1. نظام المنشورات
```javascript
// إنشاء منشور
const createPost = async (userId, postData) => {
  const post = await db.posts.create({
    userId,
    content: postData.content,
    images: postData.images,
    videos: postData.videos,
    tags: postData.tags,
    visibility: 'public', // public, private, friends
    createdAt: new Date(),
    likes: 0,
    comments: 0,
    shares: 0,
  });
  
  // إخطار المتابعين
  await notifyFollowers(userId, `${user.name} نشر منشور جديد`);
  
  return post;
};
```

### 2. نظام الإعجابات والتعليقات
```javascript
// إضافة إعجاب
const likePost = async (userId, postId) => {
  const like = await db.likes.create({
    userId,
    postId,
    createdAt: new Date(),
  });
  
  // تحديث عدد الإعجابات
  await db.posts.update(
    { id: postId },
    { likes: db.raw('likes + 1') }
  );
  
  // إخطار صاحب المنشور
  const post = await db.posts.findById(postId);
  await notifyUser(post.userId, `${user.name} أعجب بمنشورك`);
};

// إضافة تعليق
const addComment = async (userId, postId, commentText) => {
  const comment = await db.comments.create({
    userId,
    postId,
    text: commentText,
    createdAt: new Date(),
    likes: 0,
    replies: 0,
  });
  
  // تحديث عدد التعليقات
  await db.posts.update(
    { id: postId },
    { comments: db.raw('comments + 1') }
  );
  
  return comment;
};
```

### 3. نظام المتابعة
```javascript
// متابعة مستخدم
const followUser = async (followerId, followingId) => {
  const follow = await db.follows.create({
    followerId,
    followingId,
    createdAt: new Date(),
  });
  
  // تحديث عدد المتابعين
  await db.users.update(
    { id: followingId },
    { followers: db.raw('followers + 1') }
  );
  
  // إخطار المستخدم
  await notifyUser(followingId, `${follower.name} بدأ متابعتك`);
};

// إلغاء المتابعة
const unfollowUser = async (followerId, followingId) => {
  await db.follows.delete({
    followerId,
    followingId,
  });
  
  // تحديث عدد المتابعين
  await db.users.update(
    { id: followingId },
    { followers: db.raw('followers - 1') }
  );
};
```

### 4. نظام الرسائل الخاصة
```javascript
// إرسال رسالة
const sendMessage = async (senderId, receiverId, messageText) => {
  const message = await db.messages.create({
    senderId,
    receiverId,
    text: messageText,
    createdAt: new Date(),
    read: false,
  });
  
  // إخطار المستقبل
  io.to(`user-${receiverId}`).emit('new-message', {
    from: senderId,
    message: messageText,
  });
  
  return message;
};

// وضع علامة على الرسالة كمقروءة
const markMessageAsRead = async (messageId) => {
  await db.messages.update(
    { id: messageId },
    { read: true }
  );
};
```

### 5. نظام المشاركة والنشر
```javascript
// مشاركة منشور
const sharePost = async (userId, postId) => {
  const share = await db.shares.create({
    userId,
    postId,
    createdAt: new Date(),
  });
  
  // تحديث عدد المشاركات
  await db.posts.update(
    { id: postId },
    { shares: db.raw('shares + 1') }
  );
  
  // إنشاء منشور جديد
  await createPost(userId, {
    content: `شارك: ${originalPost.content}`,
    sharedPostId: postId,
  });
};
```

---

## 🎁 نظام الإحالات والعمولات

### 1. إنشاء رمز إحالة
```javascript
// إنشاء رمز إحالة فريد
const generateReferralCode = async (userId) => {
  const referralCode = generateUniqueCode();
  
  const referral = await db.referrals.create({
    userId,
    referralCode,
    createdAt: new Date(),
    referrals: 0,
    earnings: 0,
  });
  
  return {
    referralCode,
    referralLink: `https://alphafoot.com/join?ref=${referralCode}`,
  };
};
```

### 2. تتبع الإحالات
```javascript
// تتبع الإحالة الجديدة
const trackReferral = async (referralCode, newUserId) => {
  // العثور على الرمز الأصلي
  const referral = await db.referrals.findOne({ referralCode });
  
  if (!referral) return;
  
  // إنشاء سجل إحالة
  const referralRecord = await db.referralRecords.create({
    referrerId: referral.userId,
    referredId: newUserId,
    referralCode,
    createdAt: new Date(),
    status: 'pending',
  });
  
  // تحديث عدد الإحالات
  await db.referrals.update(
    { id: referral.id },
    { referrals: db.raw('referrals + 1') }
  );
  
  // إخطار المحيل
  await notifyUser(referral.userId, `تم إحالة مستخدم جديد`);
};
```

### 3. حساب العمولات
```javascript
// حساب العمولات
const calculateCommissions = async (referrerId) => {
  const commissionRates = {
    subscription: 0.15, // 15% من الاشتراك
    partnership: 0.20, // 20% من الشراكة
    referral: 0.10, // 10% من الإحالة
  };
  
  // الحصول على جميع الإحالات
  const referrals = await db.referralRecords.find({
    referrerId,
    status: 'completed',
  });
  
  let totalCommission = 0;
  
  for (const referral of referrals) {
    const referredUser = await db.users.findById(referral.referredId);
    
    // حساب العمولة من الاشتراكات
    const subscriptions = await db.subscriptions.find({
      userId: referral.referredId,
    });
    
    for (const subscription of subscriptions) {
      totalCommission += subscription.price * commissionRates.subscription;
    }
  }
  
  // تحديث الأرباح
  await db.referrals.update(
    { userId: referrerId },
    { earnings: totalCommission }
  );
  
  return totalCommission;
};
```

### 4. الدفع للمحيلين
```javascript
// دفع العمولات
const payCommissions = async (referrerId, amount) => {
  // التحقق من الحد الأدنى للدفع
  if (amount < 100) {
    throw new Error('الحد الأدنى للدفع 100 ج.م');
  }
  
  // إنشاء طلب دفع
  const payment = await db.referralPayments.create({
    referrerId,
    amount,
    status: 'pending',
    requestedAt: new Date(),
  });
  
  // معالجة الدفع
  const paymentResult = await processPayment({
    userId: referrerId,
    amount,
    type: 'referral_commission',
  });
  
  if (paymentResult.success) {
    await db.referralPayments.update(
      { id: payment.id },
      {
        status: 'completed',
        paidAt: new Date(),
        transactionId: paymentResult.transactionId,
      }
    );
    
    // إخطار المستخدم
    await notifyUser(referrerId, `تم دفع عمولة بقيمة ${amount} ج.م`);
  }
};
```

---

## 📊 إحصائيات الإحالات

### 1. لوحة تحكم الإحالات
```javascript
// لوحة تحكم الإحالات
const getReferralDashboard = async (userId) => {
  const referral = await db.referrals.findOne({ userId });
  
  const dashboard = {
    referralCode: referral.referralCode,
    referralLink: `https://alphafoot.com/join?ref=${referral.referralCode}`,
    totalReferrals: referral.referrals,
    totalEarnings: referral.earnings,
    pendingEarnings: await calculatePendingEarnings(userId),
    referralHistory: await getReferralHistory(userId),
    topReferrers: await getTopReferrers(),
    commissionBreakdown: {
      subscriptions: await getSubscriptionCommissions(userId),
      partnerships: await getPartnershipCommissions(userId),
      referrals: await getReferralCommissions(userId),
    },
  };
  
  return dashboard;
};
```

### 2. الترتيب العام
```javascript
// ترتيب المحيلين
const getTopReferrers = async () => {
  const topReferrers = await db.referrals
    .orderBy('earnings', 'desc')
    .limit(10)
    .select('userId', 'referrals', 'earnings');
  
  return topReferrers.map((ref, index) => ({
    rank: index + 1,
    user: ref.user,
    referrals: ref.referrals,
    earnings: ref.earnings,
    badge: getBadge(ref.earnings),
  }));
};
```

---

## 🏆 نظام الشارات والحوافز

### 1. شارات الإحالات
```javascript
// شارات الإحالات
const referralBadges = {
  first_referral: {
    name: 'المحيل الأول',
    requirement: 1,
    reward: 50, // ج.م
  },
  five_referrals: {
    name: 'محيل متقدم',
    requirement: 5,
    reward: 200,
  },
  ten_referrals: {
    name: 'محيل نجم',
    requirement: 10,
    reward: 500,
  },
  fifty_referrals: {
    name: 'محيل ماسي',
    requirement: 50,
    reward: 2000,
  },
};

// منح شارة
const awardBadge = async (userId, badgeId) => {
  const badge = await db.badges.create({
    userId,
    badgeId,
    awardedAt: new Date(),
  });
  
  // إخطار المستخدم
  await notifyUser(userId, `تم منحك شارة ${badgeId}`);
};
```

---

## 🧪 الاختبار

### 1. اختبار الإحالات
```javascript
// اختبار إنشاء رمز إحالة
test('should generate referral code', async () => {
  const code = await generateReferralCode(userId);
  expect(code.referralCode).toBeDefined();
  expect(code.referralLink).toContain(code.referralCode);
});

// اختبار تتبع الإحالة
test('should track referral', async () => {
  await trackReferral(referralCode, newUserId);
  const referral = await db.referrals.findOne({ referralCode });
  expect(referral.referrals).toBe(1);
});
```

---

## 📝 ملاحظات مهمة

- جميع الإحالات تُتبع تلقائياً
- العمولات تُحسب بناءً على الاشتراكات الفعلية
- الدفع يتم شهرياً للمحيلين
- يمكن سحب الأرباح في أي وقت
- جميع المعاملات آمنة وموثقة

---

**تاريخ الإنشاء:** ديسمبر 2025
**المؤسس:** مهاب عماد إبراهيم حسن
**الإصدار:** 1.0.0
