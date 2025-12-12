import { Home, Bot, Database, User } from 'lucide-react';

interface GlobalNavRailProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function GlobalNavRail({ activeView, onViewChange }: GlobalNavRailProps) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'agents', icon: Bot, label: 'Agents' },
    { id: 'rag', icon: Database, label: 'RAG' },
  ];

  return (
    <div className="w-16 bg-slate-50 border-r border-slate-200 flex flex-col items-center py-4">
      {/* Top Nav Items */}
      <div className="space-y-2 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title={item.label}
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}
      </div>

      {/* User Profile at Bottom */}
      <div className="mt-auto">
        <button
          className="w-12 h-12 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center transition-all"
          title="User Profile"
        >
          <User className="w-5 h-5 text-slate-600" />
        </button>
      </div>
    </div>
  );
}
