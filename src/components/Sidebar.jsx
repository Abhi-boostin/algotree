import { Home, Settings, User, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Sidebar({ className }) {
  return (
    <aside className={cn("w-64 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700", className)}>
      <div className="p-4">
        <nav className="space-y-1">
          <div className="flex items-center px-3 py-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-md">
            <FileText className="mr-3 h-5 w-5" />
            <span>Details</span>
          </div>
          <div className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md">
            <Home className="mr-3 h-5 w-5" />
            <span>Dashboard</span>
          </div>
          <div className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md">
            <User className="mr-3 h-5 w-5" />
            <span>Profile</span>
          </div>
          <div className="flex items-center px-3 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md">
            <Settings className="mr-3 h-5 w-5" />
            <span>Settings</span>
          </div>
        </nav>
      </div>
    </aside>
  );
} 