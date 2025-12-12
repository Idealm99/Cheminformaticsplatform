import { TrendingUp, Target, Zap, Award } from 'lucide-react';

export default function MetricsGrid() {
  const metrics = [
    {
      label: 'Druggability Score',
      value: '7.8',
      unit: '/10',
      icon: Target,
      color: 'emerald',
      trend: '+12%',
    },
    {
      label: 'Active Compounds',
      value: '247',
      unit: '',
      icon: Zap,
      color: 'cyan',
      trend: 'Validated',
    },
    {
      label: 'Chemical Clusters',
      value: '7',
      unit: 'families',
      icon: Award,
      color: 'purple',
      trend: 'High diversity',
    },
    {
      label: 'Patent Coverage',
      value: '156',
      unit: 'families',
      icon: TrendingUp,
      color: 'amber',
      trend: '+85% YoY',
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-400/30 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg bg-${metric.color}-400/10 flex items-center justify-center`}>
                <Icon className={`w-5 h-5 text-${metric.color}-400`} />
              </div>
              <div className="text-xs text-slate-500">{metric.trend}</div>
            </div>
            <div className="flex items-baseline gap-1 mb-1">
              <div className="text-3xl text-slate-100">{metric.value}</div>
              {metric.unit && <div className="text-sm text-slate-500">{metric.unit}</div>}
            </div>
            <div className="text-xs text-slate-400">{metric.label}</div>
          </div>
        );
      })}
    </div>
  );
}
