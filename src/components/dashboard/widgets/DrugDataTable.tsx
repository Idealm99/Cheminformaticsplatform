const drugs = [
  { name: 'AS1517499', phase: 'Preclinical', ic50: '21 nM', developer: 'Astellas', cluster: 3 },
  { name: 'GSK2894512', phase: 'Phase I', ic50: '9.8 nM', developer: 'GSK', cluster: 3 },
  { name: 'Compound 25', phase: 'Lead Opt', ic50: '145 nM', developer: 'Pfizer', cluster: 1 },
  { name: 'SAR-1', phase: 'Phase I', ic50: '87 nM', developer: 'Sanofi', cluster: 2 },
  { name: 'BMT-123', phase: 'Preclinical', ic50: '340 nM', developer: 'Biomarin', cluster: 5 },
  { name: 'Compound X12', phase: 'Lead Opt', ic50: '520 nM', developer: 'Novartis', cluster: 4 },
];

export default function DrugDataTable() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
      <div className="mb-4">
        <h3 className="text-lg text-slate-100">Competitive Drug Landscape</h3>
        <p className="text-xs text-slate-500">247 compounds analyzed</p>
      </div>

      <div className="overflow-hidden border border-slate-800 rounded-lg">
        <table className="w-full text-sm">
          <thead className="bg-slate-950">
            <tr>
              <th className="px-4 py-3 text-left text-xs text-slate-400">Compound</th>
              <th className="px-4 py-3 text-left text-xs text-slate-400">Phase</th>
              <th className="px-4 py-3 text-left text-xs text-slate-400">IC50</th>
              <th className="px-4 py-3 text-left text-xs text-slate-400">Developer</th>
              <th className="px-4 py-3 text-left text-xs text-slate-400">Cluster</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {drugs.map((drug, index) => (
              <tr key={index} className="hover:bg-slate-800/50 transition-colors">
                <td className="px-4 py-3 text-slate-100">{drug.name}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      drug.phase.includes('Phase')
                        ? 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20'
                        : 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/20'
                    }`}
                  >
                    {drug.phase}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-300">{drug.ic50}</td>
                <td className="px-4 py-3 text-slate-400">{drug.developer}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-purple-400/10 text-purple-400 rounded text-xs">
                    {drug.cluster}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
