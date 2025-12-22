# Alpha Foot - دليل البث المباشر والفيديو

## 📹 نظرة عامة على نظام البث المباشر

نظام بث مباشر متقدم يدعم HLS و DASH مع تحليل ذكي وتعليقات فورية.

---

## 🏗️ البنية المعمارية

### 1. مكونات النظام

**خادم البث (Streaming Server):**
- استقبال البث المباشر
- ترميز الفيديو (Encoding)
- توزيع البث (Distribution)
- تسجيل البث

**شبكة التوزيع (CDN):**
- توزيع البث عالمياً
- تقليل التأخير (Latency)
- تحسين الجودة
- توازن الحمل

**قاعدة البيانات:**
- بيانات البث
- التعليقات
- الإحصائيات
- السجلات

### 2. تدفق البث

```
الكاميرا → الترميز → الخادم → CDN → المشاهدون
```

---

## 🎬 إنشاء بث مباشر

### 1. بدء البث
```javascript
// إنشاء جلسة بث جديدة
const liveStream = await db.liveStreams.create({
  title: 'جلسة تدريبية مباشرة',
  description: 'تدريب متقدم للاعبي الفريق الأول',
  coachId: coach.id,
  teamId: team.id,
  startTime: new Date(),
  status: 'live',
  streamUrl: generateStreamUrl(),
  viewers: 0,
});

// إنشاء مفتاح البث
const streamKey = generateStreamKey();
```

### 2. إعدادات الترميز
```javascript
// إعدادات الترميز الموصى بها
const encodingSettings = {
  videoCodec: 'H.264',
  bitrate: '5000k', // 5 Mbps
  resolution: '1920x1080', // 1080p
  fps: 30,
  audioCodec: 'AAC',
  audioBitrate: '128k',
};
```

### 3. تشغيل البث
```javascript
// بدء البث من OBS أو أي برنامج بث
// RTMP URL: rtmp://stream.alphafoot.com/live/{streamKey}
// أو HTTP URL: https://stream.alphafoot.com/live/{streamKey}

// تحديث حالة البث
const updated = await db.liveStreams.update(
  { id: liveStream.id },
  { status: 'streaming' }
);
```

---

## 👁️ مشاهدة البث المباشر

### 1. مشغل الفيديو
```javascript
// استخدام HLS.js لتشغيل البث
import Hls from 'hls.js';

const video = document.getElementById('video');
const hlsUrl = 'https://stream.alphafoot.com/live/{streamKey}/index.m3u8';

if (Hls.isSupported()) {
  const hls = new Hls();
  hls.loadSource(hlsUrl);
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, () => {
    video.play();
  });
}
```

### 2. جودة البث
```javascript
// خيارات الجودة المتاحة
const qualities = [
  { name: '720p', bitrate: '2500k' },
  { name: '1080p', bitrate: '5000k' },
  { name: '480p', bitrate: '1200k' },
  { name: '360p', bitrate: '800k' },
];
```

### 3. إحصائيات المشاهدة
```javascript
// تتبع عدد المشاهدين
const updateViewers = async (streamId) => {
  const viewers = await db.liveStreamViewers.count({
    where: { streamId, isActive: true },
  });
  
  await db.liveStreams.update(
    { id: streamId },
    { viewers }
  );
};
```

---

## 💬 نظام التعليقات المباشرة

### 1. إرسال تعليق
```javascript
// إرسال تعليق مباشر
const comment = await db.liveComments.create({
  streamId: stream.id,
  userId: user.id,
  text: 'تعليق رائع!',
  timestamp: new Date(),
  likes: 0,
});

// بث التعليق للمشاهدين الآخرين
io.to(`stream-${stream.id}`).emit('new-comment', comment);
```

### 2. إدارة التعليقات
```javascript
// حذف تعليق
await db.liveComments.delete({ id: comment.id });

// إخفاء تعليق
await db.liveComments.update(
  { id: comment.id },
  { hidden: true }
);

// حظر مستخدم
await db.userBans.create({
  userId: user.id,
  streamId: stream.id,
  reason: 'تعليقات مسيئة',
});
```

### 3. الإعجابات والردود
```javascript
// إضافة إعجاب
await db.commentLikes.create({
  commentId: comment.id,
  userId: user.id,
});

// إضافة رد
const reply = await db.liveComments.create({
  streamId: stream.id,
  userId: user.id,
  parentCommentId: comment.id,
  text: 'رد على التعليق',
});
```

---

## 📹 تسجيل الفيديو

### 1. تسجيل البث
```javascript
// بدء التسجيل
const recording = await db.recordings.create({
  streamId: stream.id,
  title: stream.title,
  startTime: new Date(),
  status: 'recording',
  filePath: generateFilePath(),
});

// إيقاف التسجيل
await db.recordings.update(
  { id: recording.id },
  {
    status: 'completed',
    endTime: new Date(),
    duration: calculateDuration(),
  }
);
```

### 2. معالجة الفيديو
```javascript
// ترميز الفيديو بجودات مختلفة
const transcodeVideo = async (videoPath) => {
  const qualities = ['1080p', '720p', '480p', '360p'];
  
  for (const quality of qualities) {
    await ffmpeg.transcode(videoPath, {
      output: `${videoPath}-${quality}.mp4`,
      resolution: getResolution(quality),
      bitrate: getBitrate(quality),
    });
  }
};
```

