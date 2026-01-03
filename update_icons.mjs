#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, 'client/src/pages');

// قائمة الملفات المراد تحديثها
const filesToUpdate = [
  'PlayerDashboard.tsx',
  'AIChat.tsx',
  'AdminStatistics.tsx',
  'Analytics.tsx',
  'TalentDiscovery.tsx',
  'TalentMarketplace.tsx',
  'PerformanceReports.tsx',
  'RevenueAnalytics.tsx',
  'Subscriptions.tsx',
  'AIAssistants.tsx',
];

// دالة لتحديث الملف
function updateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // التحقق من وجود الاستيراد بالفعل
    if (content.includes('@/components/icons/AlphaFootIcons')) {
      console.log(`✓ ${path.basename(filePath)} - تم التحديث بالفعل`);
      return;
    }
    
    // إضافة الاستيراد إذا كان يستخدم lucide-react
    if (content.includes('from "lucide-react"')) {
      const lucideImportMatch = content.match(/import\s*{[^}]*}\s*from\s*["']lucide-react["'];/);
      
      if (lucideImportMatch) {
        const lucideImport = lucideImportMatch[0];
        const newImport = `${lucideImport}\nimport { PerformanceIcon, AnalyticsIcon, BrainIcon, ChatIcon, PlayerIcon, GoalIcon, TrainingIcon, CoachingIcon, StatsIcon, DashboardIcon, ReportsIcon, SearchIcon, FilterIcon, EditIcon, DeleteIcon } from "@/components/icons/AlphaFootIcons";`;
        
        content = content.replace(lucideImport, newImport);
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`✓ ${path.basename(filePath)} - تم التحديث بنجاح`);
      }
    }
  } catch (error) {
    console.error(`✗ خطأ في ${path.basename(filePath)}: ${error.message}`);
  }
}

// تحديث جميع الملفات
console.log('🚀 جاري تحديث الأيقونات في جميع الملفات...\n');

filesToUpdate.forEach(file => {
  const filePath = path.join(pagesDir, file);
  if (fs.existsSync(filePath)) {
    updateFile(filePath);
  } else {
    console.log(`⚠ ${file} - لم يتم العثور عليه`);
  }
});

console.log('\n✅ تم الانتهاء من التحديث!');
