# Alpha Foot - دليل مكتبة المحتوى التعليمي

## 📚 نظرة عامة

مكتبة محتوى تعليمي شاملة تتضمن كورسات وفيديوهات ومقالات وكويزات مع نظام تقييمات وشهادات.

---

## 🏗️ البنية المعمارية

### 1. مكونات النظام
- **إدارة الكورسات**: إنشاء وتعديل الكورسات
- **إدارة الدروس**: تنظيم الدروس داخل الكورسات
- **إدارة الفيديوهات**: تحميل وإدارة الفيديوهات
- **نظام التقييمات**: تقييم الكورسات والدروس
- **نظام الشهادات**: إصدار شهادات إتمام الكورسات
- **نظام التقدم**: متابعة تقدم المستخدمين

### 2. قاعدة البيانات
```javascript
// جداول قاعدة البيانات
const tables = {
  courses: {
    id, title, description, category, level, instructor_id,
    duration, price, thumbnail, created_at, updated_at
  },
  lessons: {
    id, course_id, title, description, video_url, order,
    duration, resources, created_at
  },
  enrollments: {
    id, user_id, course_id, enrolled_at, completed_at,
    progress, status
  },
  certificates: {
    id, user_id, course_id, issued_at, certificate_url
  },
};
```

---

## 📖 نظام الكورسات

### 1. إنشاء كورس جديد
```javascript
// إنشاء كورس
const createCourse = async (courseData) => {
  const course = await db.courses.create({
    title: 'تطوير المهارات الكروية',
    description: 'كورس شامل لتطوير المهارات الأساسية',
    category: 'skills',
    level: 'intermediate',
    instructorId: instructor.id,
    duration: 120, // دقيقة
    price: 299,
    thumbnail: uploadThumbnail(),
  });
  
  return course;
};
```

### 2. هيكل الكورس
```javascript
// هيكل الكورس
const courseStructure = {
  courseId: 'C001',
  title: 'تطوير المهارات الكروية',
  sections: [
    {
      sectionId: 'S001',
      title: 'المهارات الأساسية',
      lessons: [
        {
          lessonId: 'L001',
          title: 'التحكم بالكرة',
          videoUrl: 'https://...',
          duration: 15,
          resources: ['pdf', 'images'],
        },
        {
          lessonId: 'L002',
          title: 'التمرير الدقيق',
          videoUrl: 'https://...',
          duration: 20,
        },
      ],
    },
    {
      sectionId: 'S002',
      title: 'المهارات المتقدمة',
      lessons: [...],
    },
  ],
};
```

### 3. مستويات الكورسات
```javascript
// مستويات الكورسات
const courseLevels = {
  beginner: {
    name: 'مبتدئ',
    requirements: [],
    duration: '2-4 أسابيع',
  },
  intermediate: {
    name: 'متوسط',
    requirements: ['beginner'],
    duration: '4-8 أسابيع',
  },
  advanced: {
    name: 'متقدم',
    requirements: ['intermediate'],
    duration: '8-12 أسبوع',
  },
  professional: {
    name: 'احترافي',
    requirements: ['advanced'],
    duration: '12+ أسبوع',
  },
};
```

---

## 🎥 نظام الفيديوهات

### 1. تحميل الفيديوهات
```javascript
// تحميل فيديو
const uploadVideo = async (videoFile, metadata) => {
  // ترميز الفيديو بجودات مختلفة
  const qualities = await transcodeVideo(videoFile);
  
  // رفع إلى S3
  const videoUrls = await uploadToS3(qualities);
  
  // حفظ البيانات
  const video = await db.videos.create({
    title: metadata.title,
    description: metadata.description,
    urls: videoUrls,
    duration: getDuration(videoFile),
    thumbnail: generateThumbnail(videoFile),
  });
  
  return video;
};
```

### 2. تشغيل الفيديو
```javascript
// مشغل الفيديو
const VideoPlayer = ({ videoUrl }) => {
  return (
    <video controls width="100%" height="auto">
      <source src={videoUrl} type="video/mp4" />
      <track kind="subtitles" src="subtitles.vtt" srcLang="ar" />
    </video>
  );
};
```

### 3. الترجمات والنصوص
```javascript
// إضافة ترجمات
const addSubtitles = async (videoId, subtitlesFile) => {
  const subtitles = parseVTT(subtitlesFile);
  
  await db.subtitles.create({
    videoId,
    language: 'ar',
    content: subtitles,
  });
};
```

---

## 📝 نظام الاختبارات والكويزات

### 1. إنشاء اختبار
```javascript
// إنشاء اختبار
const createQuiz = async (quizData) => {
  const quiz = await db.quizzes.create({
    courseId: quizData.courseId,
    title: 'اختبار المهارات الأساسية',
    description: 'اختبار شامل للمهارات المتعلمة',
    passingScore: 70,
    questions: [
      {
        questionId: 'Q001',
        type: 'multiple_choice',
        question: 'ما هي أفضل طريقة للتحكم بالكرة؟',
        options: [
          'باستخدام الجزء الخارجي من القدم',
          'باستخدام الجزء الداخلي من القدم',
          'باستخدام القدم بالكامل',
        ],
        correctAnswer: 1,
        points: 10,
      },
    ],
  });
  
  return quiz;
};
```

