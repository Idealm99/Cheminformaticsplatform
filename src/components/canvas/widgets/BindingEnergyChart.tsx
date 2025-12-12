import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'GSK2894512', energy: -13.8, potency: 9.8 },
  { name: 'AS1517499', energy: -12.4, potency: 21 },
  { name: 'SAR-1', energy: -10.5, potency: 87 },
  { name: 'Comp. 25', energy: -9.2, potency: 145 },
  { name: 'BMT-123', energy: -7.8, potency: 340 },
  { name: 'NVS-456', energy: -7.2, potency: 420 },
];

export default function BindingEnergyChart() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
      <div className="mb-4">
        <h3 className="text-lg text-slate-100">Binding Energy Analysis</h3>
        <p className="text-xs text-slate-500">Molecular docking scores (kcal/mol)</p>
      </div>

      <div style={{ height: '320px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, bottom: 70, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis
              dataKey="name"
              angle={-45}
              textAnchor="end"
              height={80}
              tick={{ fill: '#64748b', fontSize: 11 }}
              stroke="#475569"
            />
            <YAxis
              tick={{ fill: '#64748b', fontSize: 11 }}
              stroke="#475569"
              label={{
                value: 'Energy (kcal/mol)',
                angle: -90,
                position: 'insideLeft',
                fill: '#64748b',
                fontSize: 11,
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0f172a',
                border: '1px solid #334155',
                borderRadius: '8px',
                fontSize: '12px',
              }}
              labelStyle={{ color: '#cbd5e1' }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-slate-900 border border-slate-700 rounded-lg p-3">
                      <div className="text-sm text-slate-100 mb-1">{data.name}</div>
                      <div className="text-xs text-cyan-400">Energy: {data.energy} kcal/mol</div>
                      <div className="text-xs text-emerald-400">IC50: {data.potency} nM</div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="energy" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.energy < -12 ? '#10B981' : entry.energy < -9 ? '#06B6D4' : '#64748b'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}