import { Search, Mic, FlaskConical, FileText, Bell, TrendingUp, TrendingDown, ChevronRight, Clock } from 'lucide-react';

export default function HomePage() {
  const kpiCards = [
    { 
      icon: FlaskConical, 
      value: '20', 
      label: 'Ongoing Projects', 
      trend: '+8%', 
      trendUp: true,
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-50'
    },
    { 
      icon: FileText, 
      value: '3', 
      label: 'Clinical Projects', 
      trend: '-12%', 
      trendUp: false,
      iconColor: 'text-emerald-500',
      iconBg: 'bg-emerald-50'
    },
    { 
      icon: TrendingUp, 
      value: '34%', 
      label: 'Success Rate', 
      trend: '+2%', 
      trendUp: true,
      iconColor: 'text-purple-500',
      iconBg: 'bg-purple-50'
    },
  ];

  const activeProjects = [
    {
      category: 'Target Validation',
      projects: [
        { id: 'PRX-2024', description: 'KRAS G12C Inhibitor' },
        { id: 'TRG-2301', description: 'STAT6 Modulator' }
      ]
    },
    {
      category: 'Compound Discovery',
      projects: [
        { id: 'CMP-4512', description: 'IL-4R Antagonist' }
      ]
    },
    {
      category: 'Structure Analysis',
      projects: [
        { id: 'STR-8801', description: 'PD-1 Antibody' },
        { id: 'STR-7743', description: 'BTK Inhibitor' }
      ]
    },
    {
      category: 'Pathway Integration',
      projects: [
        { id: 'PTH-3309', description: 'mTOR Pathway' }
      ]
    },
    {
      category: 'Clinical & Safety',
      projects: [
        { id: 'CLN-9921', description: 'Phase II Study' }
      ]
    }
  ];

  const recentActivities = [
    { title: 'Agent analyzed STAT6 structure', time: '10m ago' },
    { title: 'New patent found for KRAS', time: '1h ago' },
    { title: 'Compound screening completed', time: '2h ago' },
    { title: 'Clinical trial updated: PRX-2024', time: '3h ago' }
  ];

  const marketSensing = [
    { 
      count: '24', 
      title: 'New Papers', 
      subtitle: 'Latest Research',
      bgColor: 'bg-blue-500',
      textColor: 'text-white'
    },
    { 
      count: '8', 
      title: 'Patent Info', 
      subtitle: 'New Patents',
      bgColor: 'bg-emerald-500',
      textColor: 'text-white'
    },
    { 
      count: '12', 
      title: 'Clinical Trials', 
      subtitle: 'Updates',
      bgColor: 'bg-indigo-600',
      textColor: 'text-white'
    }
  ];

  return (
    <div className="flex-1 bg-slate-50 overflow-y-auto">
      <div className="max-w-6xl mx-auto px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-3xl mx-auto">
            <div className="flex items-center gap-3 bg-white rounded-full border border-slate-200 shadow-sm px-6 py-3.5 hover:shadow-md transition-shadow">
              <Search className="w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Ask AI Research Agent..."
                className="flex-1 bg-transparent border-none outline-none text-slate-900 placeholder:text-slate-400"
              />
              <Mic className="w-5 h-5 text-slate-400 cursor-pointer hover:text-slate-600" />
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {kpiCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={index} className="bg-white rounded-xl border border-slate-200 p-5">
                <div className={`w-10 h-10 rounded-lg ${card.iconBg} flex items-center justify-center mb-3`}>
                  <Icon className={`w-5 h-5 ${card.iconColor}`} />
                </div>
                <div className="mb-1">{card.value}</div>
                <div className="text-slate-600 text-sm mb-2">{card.label}</div>
                {card.trendUp !== null ? (
                  <div className={`flex items-center gap-1 text-xs ${card.trendUp ? 'text-emerald-600' : 'text-red-600'}`}>
                    {card.trendUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    <span>{card.trend} vs last month</span>
                  </div>
                ) : (
                  <div className="text-xs text-amber-600">{card.trend}</div>
                )}
              </div>
            );
          })}
        </div>

        {/* Active Projects */}
        <div className="mb-8">
          <h2 className="text-slate-900 mb-4">Active Projects</h2>
          <div className="grid grid-cols-5 gap-4">
            {activeProjects.map((category, catIndex) => (
              <div key={catIndex} className="space-y-3">
                <h3 className="text-sm text-slate-600">{category.category}</h3>
                {category.projects.map((project, projIndex) => (
                  <div key={projIndex} className="bg-white rounded-lg border border-slate-200 p-3 hover:border-blue-300 hover:shadow-sm transition-all cursor-pointer">
                    <div className="text-sm text-slate-900 mb-1">{project.id}</div>
                    <div className="text-xs text-slate-500">{project.description}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity & Market Sensing */}
        <div className="grid grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div>
            <h2 className="text-slate-900 mb-4">Recent Activity</h2>
            <div className="bg-white rounded-xl border border-slate-200 p-5">
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between py-2 hover:bg-slate-50 -mx-2 px-2 rounded-lg cursor-pointer group"
                  >
                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-slate-400 mt-0.5" />
                      <div>
                        <div className="text-sm text-slate-900">{activity.title}</div>
                        <div className="text-xs text-slate-500">{activity.time}</div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Market Sensing */}
          <div>
            <h2 className="text-slate-900 mb-4">Market Sensing</h2>
            <div className="grid grid-cols-3 gap-4">
              {marketSensing.map((item, index) => (
                <div 
                  key={index} 
                  className={`${item.bgColor} ${item.textColor} rounded-xl p-6 cursor-pointer hover:scale-105 transition-transform`}
                >
                  <div className="text-3xl mb-2">{item.count}</div>
                  <div className="text-sm mb-1">{item.title}</div>
                  <div className="text-xs opacity-90 mb-3">{item.subtitle}</div>
                  <div className="flex items-center gap-1 text-xs">
                    <span>View details</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}