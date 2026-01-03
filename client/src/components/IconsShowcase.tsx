import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import * as Icons from '@/components/icons/AlphaFootIcons';

export default function IconsShowcase() {
  const iconCategories = {
    'User & Profile': [
      { name: 'UserProfileIcon', component: Icons.UserProfileIcon },
      { name: 'UserPlusIcon', component: Icons.UserPlusIcon },
      { name: 'SettingsIcon', component: Icons.SettingsIcon },
      { name: 'LogoutIcon', component: Icons.LogoutIcon },
    ],
    'Training & Coaching': [
      { name: 'TrainingIcon', component: Icons.TrainingIcon },
      { name: 'CoachingIcon', component: Icons.CoachingIcon },
      { name: 'DrilsIcon', component: Icons.DrilsIcon },
    ],
    'Performance & Analytics': [
      { name: 'PerformanceIcon', component: Icons.PerformanceIcon },
      { name: 'AnalyticsIcon', component: Icons.AnalyticsIcon },
      { name: 'StatsIcon', component: Icons.StatsIcon },
    ],
    'Communication': [
      { name: 'ChatIcon', component: Icons.ChatIcon },
      { name: 'NotificationIcon', component: Icons.NotificationIcon },
      { name: 'MessageIcon', component: Icons.MessageIcon },
    ],
    'Achievement & Badges': [
      { name: 'BadgeIcon', component: Icons.BadgeIcon },
      { name: 'TrophyIcon', component: Icons.TrophyIcon },
      { name: 'AchievementIcon', component: Icons.AchievementIcon },
    ],
    'AI & Neural Network': [
      { name: 'AIIcon', component: Icons.AIIcon },
      { name: 'BrainIcon', component: Icons.BrainIcon },
      { name: 'NeuralNetworkIcon', component: Icons.NeuralNetworkIcon },
    ],
    'Video & Media': [
      { name: 'VideoIcon', component: Icons.VideoIcon },
      { name: 'LiveStreamIcon', component: Icons.LiveStreamIcon },
      { name: 'RecordIcon', component: Icons.RecordIcon },
    ],
    'Payment & Transaction': [
      { name: 'PaymentIcon', component: Icons.PaymentIcon },
      { name: 'CardIcon', component: Icons.CardIcon },
      { name: 'WalletIcon', component: Icons.WalletIcon },
    ],
    'Admin & Management': [
      { name: 'AdminIcon', component: Icons.AdminIcon },
      { name: 'DashboardIcon', component: Icons.DashboardIcon },
      { name: 'ReportsIcon', component: Icons.ReportsIcon },
    ],
    'Search & Filter': [
      { name: 'SearchIcon', component: Icons.SearchIcon },
      { name: 'FilterIcon', component: Icons.FilterIcon },
    ],
    'File & Upload': [
      { name: 'UploadIcon', component: Icons.UploadIcon },
      { name: 'DownloadIcon', component: Icons.DownloadIcon },
      { name: 'ShareIcon', component: Icons.ShareIcon },
      { name: 'BookmarkIcon', component: Icons.BookmarkIcon },
    ],
    'Action': [
      { name: 'EditIcon', component: Icons.EditIcon },
      { name: 'DeleteIcon', component: Icons.DeleteIcon },
      { name: 'MoreIcon', component: Icons.MoreIcon },
    ],
    'Status': [
      { name: 'CheckIcon', component: Icons.CheckIcon },
      { name: 'CloseIcon', component: Icons.CloseIcon },
      { name: 'AlertIcon', component: Icons.AlertIcon },
      { name: 'InfoIcon', component: Icons.InfoIcon },
    ],
    'Navigation': [
      { name: 'BackIcon', component: Icons.BackIcon },
      { name: 'HomeIcon', component: Icons.HomeIcon },
      { name: 'MenuIcon', component: Icons.MenuIcon },
      { name: 'ArrowRightIcon', component: Icons.ArrowRightIcon },
      { name: 'ArrowDownIcon', component: Icons.ArrowDownIcon },
    ],
    'Football Specific': [
      { name: 'FootballIcon', component: Icons.FootballIcon },
      { name: 'GoalIcon', component: Icons.GoalIcon },
      { name: 'PlayerIcon', component: Icons.PlayerIcon },
      { name: 'TeamIcon', component: Icons.TeamIcon },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">نظام الأيقونات الموحد Alpha Foot 2030</h1>
          <p className="text-gray-400 text-lg">مجموعة شاملة من الأيقونات الموحدة لجميع صفحات التطبيق</p>
        </div>

        {Object.entries(iconCategories).map(([category, icons]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-cyan-400">{category}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {icons.map(({ name, component: IconComponent }) => (
                <Card key={name} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20 hover:border-cyan-500/50 transition">
                  <CardContent className="p-6 flex flex-col items-center justify-center">
                    <IconComponent size={32} color="#00D9FF" className="mb-3" />
                    <p className="text-xs text-gray-400 text-center truncate">{name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Usage Example */}
        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20 mt-12">
          <CardHeader>
            <CardTitle>مثال على الاستخدام</CardTitle>
            <CardDescription>كيفية استخدام نظام الأيقونات في الصفحات</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm">
{`import { UserProfileIcon, PerformanceIcon, ChatIcon } from '@/components/icons/AlphaFootIcons';

export default function MyComponent() {
  return (
    <div>
      {/* استخدام بحجم مخصص */}
      <UserProfileIcon size={24} color="#00D9FF" />
      
      {/* استخدام مع className */}
      <PerformanceIcon className="text-cyan-400" />
      
      {/* استخدام مع لون مخصص */}
      <ChatIcon size={32} color="#FFD700" />
    </div>
  );
}`}
            </pre>
          </CardContent>
        </Card>

        {/* Color Palette */}
        <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20 mt-8">
          <CardHeader>
            <CardTitle>نظام الألوان</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400 rounded-lg mx-auto mb-2"></div>
                <p className="text-sm">السيان</p>
                <p className="text-xs text-gray-400">#00D9FF</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-lg mx-auto mb-2"></div>
                <p className="text-sm">الذهبي</p>
                <p className="text-xs text-gray-400">#FFD700</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-2"></div>
                <p className="text-sm">الأزرق</p>
                <p className="text-xs text-gray-400">#0099CC</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg mx-auto mb-2"></div>
                <p className="text-sm">الأبيض</p>
                <p className="text-xs text-gray-400">#FFFFFF</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-lg mx-auto mb-2"></div>
                <p className="text-sm">الرمادي</p>
                <p className="text-xs text-gray-400">#475569</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
