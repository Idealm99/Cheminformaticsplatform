import { FlaskConical, Pill, Atom, FileText, ArrowRight, Clock, CheckCircle2, TrendingUp } from 'lucide-react';

export default function HomePage() {
  const recentWorkflows = [
    { id: 1, name: 'STAT6 Target Discovery', steps: 3, lastRun: '2 hours ago', status: 'complete' },
    { id: 2, name: 'Anti-IL4R Competitor Analysis', steps: 4, lastRun: '1 day ago', status: 'complete' },
    { id: 3, name: 'Dupilumab Structural Study', steps: 2, lastRun: '3 days ago', status: 'draft' },
  ];

  const stats = [
    { label: 'Total Workflows', value: '24', icon: TrendingUp, color: 'blue' },
    { label: 'Completed Runs', value: '156', icon: CheckCircle2, color: 'emerald' },
    { label: 'Active Projects', value: '8', icon: Clock, color: 'amber' },
  ];

  const workflowTemplates = [
    {
      title: 'Target Identification',
      description: 'Discover and validate biological targets using protein databases',
      icon: FlaskConical,
      color: 'blue',
      steps: 3,
    },
    {
      title: 'Competitor Analysis',
      description: 'Analyze competitor drugs and market landscape',
      icon: Pill,
      color: 'emerald',
      steps: 4,
    },
    {
      title: 'Structural Analysis',
      description: 'Perform chemical space clustering and structure analysis',
      icon: Atom,
      color: 'purple',
      steps: 2,
    },
    {
      title: 'Clinical Research',
      description: 'Search clinical trials, FDA data, and patent information',
      icon: FileText,
      color: 'orange',
      steps: 3,
    },
  ];

  return (
    <div className="flex-1 bg-slate-50 overflow-y-auto">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-slate-900 mb-2">Scientific Workflow Platform</h1>
          <p className="text-slate-600">
            Streamline your drug discovery research with AI-powered workflows
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colorClasses = {
              blue: 'bg-blue-50 text-blue-600',
              emerald: 'bg-emerald-50 text-emerald-600',
              amber: 'bg-amber-50 text-amber-600',
            };
            return (
              <div key={index} className="bg-white rounded-lg border border-slate-200 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-lg ${colorClasses[stat.color as keyof typeof colorClasses]} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* Workflow Templates */}
          <div>
            <h2 className="text-slate-900 mb-4">Workflow Templates</h2>
            <div className="space-y-3">
              {workflowTemplates.map((template, index) => {
                const Icon = template.icon;
                const colorClasses = {
                  blue: 'bg-blue-50 text-blue-600',
                  emerald: 'bg-emerald-50 text-emerald-600',
                  purple: 'bg-purple-50 text-purple-600',
                  orange: 'bg-orange-50 text-orange-600',
                };
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg border border-slate-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all cursor-pointer group"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg ${colorClasses[template.color as keyof typeof colorClasses]} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-sm font-semibold text-slate-900">{template.title}</h3>
                          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                        </div>
                        <p className="text-xs text-slate-600 mb-2">{template.description}</p>
                        <p className="text-xs text-slate-500">{template.steps} steps</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Workflows */}
          <div>
            <h2 className="text-slate-900 mb-4">Recent Workflows</h2>
            <div className="space-y-3">
              {recentWorkflows.map((workflow) => (
                <div
                  key={workflow.id}
                  className="bg-white rounded-lg border border-slate-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-sm font-semibold text-slate-900">{workflow.name}</h3>
                    {workflow.status === 'complete' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    ) : (
                      <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    )}
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span>{workflow.steps} steps</span>
                    <span>{workflow.lastRun}</span>
                  </div>
                </div>
              ))}
              <button className="w-full py-2.5 text-sm text-blue-600 hover:text-blue-700 font-medium hover:bg-blue-50 rounded-lg transition-colors">
                View All Workflows
              </button>
            </div>

            {/* Quick Start */}
            <div className="mt-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
              <h3 className="font-semibold mb-2">Ready to start?</h3>
              <p className="text-sm text-blue-100 mb-4">
                Create a new workflow or use a template to begin your analysis
              </p>
              <button className="w-full px-4 py-2.5 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors text-sm">
                Create New Workflow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
