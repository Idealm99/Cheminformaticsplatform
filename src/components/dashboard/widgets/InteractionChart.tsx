import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'AS1517499', energy: -12.4 },
  { name: 'GSK2894512', energy: -13.8 },
  { name: 'Comp. 25', energy: -9.2 },
  { name: 'SAR-1', energy: -10.5 },
  { name: 'BMT-123', energy: -7.8 },
  { name: 'X12', energy: -6.5 },
];

export default function InteractionChart() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
      <div className="mb-4">
        <h3 className="text-lg text-slate-100">Binding Energy Analysis</h3>
        <p className="text-xs text-slate-500">Docking scores (kcal/mol)</p>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} margin={{ top: 10, right: 10, bottom: 60, left: 10 }}>
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
            label={{ value: 'Energy (kcal/mol)', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 11 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#0f172a',
              border: '1px solid #334155',
              borderRadius: '8px',
              fontSize: '12px',
            }}
            labelStyle={{ color: '#cbd5e1' }}
          />
          <Bar dataKey="energy" fill="#06B6D4" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