### 3. تخزين الفيديو
```javascript
// رفع الفيديو إلى S3
const uploadToS3 = async (videoPath) => {
  const s3 = new AWS.S3();
  
  const params = {
    Bucket: 'alpha-foot-videos',
    Key: `videos/${Date.now()}.mp4`,
    Body: fs.readFileSync(videoPath),
    ContentType: 'video/mp4',
  };
  
  const result = await s3.upload(params).promise();
  return result.Location;
};
```

---

## 🎬 محرر الفيديو

### 1. قص الفيديو
```javascript
// قص جزء من الفيديو
const trimVideo = async (videoPath, startTime, endTime) => {
  await ffmpeg.trim(videoPath, {
    start: startTime,
    end: endTime,
    output: `${videoPath}-trimmed.mp4`,
  });
};
```

### 2. إضافة نصوص وعلامات مائية
```javascript
// إضافة نص على الفيديو
const addText = async (videoPath, text, position) => {
  await ffmpeg.addText(videoPath, {
    text,
    position,
    fontSize: 24,
    color: '#00BCD4',
    output: `${videoPath}-text.mp4`,
  });
};

// إضافة علامة مائية
const addWatermark = async (videoPath, watermarkPath) => {
  await ffmpeg.addWatermark(videoPath, {
    watermark: watermarkPath,
    position: 'top-right',
    output: `${videoPath}-watermark.mp4`,
  });
};
```

### 3. دمج الفيديوهات
```javascript
// دمج عدة فيديوهات
const mergeVideos = async (videoPaths) => {
  await ffmpeg.concat(videoPaths, {
    output: 'merged.mp4',
  });
};
```

---

## 📊 تحليل الفيديو الذكي

### 1. استخراج الإحصائيات
```javascript
// تحليل الفيديو بالذكاء الاصطناعي
const analyzeVideo = async (videoPath) => {
  const analysis = {
    duration: getDuration(videoPath),
    fps: getFPS(videoPath),
    resolution: getResolution(videoPath),
    bitrate: getBitrate(videoPath),
    scenes: detectScenes(videoPath),
    objects: detectObjects(videoPath),
    activities: detectActivities(videoPath),
  };
  
  return analysis;
};
```

### 2. كشف الأنشطة الرياضية
```javascript
// كشف الأنشطة والحركات
const detectActivities = async (videoPath) => {
  const activities = [];
  
  // كشف التمريرات
  const passes = detectPasses(videoPath);
  activities.push(...passes);
  
  // كشف الأهداف
  const goals = detectGoals(videoPath);
  activities.push(...goals);
  
  // كشف الإصابات
  const injuries = detectInjuries(videoPath);
  activities.push(...injuries);
  
  return activities;
};
```

### 3. توليد التقارير
```javascript
// توليد تقرير الأداء
const generatePerformanceReport = async (videoAnalysis) => {
  const report = {
    totalDuration: videoAnalysis.duration,
    totalActivities: videoAnalysis.activities.length,
    passes: videoAnalysis.activities.filter(a => a.type === 'pass').length,
    goals: videoAnalysis.activities.filter(a => a.type === 'goal').length,
    injuries: videoAnalysis.activities.filter(a => a.type === 'injury').length,
    recommendations: generateRecommendations(videoAnalysis),
  };
  
  return report;
};
```

---

## 🌐 توزيع البث عالمياً

### 1. استخدام CDN
```javascript
// إعدادات CDN
const cdnConfig = {
  provider: 'Cloudflare',
  zones: ['alphafoot.com'],
  caching: {
    defaultTTL: 3600,
    browserTTL: 1800,
  },
  compression: 'gzip',
  minification: true,
};
```

### 2. تقليل التأخير
```javascript
// استخدام DASH لتقليل التأخير
const dashConfig = {
  protocol: 'DASH',
  segmentDuration: 2, // ثانيتان
  bufferLength: 8, // 8 ثوان
  minBufferTime: 2,
};
```

---

## 🧪 الاختبار

### 1. اختبار البث
```javascript
// اختبار بدء البث
test('should start live stream', async () => {
  const stream = await startLiveStream(coach, team);
  expect(stream.status).toBe('live');
});

// اختبار المشاهدين
test('should track viewers', async () => {
  const viewers = await getViewerCount(stream.id);
  expect(viewers).toBeGreaterThan(0);
});
```

### 2. اختبار الأداء
```javascript
// قياس جودة البث
test('should maintain stream quality', async () => {
  const quality = await measureStreamQuality(stream.id);
  expect(quality.bitrate).toBeGreaterThan(4000);
  expect(quality.fps).toBe(30);
});
```

---

## 📝 ملاحظات مهمة

- البث المباشر يتطلب اتصال إنترنت قوي
- الفيديوهات تُحفظ تلقائياً بعد انتهاء البث
- يمكن إعادة مشاهدة البث المسجل لاحقاً
- التعليقات تُحفظ مع البث
- يمكن تحميل الفيديوهات بصيغ مختلفة

---

**تاريخ الإنشاء:** ديسمبر 2025
**المؤسس:** مهاب عماد إبراهيم حسن
**الإصدار:** 1.0.0
