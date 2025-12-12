import { Target, Pill, FlaskConical, FileText } from 'lucide-react';

interface StepViewProps {
  stepNumber: number;
}

export default function StepView({ stepNumber }: StepViewProps) {
  const stepContent = getStepContent(stepNumber);

  return (
    <div className="flex-1 bg-slate-950 overflow-y-auto">
      <div className="p-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            {stepContent.icon}
            <h1 className="text-3xl text-slate-100">{stepContent.title}</h1>
          </div>
          <p className="text-slate-400">{stepContent.description}</p>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-2 gap-6">
          {stepContent.cards.map((card, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-400/30 transition-all"
            >
              <h3 className="text-lg text-slate-100 mb-4">{card.title}</h3>
              <div className="text-slate-400 text-sm space-y-2">{card.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function getStepContent(stepNumber: number) {
  const contents: Record<number, any> = {
    1: {
      icon: <Target className="w-8 h-8 text-cyan-400" />,
      title: 'Target Structure Analysis',
      description: 'Protein structure validation and druggability assessment',
      cards: [
        {
          title: 'PDB Structures',
          content: (
            <>
              <div>Found 3 experimental structures</div>
              <div>Best resolution: 6WTT (2.15 Å)</div>
              <div className="text-emerald-400 mt-2">✓ High quality structure available</div>
            </>
          ),
        },
        {
          title: 'Binding Site Analysis',
          content: (
            <>
              <div>Deep hydrophobic cavity identified</div>
              <div>Volume: 580 Ų</div>
              <div className="text-emerald-400 mt-2">✓ Excellent druggability score: 7.8/10</div>
            </>
          ),
        },
        {
          title: 'AlphaFold Prediction',
          content: (
            <>
              <div>Model: AF-P42226-F1</div>
              <div>Confidence (pLDDT): 85.3</div>
              <div className="text-cyan-400 mt-2">High confidence regions validated</div>
            </>
          ),
        },
        {
          title: 'Domain Architecture',
          content: (
            <>
              <div>SH2 domain: 535-634</div>
              <div>STAT DNA-binding: 320-480</div>
              <div className="text-slate-500 mt-2">Conserved functional regions</div>
            </>
          ),
        },
      ],
    },
    2: {
      icon: <Pill className="w-8 h-8 text-cyan-400" />,
      title: 'Competitor Drug Landscape',
      description: 'Market analysis and bioactivity data collection',
      cards: [
        {
          title: 'Active Compounds',
          content: (
            <>
              <div className="text-3xl text-cyan-400 mb-2">247</div>
              <div>Total compounds with IC50 {'<'} 10μM</div>
              <div className="text-emerald-400 mt-2">✓ Validated target</div>
            </>
          ),
        },
        {
          title: 'Clinical Pipeline',
          content: (
            <>
              <div className="text-3xl text-cyan-400 mb-2">12</div>
              <div>Active clinical trials (Phase II/III)</div>
              <div className="text-slate-500 mt-2">Early-stage market opportunity</div>
            </>
          ),
        },
        {
          title: 'Best-in-Class',
          content: (
            <>
              <div>GSK2894512</div>
              <div>IC50: 9.8 nM</div>
              <div className="text-amber-400 mt-2">Potency benchmark established</div>
            </>
          ),
        },
        {
          title: 'Key Players',
          content: (
            <>
              <div>Pfizer, GSK, Novartis</div>
              <div>High investment activity</div>
              <div className="text-cyan-400 mt-2">Strong commercial validation</div>
            </>
          ),
        },
      ],
    },
    3: {
      icon: <FlaskConical className="w-8 h-8 text-cyan-400" />,
      title: 'Chemical Structure Analysis',
      description: 'RDKit-based molecular clustering and SAR analysis',
      cards: [
        {
          title: 'Chemical Clusters',
          content: (
            <>
              <div className="text-3xl text-cyan-400 mb-2">7</div>
              <div>Distinct scaffold families identified</div>
              <div className="text-emerald-400 mt-2">✓ High diversity (0.72)</div>
            </>
          ),
        },
        {
          title: 'Lead Series',
          content: (
            <>
              <div>Cluster 3: Aminopyrimidines</div>
              <div>Average IC50: 12 nM (37 compounds)</div>
              <div className="text-emerald-400 mt-2">Priority for optimization</div>
            </>
          ),
        },
        {
          title: 'Drug-Likeness',
          content: (
            <>
              <div>Lipinski compliant: 89%</div>
              <div>Avg. MW: 387 Da</div>
              <div className="text-emerald-400 mt-2">✓ Good oral bioavailability potential</div>
            </>
          ),
        },
        {
          title: 'Novel Scaffolds',
          content: (
            <>
              <div>Cluster 7: Bicyclic heteroaromatics</div>
              <div>Underexplored chemical space</div>
              <div className="text-cyan-400 mt-2">IP opportunity identified</div>
            </>
          ),
        },
      ],
    },
    4: {
      icon: <FileText className="w-8 h-8 text-cyan-400" />,
      title: 'Patent & IP Landscape',
      description: 'Freedom-to-operate analysis and competitive intelligence',
      cards: [
        {
          title: 'Patent Families',
          content: (
            <>
              <div className="text-3xl text-cyan-400 mb-2">156</div>
              <div>Total families covering STAT6 inhibitors</div>
              <div className="text-amber-400 mt-2">Crowded IP space</div>
            </>
          ),
        },
        {
          title: 'Top Assignees',
          content: (
            <>
              <div>Pfizer: 23 patents</div>
              <div>Novartis: 18 patents</div>
              <div className="text-slate-500 mt-2">Big pharma dominance</div>
            </>
          ),
        },
        {
          title: 'Filing Trends',
          content: (
            <>
              <div>2023: 28 new filings</div>
              <div>85% increase vs. 2020</div>
              <div className="text-emerald-400 mt-2">Accelerating interest</div>
            </>
          ),
        },
        {
          title: 'White Space',
          content: (
            <>
              <div>Bicyclic scaffolds: Limited coverage</div>
              <div>Combination therapy: 7 patents only</div>
              <div className="text-cyan-400 mt-2">Strategic opportunities identified</div>
            </>
          ),
        },
      ],
    },
  };

  return contents[stepNumber] || contents[1];
}
