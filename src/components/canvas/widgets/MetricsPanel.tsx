import { Target, Pill, FlaskConical, FileText } from 'lucide-react';

export default function MetricsPanel() {
  const metrics = [
    {
      label: 'Druggability',
      value: '7.8',
      unit: '/10',
      icon: Target,
      change: '+0.5',
      color: 'emerald',
    },
    {
      label: 'Active Compounds',
      value: '247',
      unit: '',
      icon: Pill,
      change: 'Validated',
      color: 'cyan',
    },
    {
      label: 'Chem. Clusters',
      value: '7',
      unit: 'families',
      icon: FlaskConical,
      change: 'High diversity',
      color: 'purple',
    },
    {
      label: 'Patent Families',
      value: '156',
      unit: '',
      icon: FileText,
      change: '+85% YoY',
      color: 'amber',
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <Icon className={`w-5 h-5 text-${metric.color}-400`} />
              <div className="text-xs text-slate-500">{metric.change}</div>
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