### 2. أنواع الأسئلة
```javascript
// أنواع الأسئلة
const questionTypes = {
  multipleChoice: {
    type: 'multiple_choice',
    options: ['option1', 'option2', 'option3'],
  },
  trueOrFalse: {
    type: 'true_false',
    options: ['صحيح', 'خاطئ'],
  },
  shortAnswer: {
    type: 'short_answer',
    expectedAnswers: ['answer1', 'answer2'],
  },
  essay: {
    type: 'essay',
    rubric: {
      content: 40,
      clarity: 30,
      grammar: 30,
    },
  },
};
```

### 3. تصحيح الاختبارات
```javascript
// تصحيح الاختبار
const gradeQuiz = async (quizId, userAnswers) => {
  const quiz = await db.quizzes.findById(quizId);
  let score = 0;
  let totalPoints = 0;
  
  for (const question of quiz.questions) {
    totalPoints += question.points;
    
    if (userAnswers[question.id] === question.correctAnswer) {
      score += question.points;
    }
  }
  
  const percentage = (score / totalPoints) * 100;
  const passed = percentage >= quiz.passingScore;
  
  return {
    score,
    totalPoints,
    percentage,
    passed,
  };
};
```

---

## 🏆 نظام الشهادات

### 1. إصدار شهادة
```javascript
// إصدار شهادة
const issueCertificate = async (userId, courseId) => {
  const user = await db.users.findById(userId);
  const course = await db.courses.findById(courseId);
  
  const certificate = await db.certificates.create({
    userId,
    courseId,
    certificateNumber: generateCertificateNumber(),
    issuedAt: new Date(),
    expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
    certificateUrl: generateCertificateURL(),
  });
  
  // إرسال بريد إلكتروني
  await sendEmail({
    to: user.email,
    subject: 'تم إصدار شهادة لك',
    template: 'certificate_issued',
    data: {
      userName: user.name,
      courseName: course.title,
      certificateUrl: certificate.certificateUrl,
    },
  });
  
  return certificate;
};
```

### 2. تصميم الشهادة
```javascript
// تصميم الشهادة
const generateCertificate = (user, course) => {
  return {
    title: 'شهادة إتمام الكورس',
    recipientName: user.name,
    courseName: course.title,
    completionDate: new Date(),
    certificateNumber: generateNumber(),
    issuerName: 'منصة Alpha Foot',
    signature: 'Digital Signature',
    qrCode: generateQRCode(),
  };
};
```

---

## 📊 متابعة التقدم

### 1. تتبع التقدم
```javascript
// متابعة تقدم المستخدم
const trackProgress = async (userId, courseId) => {
  const enrollment = await db.enrollments.findOne({
    userId,
    courseId,
  });
  
  const completedLessons = await db.lessonProgress.count({
    where: {
      userId,
      courseId,
      completed: true,
    },
  });
  
  const totalLessons = await db.lessons.count({
    where: { courseId },
  });
  
  const progress = (completedLessons / totalLessons) * 100;
  
  await db.enrollments.update(
    { id: enrollment.id },
    { progress }
  );
  
  return progress;
};
```

### 2. إحصائيات التعلم
```javascript
// إحصائيات التعلم
const learningStats = {
  coursesEnrolled: 5,
  coursesCompleted: 2,
  certificatesEarned: 2,
  totalHoursLearned: 45,
  averageScore: 85,
  currentStreak: 15, // يوم
  totalPoints: 2500,
};
```

---

## 💬 نظام التعليقات والنقاشات

### 1. التعليقات على الدروس
```javascript
// إضافة تعليق
const addComment = async (lessonId, userId, comment) => {
  const newComment = await db.comments.create({
    lessonId,
    userId,
    text: comment,
    createdAt: new Date(),
    likes: 0,
    replies: [],
  });
  
  return newComment;
};
```

### 2. المنتديات النقاشية
```javascript
// إنشاء موضوع نقاش
const createDiscussionThread = async (courseId, userId, thread) => {
  const newThread = await db.discussionThreads.create({
    courseId,
    userId,
    title: thread.title,
    content: thread.content,
    createdAt: new Date(),
    replies: [],
    views: 0,
  });
  
  return newThread;
};
```

---

## 🧪 الاختبار

### 1. اختبار الكورسات
```javascript
// اختبار إنشاء كورس
test('should create course successfully', async () => {
  const course = await createCourse(courseData);
  expect(course.title).toBe('تطوير المهارات الكروية');
  expect(course.level).toBe('intermediate');
});

// اختبار التقدم
test('should track progress correctly', async () => {
  const progress = await trackProgress(userId, courseId);
  expect(progress).toBeGreaterThan(0);
  expect(progress).toBeLessThanOrEqual(100);
});
```

---

## 📝 ملاحظات مهمة

- جميع الكورسات مصممة من قبل خبراء
- الفيديوهات متاحة بجودات مختلفة
- يمكن تحميل الموارد التعليمية
- الشهادات معترف بها عالمياً
- يمكن إعادة الكورسات بدون تكلفة إضافية

---

**تاريخ الإنشاء:** ديسمبر 2025
**المؤسس:** مهاب عماد إبراهيم حسن
**الإصدار:** 1.0.0
