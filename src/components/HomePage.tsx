import { FlaskConical, Pill, Atom, FileText, ArrowRight, Clock, CheckCircle2, TrendingUp, LayoutDashboard, Bot, Settings, Database, Search, Mic, Bell, TrendingDown, ChevronRight, Calendar } from 'lucide-react';

export default function HomePage() {
  const kpiMetrics = [
    { 
      label: 'Ongoing Projects', 
      value: '20', 
      trend: '+8%', 
      trendLabel: 'vs last month',
      isPositive: true,
      icon: FlaskConical, 
      color: 'blue' 
    },
    { 
      label: 'Clinical Projects', 
      value: '3', 
      trend: '-12%', 
      trendLabel: 'vs last month',
      isPositive: false,
      icon: FileText, 
      color: 'emerald' 
    },
    { 
      label: 'New Alerts', 
      value: '5', 
      trend: 'Requires Attention',
      trendLabel: '',
      isPositive: null,
      icon: Bell, 
      color: 'amber' 
    },
    { 
      label: 'Success Rate', 
      value: '34%', 
      trend: '+2%', 
      trendLabel: 'vs last month',
      isPositive: true,
      icon: TrendingUp, 
      color: 'purple' 
    },
  ];

  const pipelineColumns = [
    {
      title: 'Target Validation',
      projects: [
        { id: 'PRX-2024', subtitle: 'KRAS G12C Inhibitor', color: 'blue' },
        { id: 'TRG-2301', subtitle: 'STAT6 Modulator', color: 'purple' },
      ]
    },
    {
      title: 'Compound Discovery',
      projects: [
        { id: 'CMP-4512', subtitle: 'IL-4R Antagonist', color: 'emerald' },
      ]
    },
    {
      title: 'Structure Analysis',
      projects: [
        { id: 'STR-8801', subtitle: 'PD-1 Antibody', color: 'amber' },
        { id: 'STR-7743', subtitle: 'BTK Inhibitor', color: 'orange' },
      ]
    },
    {
      title: 'Pathway Integration',
      projects: [
        { id: 'PTH-3309', subtitle: 'mTOR Pathway', color: 'indigo' },
      ]
    },
    {
      title: 'Clinical & Safety',
      projects: [
        { id: 'CLN-9921', subtitle: 'Phase II Study', color: 'rose' },
      ]
    },
  ];

  const recentActivity = [
    { action: 'Agent analyzed STAT6 structure', time: '10m ago' },
    { action: 'New patent found for KRAS', time: '1h ago' },
    { action: 'Compound screening completed', time: '2h ago' },
    { action: 'Clinical trial updated: PRX-2024', time: '3h ago' },
    { action: 'Structure validation passed', time: '5h ago' },
  ];

  const marketSensing = [
    { title: 'New Papers', subtitle: 'Latest Research', count: '24', color: 'blue' },
    { title: 'Patent Info', subtitle: 'New Patents', count: '8', color: 'teal' },
    { title: 'Clinical Trials', subtitle: 'Updates', count: '12', color: 'indigo' },
  ];

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, active: true },
    { name: 'Research Agent', icon: Bot, active: false },
    { name: 'Custom Agent', icon: Settings, active: false },
    { name: 'Knowledge DB', icon: Database, active: false },
  ];

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full flex flex-col max-w-[2000px] w-full px-[300px] py-[0px]">
          {/* Section A: Global Search */}
          <div className="mb-6 flex justify-center">
            <div className="w-full max-w-4xl relative">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Ask AI Research Agent..."
                  className="w-full pl-14 pr-14 py-4 rounded-full border-2 border-slate-200 focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-100 shadow-md transition-all text-slate-900 bg-white"
                />
                <Mic className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 hover:text-blue-600 cursor-pointer transition-colors" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl -z-10"></div>
            </div>
          </div>

          {/* Section B: KPI Cards */}
          <div className="grid grid-cols-4 gap-8 mb-6">
            {kpiMetrics.map((metric, index) => {
              const Icon = metric.icon;
              const colorClasses = {
                blue: 'bg-blue-50 text-blue-600',
                emerald: 'bg-emerald-50 text-emerald-600',
                amber: 'bg-amber-50 text-amber-600',
                purple: 'bg-purple-50 text-purple-600',
              };
              return (
                <div key={index} className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 rounded-lg ${colorClasses[metric.color as keyof typeof colorClasses]} flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="mb-1">
                    <p className="text-3xl font-semibold text-slate-900">{metric.value}</p>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">{metric.label}</p>
                  {metric.isPositive !== null ? (
                    <div className={`flex items-center gap-1 text-xs ${metric.isPositive ? 'text-emerald-600' : 'text-red-600'}`}>
                      {metric.isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      <span className="font-medium">{metric.trend}</span>
                      <span className="text-slate-500">{metric.trendLabel}</span>
                    </div>
                  ) : (
                    <p className="text-xs text-amber-600 font-medium">{metric.trend}</p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Section C: Active Project Pipeline */}
          <div className="mb-6 flex-shrink-0">
            <h2 className="text-slate-900 mb-4">Active Projects</h2>
            <div className="grid grid-cols-5 gap-4">
              {pipelineColumns.map((column, colIndex) => (
                <div key={colIndex} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h3 className="text-sm font-semibold text-slate-700 mb-3">{column.title}</h3>
                  <div className="space-y-2">
                    {column.projects.map((project) => {
                      const colorClasses = {
                        blue: 'border-blue-200 bg-blue-50/50 hover:border-blue-400',
                        purple: 'border-purple-200 bg-purple-50/50 hover:border-purple-400',
                        emerald: 'border-emerald-200 bg-emerald-50/50 hover:border-emerald-400',
                        amber: 'border-amber-200 bg-amber-50/50 hover:border-amber-400',
                        orange: 'border-orange-200 bg-orange-50/50 hover:border-orange-400',
                        indigo: 'border-indigo-200 bg-indigo-50/50 hover:border-indigo-400',
                        rose: 'border-rose-200 bg-rose-50/50 hover:border-rose-400',
                      };
                      return (
                        <div
                          key={project.id}
                          className={`bg-white rounded-lg p-3 border-l-4 shadow-sm hover:shadow-md transition-all cursor-pointer ${
                            colorClasses[project.color as keyof typeof colorClasses]
                          }`}
                        >
                          <p className="text-sm font-semibold text-slate-900">{project.id}</p>
                          <p className="text-xs text-slate-600 mt-1">{project.subtitle}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section D: Bottom Split View */}
          <div className="grid grid-cols-5 gap-6 flex-1 min-h-0">
            {/* Left Column: Recent Activity (40% = 2 cols) */}
            <div className="col-span-2">
              <h2 className="text-slate-900 mb-4">Recent Activity</h2>
              <div className="bg-white rounded-lg border border-slate-200 shadow-sm divide-y divide-slate-100 h-full overflow-hidden">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="p-4 hover:bg-slate-50 transition-colors cursor-pointer group">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                          {activity.action}
                        </p>
                        <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {activity.time}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Market Sensing (60% = 3 cols) */}
            <div className="col-span-3">
              <h2 className="text-slate-900 mb-4">Market Sensing</h2>
              <div className="grid grid-cols-3 gap-4">
                {marketSensing.map((item, index) => {
                  const colorClasses = {
                    blue: 'from-blue-500 to-blue-600',
                    teal: 'from-teal-500 to-teal-600',
                    indigo: 'from-indigo-500 to-indigo-600',
                  };
                  return (
                    <div
                      key={index}
                      className={`bg-gradient-to-br ${colorClasses[item.color as keyof typeof colorClasses]} rounded-lg p-6 text-white shadow-md hover:shadow-lg transition-all cursor-pointer group`}
                    >
                      <div className="mb-4">
                        <p className="text-4xl font-bold">{item.count}</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">{item.title}</p>
                        <p className="text-sm opacity-90">{item.subtitle}</p>
                      </div>
                      <div className="mt-4 flex items-center text-sm opacity-75 group-hover:opacity-100 transition-opacity">
                        View details <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}