import { TrendingUp, FileText } from 'lucide-react';

const timeline = [
  { year: 2020, filings: 11, assignees: ['Pfizer', 'GSK'] },
  { year: 2021, filings: 16, assignees: ['Novartis', 'Sanofi', 'Pfizer'] },
  { year: 2022, filings: 21, assignees: ['GSK', 'Novartis', 'Merck'] },
  { year: 2023, filings: 28, assignees: ['Pfizer', 'Novartis', 'GSK', 'Astellas'] },
];

const topAssignees = [
  { name: 'Pfizer Inc.', count: 23, percentage: 100 },
  { name: 'Novartis AG', count: 18, percentage: 78 },
  { name: 'GSK', count: 15, percentage: 65 },
  { name: 'Merck & Co.', count: 12, percentage: 52 },
  { name: 'Sanofi', count: 9, percentage: 39 },
];

export default function PatentTimeline() {
  const maxFilings = Math.max(...timeline.map(t => t.filings));

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg text-slate-100">Patent Landscape Timeline</h3>
          <p className="text-xs text-slate-500">Filing activity and key assignees (2020-2023)</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-emerald-400">
          <TrendingUp className="w-4 h-4" />
          <span>+85% Growth</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Timeline Chart */}
        <div>
          <div className="text-sm text-slate-400 mb-4">Annual Filing Activity</div>
          <div className="space-y-3">
            {timeline.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-slate-400">{item.year}</span>
                  <span className="text-slate-300">{item.filings} filings</span>
                </div>
                <div className="relative h-10 bg-slate-950 rounded-lg overflow-hidden border border-slate-800">
                  <div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-end pr-3"
                    style={{ width: `${(item.filings / maxFilings) * 100}%` }}
                  >
                    <div className="flex gap-1">
                      {item.assignees.slice(0, 3).map((assignee, i) => (
                        <div
                          key={i}
                          className="text-xs text-slate-950 bg-white/20 px-1.5 py-0.5 rounded"
                        >
                          {assignee}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Assignees */}
        <div>
          <div className="text-sm text-slate-400 mb-4">Top Patent Assignees</div>
          <div className="space-y-3">
            {topAssignees.map((assignee, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-950 border border-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-slate-300">{assignee.name}</span>
                    <span className="text-slate-500">{assignee.count} patents</span>
                  </div>
                  <div className="h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      style={{ width: `${assignee.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
