import { CheckCircle2, AlertCircle, TrendingUp } from 'lucide-react';

interface StepDetailsViewProps {
  stepNumber: number;
  stepTitle: string;
}

export default function StepDetailsView({ stepNumber, stepTitle }: StepDetailsViewProps) {
  return (
    <div className="bg-slate-950">
      <div className="max-w-5xl mx-auto p-8">
        <div className="mb-6">
          <h2 className="text-xl text-slate-100 mb-2">Interactive Data Visualizations</h2>
          <p className="text-sm text-slate-400">Detailed metrics and analysis for {stepTitle}</p>
        </div>

        {/* Result Cards Grid */}
        <div className="grid grid-cols-2 gap-6">
          {getStepResults(stepNumber).map((result, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-400/30 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg text-slate-100">{result.title}</h3>
                {result.status === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                ) : result.status === 'warning' ? (
                  <AlertCircle className="w-5 h-5 text-amber-400" />
                ) : (
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                )}
              </div>
              <div className="space-y-2 text-sm text-slate-300">{result.content}</div>
              {result.metric && (
                <div className="mt-4 pt-4 border-t border-slate-800">
                  <div className="text-2xl text-cyan-400">{result.metric}</div>
                  <div className="text-xs text-slate-500 mt-1">{result.metricLabel}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function getStepResults(stepNumber: number) {
  const results: Record<number, any[]> = {
    1: [
      {
        title: 'Protein Structure Quality',
        status: 'success',
        content: (
          <>
            <div>• Found 3 high-resolution X-ray structures</div>
            <div>• Best structure: 6WTT at 2.15 Å resolution</div>
            <div>• R-factor: 0.189 (excellent quality)</div>
          </>
        ),
        metric: '2.15 Å',
        metricLabel: 'Best Resolution',
      },
      {
        title: 'Druggability Assessment',
        status: 'success',
        content: (
          <>
            <div>• Deep hydrophobic binding pocket identified</div>
            <div>• Pocket volume: 580 Ų (suitable for small molecules)</div>
            <div>• High druggability score: 7.8/10</div>
          </>
        ),
        metric: '7.8/10',
        metricLabel: 'Druggability Score',
      },
      {
        title: 'AlphaFold Validation',
        status: 'info',
        content: (
          <>
            <div>• AI model: AF-P42226-F1</div>
            <div>• Average pLDDT confidence: 85.3</div>
            <div>• High confidence in functional domains</div>
          </>
        ),
        metric: '85.3',
        metricLabel: 'pLDDT Score',
      },
      {
        title: 'Domain Architecture',
        status: 'success',
        content: (
          <>
            <div>• SH2 domain: residues 535-634</div>
            <div>• STAT DNA-binding: residues 320-480</div>
            <div>• Coiled-coil region: residues 140-315</div>
          </>
        ),
        metric: '3',
        metricLabel: 'Conserved Domains',
      },
    ],
    2: [
      {
        title: 'Compound Discovery',
        status: 'success',
        content: (
          <>
            <div>• Retrieved 247 active compounds</div>
            <div>• IC50 range: 9.8 nM to 10 μM</div>
            <div>• Data sources: ChEMBL, PubChem</div>
          </>
        ),
        metric: '247',
        metricLabel: 'Active Compounds',
      },
      {
        title: 'Clinical Pipeline',
        status: 'info',
        content: (
          <>
            <div>• 12 active clinical trials identified</div>
            <div>• Phase distribution: 8 Phase I, 4 Phase II</div>
            <div>• No Phase III compounds yet</div>
          </>
        ),
        metric: '12',
        metricLabel: 'Clinical Trials',
      },
      {
        title: 'Best-in-Class Analysis',
        status: 'success',
        content: (
          <>
            <div>• Lead compound: GSK2894512</div>
            <div>• Potency: IC50 = 9.8 nM</div>
            <div>• Current Phase I status</div>
          </>
        ),
        metric: '9.8 nM',
        metricLabel: 'Best IC50',
      },
      {
        title: 'Market Landscape',
        status: 'warning',
        content: (
          <>
            <div>• Major players: Pfizer, GSK, Novartis</div>
            <div>• High competitive interest</div>
            <div>• Need differentiated approach</div>
          </>
        ),
        metric: '8+',
        metricLabel: 'Active Companies',
      },
    ],
    3: [
      {
        title: 'Chemical Clustering',
        status: 'success',
        content: (
          <>
            <div>• Identified 7 distinct scaffold families</div>
            <div>• Morgan fingerprints (radius=2)</div>
            <div>• Tanimoto similarity threshold: 0.6</div>
          </>
        ),
        metric: '7',
        metricLabel: 'Clusters',
      },
      {
        title: 'Lead Series',
        status: 'success',
        content: (
          <>
            <div>• Cluster 3: Aminopyrimidine core</div>
            <div>• 37 compounds, avg IC50: 12 nM</div>
            <div>• Recommended for optimization</div>
          </>
        ),
        metric: '12 nM',
        metricLabel: 'Avg. Potency',
      },
      {
        title: 'Drug-Likeness',
        status: 'success',
        content: (
          <>
            <div>• Lipinski Rule of 5: 89% compliant</div>
            <div>• Average MW: 387 Da</div>
            <div>• Average LogP: 3.2</div>
          </>
        ),
        metric: '89%',
        metricLabel: 'Ro5 Compliant',
      },
      {
        title: 'Scaffold Diversity',
        status: 'info',
        content: (
          <>
            <div>• Diversity index: 0.72</div>
            <div>• Novel scaffolds in Cluster 7</div>
            <div>• Good IP opportunity</div>
          </>
        ),
        metric: '0.72',
        metricLabel: 'Diversity Index',
      },
    ],
    4: [
      {
        title: 'Patent Coverage',
        status: 'warning',
        content: (
          <>
            <div>• 156 patent families identified</div>
            <div>• Crowded IP landscape</div>
            <div>• Strategic design required</div>
          </>
        ),
        metric: '156',
        metricLabel: 'Patent Families',
      },
      {
        title: 'Key Assignees',
        status: 'info',
        content: (
          <>
            <div>• Pfizer: 23 patents</div>
            <div>• Novartis: 18 patents</div>
            <div>• GSK: 15 patents</div>
          </>
        ),
        metric: '3',
        metricLabel: 'Major Players',
      },
      {
        title: 'Filing Trends',
        status: 'warning',
        content: (
          <>
            <div>• 2023: 28 new filings</div>
            <div>• 85% increase vs. 2020</div>
            <div>• Accelerating competitive activity</div>
          </>
        ),
        metric: '+85%',
        metricLabel: 'Growth (3Y)',
      },
      {
        title: 'White Space Analysis',
        status: 'success',
        content: (
          <>
            <div>• Bicyclic scaffolds: limited coverage</div>
            <div>• Combination therapy: only 7 patents</div>
            <div>• Novel IP opportunities identified</div>
          </>
        ),
        metric: 'HIGH',
        metricLabel: 'Opportunity Level',
      },
    ],
  };

  return results[stepNumber] || results[1];
}