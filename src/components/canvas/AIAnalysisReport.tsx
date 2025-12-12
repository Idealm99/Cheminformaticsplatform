import { WorkflowNode } from '../../App';
import { Brain, CheckCircle2, TrendingUp, AlertCircle } from 'lucide-react';

interface AIAnalysisReportProps {
  activeNode: WorkflowNode;
  previousNode?: WorkflowNode;
}

export default function AIAnalysisReport({ activeNode, previousNode }: AIAnalysisReportProps) {
  const report = getReportContent(activeNode.number, previousNode?.title);

  return (
    <div className="bg-slate-900/50 border-b border-slate-800">
      <div className="max-w-5xl mx-auto p-8">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 bg-cyan-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Brain className="w-5 h-5 text-cyan-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl text-slate-100 mb-1">AI Analysis Report</h2>
            <p className="text-sm text-slate-400">
              Step {activeNode.number}: {activeNode.title}
            </p>
          </div>
          <div className="px-3 py-1 bg-emerald-400/10 border border-emerald-400/20 rounded-full text-xs text-emerald-400">
            ✓ Complete
          </div>
        </div>

        {/* Context Reference */}
        {previousNode && (
          <div className="mb-6 pl-14">
            <div className="bg-slate-950/50 border-l-2 border-cyan-400 pl-4 py-3">
              <div className="text-xs text-slate-500 mb-1">Building on previous analysis:</div>
              <div className="text-sm text-cyan-400">{previousNode.title}</div>
            </div>
          </div>
        )}

        {/* Report Content */}
        <div className="pl-14 space-y-6">
          {report.sections.map((section, index) => (
            <div key={index}>
              <div className="flex items-center gap-2 mb-3">
                {section.icon}
                <h3 className="text-base text-slate-100">{section.title}</h3>
              </div>
              <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
              {section.highlights && (
                <div className="mt-3 space-y-2">
                  {section.highlights.map((highlight, hIndex) => (
                    <div
                      key={hIndex}
                      className={`flex items-start gap-2 p-3 rounded-lg ${
                        highlight.type === 'success'
                          ? 'bg-emerald-400/5 border border-emerald-400/20'
                          : highlight.type === 'warning'
                          ? 'bg-amber-400/5 border border-amber-400/20'
                          : 'bg-cyan-400/5 border border-cyan-400/20'
                      }`}
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        {highlight.type === 'success' ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        ) : highlight.type === 'warning' ? (
                          <AlertCircle className="w-4 h-4 text-amber-400" />
                        ) : (
                          <TrendingUp className="w-4 h-4 text-cyan-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div
                          className={`text-sm ${
                            highlight.type === 'success'
                              ? 'text-emerald-400'
                              : highlight.type === 'warning'
                              ? 'text-amber-400'
                              : 'text-cyan-400'
                          }`}
                        >
                          {highlight.title}
                        </div>
                        <div className="text-xs text-slate-400 mt-1">{highlight.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function getReportContent(stepNumber: number, previousStepTitle?: string) {
  const reports: Record<number, any> = {
    1: {
      sections: [
        {
          title: 'Target Validation Overview',
          icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
          content: [
            'I have successfully analyzed the STAT6 protein target using data from UniProt, RCSB PDB, and AlphaFold. The target shows excellent druggability characteristics with multiple high-quality crystal structures available.',
            'The analysis identified a well-defined hydrophobic binding pocket with a volume of 580 Ų, which is ideal for small molecule binding. This pocket is located in the DNA-binding domain and shows high conservation across species, suggesting functional importance.',
          ],
          highlights: [
            {
              type: 'success',
              title: 'High Druggability Score: 7.8/10',
              description: 'Deep hydrophobic cavity with favorable binding characteristics',
            },
            {
              type: 'info',
              title: 'Best Structure: 6WTT at 2.15 Å Resolution',
              description: 'R-factor 0.189 indicates excellent data quality for structure-based design',
            },
          ],
        },
        {
          title: 'Structural Assessment',
          icon: <TrendingUp className="w-4 h-4 text-cyan-400" />,
          content: [
            'Three experimental X-ray structures are available, with resolutions ranging from 2.15 Å to 2.8 Å. The highest quality structure (6WTT) includes a bound inhibitor, providing valuable insights into binding mode preferences.',
            'AlphaFold prediction (AF-P42226-F1) shows high confidence (pLDDT 85.3) for the functional domains, validating the experimental structures and providing additional coverage for flexible regions.',
          ],
        },
      ],
    },
    2: {
      sections: [
        {
          title: 'Competitive Landscape Analysis',
          icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
          content: [
            'Based on the target analysis from the previous step, I have conducted a comprehensive competitor drug search using ChEMBL and PubChem databases. A total of 247 active compounds were identified with IC50 values ranging from 9.8 nM to 10 μM.',
            'The competitive landscape is moderately active, with 12 ongoing clinical trials identified through ClinicalTrials.gov. The distribution shows 8 compounds in Phase I and 4 in Phase II, indicating early-stage development across the field.',
          ],
          highlights: [
            {
              type: 'success',
              title: 'Best-in-Class Compound: GSK2894512 (IC50 = 9.8 nM)',
              description: 'Current benchmark for potency. Provides target validation and sets the bar for new development.',
            },
            {
              type: 'warning',
              title: 'High Competitive Activity',
              description: 'Major pharma players (Pfizer, GSK, Novartis) are actively investing. Differentiation strategy required.',
            },
          ],
        },
        {
          title: 'Market Opportunity Assessment',
          icon: <TrendingUp className="w-4 h-4 text-cyan-400" />,
          content: [
            'Despite the competitive activity, no Phase III compounds have been identified, suggesting early-stage market opportunity. The target is validated but not yet saturated, providing room for differentiated approaches.',
          ],
        },
      ],
    },
    3: {
      sections: [
        {
          title: 'Chemical Space Clustering',
          icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
          content: [
            `Based on the competitor data from ${previousStepTitle || 'the previous step'}, I have performed RDKit-based chemical clustering analysis. Using Morgan fingerprints (radius=2) and Tanimoto similarity (threshold 0.6), the 247 compounds segregate into 7 distinct scaffold families.`,
            'Principal component analysis reveals excellent chemical diversity (diversity index: 0.72), indicating multiple validated approaches to target modulation. Cluster 3 (aminopyrimidines) emerges as the lead series with 37 compounds and an average IC50 of 12 nM.',
          ],
          highlights: [
            {
              type: 'success',
              title: 'Lead Series Identified: Cluster 3 Aminopyrimidines',
              description: '37 compounds with average IC50 of 12 nM. Recommended for optimization campaign.',
            },
            {
              type: 'info',
              title: 'Novel Scaffold Opportunity: Cluster 7 Bicyclic Heteroaromatics',
              description: 'Underexplored chemical space with potential IP advantages and differentiation.',
            },
          ],
        },
        {
          title: 'Drug-Likeness Assessment',
          icon: <TrendingUp className="w-4 h-4 text-cyan-400" />,
          content: [
            'The compound collection shows favorable drug-like properties, with 89% Lipinski Rule of 5 compliance. Average molecular weight (387 Da) and LogP (3.2) suggest good oral bioavailability potential for the majority of scaffolds.',
          ],
        },
      ],
    },
    4: {
      sections: [
        {
          title: 'Patent Landscape Overview',
          icon: <AlertCircle className="w-4 h-4 text-amber-400" />,
          content: [
            'I have analyzed the intellectual property landscape for STAT6 inhibitors using SureChEMBL and Google Patents. A total of 156 patent families were identified, indicating a crowded but actively growing IP space.',
            'Filing activity shows a concerning 85% increase from 2020 to 2023, with 28 new filings in the most recent year. The top three assignees (Pfizer, Novartis, GSK) control 36% of the total patent coverage.',
          ],
          highlights: [
            {
              type: 'warning',
              title: 'Crowded IP Landscape: 156 Patent Families',
              description: 'Careful freedom-to-operate analysis required. Strategic design needed to avoid infringement.',
            },
            {
              type: 'success',
              title: 'White Space Identified: Bicyclic Scaffolds & Combination Therapy',
              description: 'Limited patent coverage in these areas presents strategic IP opportunities.',
            },
          ],
        },
        {
          title: 'Strategic Recommendations',
          icon: <TrendingUp className="w-4 h-4 text-cyan-400" />,
          content: [
            'Despite the crowded landscape, two clear white space opportunities exist: (1) novel bicyclic scaffolds (Cluster 7 from structure analysis), and (2) combination therapy approaches (only 7 patents identified). These areas align well with the chemical clustering insights and provide a differentiated path forward.',
          ],
        },
      ],
    },
  };

  return reports[stepNumber] || reports[1];
}
