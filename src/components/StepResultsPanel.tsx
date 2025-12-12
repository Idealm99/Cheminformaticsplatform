import { Target, TrendingUp, AlertTriangle, Award, CheckCircle2, XCircle, AlertCircle, ThumbsUp, ThumbsDown, Lightbulb } from 'lucide-react';

interface StepResultsPanelProps {
  stepNumber: 1 | 2 | 3 | 4;
  selectedTools: string[];
}

export default function StepResultsPanel({ stepNumber, selectedTools }: StepResultsPanelProps) {
  if (stepNumber === 1) {
    return <Step1Results selectedTools={selectedTools} />;
  } else if (stepNumber === 2) {
    return <Step2Results selectedTools={selectedTools} />;
  } else if (stepNumber === 3) {
    return <Step3Results selectedTools={selectedTools} />;
  } else if (stepNumber === 4) {
    return <Step4Results selectedTools={selectedTools} />;
  }
  return null;
}

// Step 1: Target Structure Results
function Step1Results({ selectedTools }: { selectedTools: string[] }) {
  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-5 h-5 text-blue-600" />
          <h3 className="text-gray-900">Druggability Assessment</h3>
        </div>
        
        {/* Druggability Score */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-700">Overall Druggability Score</span>
            <span className="text-2xl text-green-600">7.8/10</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-green-500 to-green-600" style={{ width: '78%' }}></div>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            <CheckCircle2 className="w-3 h-3 inline mr-1 text-green-600" />
            High confidence - Target shows excellent druggability characteristics
          </p>
        </div>

        {/* Key Findings */}
        <div className="space-y-3">
          <div className="text-sm text-gray-700 mb-2">Key Structural Findings:</div>
          
          <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm text-gray-900">Well-Defined Binding Pocket</div>
              <div className="text-xs text-gray-600 mt-1">
                PDB 6WTT reveals a deep hydrophobic cavity (volume: 580 Ų) suitable for small molecule binding
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm text-gray-900">High Structure Quality</div>
              <div className="text-xs text-gray-600 mt-1">
                Resolution: 2.15 Å with R-factor of 0.189 - Excellent for structure-based design
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm text-gray-900">Flexible Loop Region</div>
              <div className="text-xs text-gray-600 mt-1">
                Residues 420-435 show high B-factors - May require induced-fit considerations
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-start gap-2">
            <Lightbulb className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-gray-700">
              <span className="text-blue-900">Recommendation:</span> Proceed with structure-based drug design. Focus on targeting the SH2 domain pocket with rigid scaffolds.
            </div>
          </div>
        </div>
      </div>

      {/* Structure Statistics */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <h3 className="text-sm text-gray-700 mb-3">Structure Database Summary</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-xs text-gray-500">PDB Structures</div>
            <div className="text-xl text-gray-900">3</div>
            <div className="text-xs text-gray-600 mt-1">Experimental X-ray</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-xs text-gray-500">AlphaFold Models</div>
            <div className="text-xl text-gray-900">1</div>
            <div className="text-xs text-gray-600 mt-1">pLDDT: 85.3</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-xs text-gray-500">Conserved Domains</div>
            <div className="text-xl text-gray-900">3</div>
            <div className="text-xs text-gray-600 mt-1">SH2, DBD, Coiled-coil</div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-xs text-gray-500">Ligand Complexes</div>
            <div className="text-xl text-gray-900">2</div>
            <div className="text-xs text-gray-600 mt-1">Small molecule bound</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Step 2: Competitor Drugs Results
function Step2Results({ selectedTools }: { selectedTools: string[] }) {
  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-green-600" />
          <h3 className="text-gray-900">Competitive Landscape Analysis</h3>
        </div>
        
        {/* Market Assessment */}
        <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-900">Market Opportunity</span>
            <span className="px-3 py-1 bg-green-600 text-white rounded-full text-xs">HIGH</span>
          </div>
          <p className="text-xs text-gray-700">
            Limited clinical-stage competitors with only 2 compounds in Phase II. Significant white space for differentiated molecules.
          </p>
        </div>

        {/* Key Judgments */}
        <div className="space-y-3">
          <div className="text-sm text-gray-700 mb-2">Strategic Insights:</div>
          
          <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <ThumbsUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm text-gray-900">Opportunity Window Open</div>
              <div className="text-xs text-gray-600 mt-1">
                Most active compounds (247 total) are in preclinical phase - Early market with room for innovation
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm text-gray-900">Validated Target</div>
              <div className="text-xs text-gray-600 mt-1">
                12 active clinical trials confirm therapeutic relevance - De-risked biological hypothesis
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm text-gray-900">Potency Benchmark</div>
              <div className="text-xs text-gray-600 mt-1">
                Best-in-class: GSK2894512 (IC50: 9.8 nM) - Need sub-10 nM potency to compete
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-purple-50 border border-purple-200 rounded-lg">
            <TrendingUp className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm text-gray-900">Development Trends</div>
              <div className="text-xs text-gray-600 mt-1">
                Key players: Pfizer, GSK, Sanofi investing heavily - validates commercial potential
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-start gap-2">
            <Lightbulb className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-gray-700">
              <span className="text-blue-900">Strategic Direction:</span> Target IC50 {'<'}5 nM with improved selectivity. Consider novel scaffolds to establish differentiated IP position.
            </div>
          </div>
        </div>
      </div>

      {/* Activity Distribution */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <h3 className="text-sm text-gray-700 mb-3">Bioactivity Distribution</h3>
        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-gray-700">High Potency ({'<'}10 nM)</span>
              <span className="text-gray-900">89 compounds</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-green-500" style={{ width: '36%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-gray-700">Medium Potency (10-100 nM)</span>
              <span className="text-gray-900">124 compounds</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500" style={{ width: '50%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-gray-700">Lower Potency ({'>'} 100 nM)</span>
              <span className="text-gray-900">34 compounds</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500" style={{ width: '14%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Step 3: Structure Analysis Results
function Step3Results({ selectedTools }: { selectedTools: string[] }) {
  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-5 h-5 text-purple-600" />
          <h3 className="text-gray-900">Chemical Space Interpretation</h3>
        </div>
        
        {/* Diversity Score */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-700">Scaffold Diversity Index</span>
            <span className="text-2xl text-purple-600">0.72</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600" style={{ width: '72%' }}></div>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            <CheckCircle2 className="w-3 h-3 inline mr-1 text-purple-600" />
            High diversity - Multiple distinct chemical series identified
          </p>
        </div>

        {/* Cluster Analysis */}
        <div className="space-y-3">
          <div className="text-sm text-gray-700 mb-2">Clustering Insights:</div>
          
          <div className="flex items-start gap-3 p-3 bg-purple-50 border border-purple-200 rounded-lg">
            <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm text-gray-900">7 Distinct Chemical Families</div>
              <div className="text-xs text-gray-600 mt-1">
                Tanimoto clustering reveals well-separated scaffold groups - Good coverage of chemical space
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
            <Award className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm text-gray-900">Cluster 3: Highest Potency</div>
              <div className="text-xs text-gray-600 mt-1">
                Aminopyrimidine core - Average IC50: 12 nM (37 compounds) - Priority series for optimization
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm text-gray-900">Novelty Opportunity: Cluster 7</div>
              <div className="text-xs text-gray-600 mt-1">
                Novel bicyclic scaffold with moderate activity (IC50: 85 nM) - Underexplored chemical space
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm text-gray-900">Structure-Activity Relationship</div>
              <div className="text-xs text-gray-600 mt-1">
                Avg. Tanimoto similarity: 0.68 - Moderate SAR cliff risk, requires careful optimization
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-start gap-2">
            <Lightbulb className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-gray-700">
              <span className="text-blue-900">Next Steps:</span> Prioritize Cluster 3 (aminopyrimidines) for lead optimization. Explore Cluster 7 for novelty/IP. Perform 3D pharmacophore mapping.
            </div>
          </div>
        </div>
      </div>

      {/* Physicochemical Properties */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <h3 className="text-sm text-gray-700 mb-3">Drug-Likeness Assessment</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-700">Lipinski Compliant</span>
              <CheckCircle2 className="w-4 h-4 text-green-600" />
            </div>
            <div className="text-lg text-gray-900 mt-1">89%</div>
          </div>
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-700">Avg. MW</span>
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-lg text-gray-900 mt-1">387 Da</div>
          </div>
          <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-700">Avg. LogP</span>
              <CheckCircle2 className="w-4 h-4 text-purple-600" />
            </div>
            <div className="text-lg text-gray-900 mt-1">3.2</div>
          </div>
          <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-700">Synthetic Access.</span>
              <CheckCircle2 className="w-4 h-4 text-green-600" />
            </div>
            <div className="text-lg text-gray-900 mt-1">Good</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Step 4: Patent & Keywords Results
function Step4Results({ selectedTools }: { selectedTools: string[] }) {
  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-amber-600" />
          <h3 className="text-gray-900">IP Landscape Assessment</h3>
        </div>
        
        {/* Freedom to Operate */}
        <div className="mb-6 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-900">Freedom to Operate</span>
            <span className="px-3 py-1 bg-amber-600 text-white rounded-full text-xs">MODERATE</span>
          </div>
          <p className="text-xs text-gray-700">
            Crowded patent space with 156 families. Strategic design required to navigate existing IP. Novel scaffold opportunities exist in underexplored regions.
          </p>
        </div>

        {/* Key Judgments */}
        <div className="space-y-3">
          <div className="text-sm text-gray-700 mb-2">IP Intelligence:</div>
          
          <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm text-gray-900">High Patent Density</div>
              <div className="text-xs text-gray-600 mt-1">
                156 patent families covering STAT6 inhibitors - Big pharma has staked broad claims (Pfizer: 23, Novartis: 18)
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm text-gray-900">White Space Identified</div>
              <div className="text-xs text-gray-600 mt-1">
                Bicyclic heteroaromatic scaffolds (Cluster 7 from Step 3) show limited patent coverage - IP opportunity
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-purple-50 border border-purple-200 rounded-lg">
            <Award className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm text-gray-900">Recent Filing Surge</div>
              <div className="text-xs text-gray-600 mt-1">
                45 new applications (2022-2023) focused on SH2 domain binders - Hot area, file early
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
            <Lightbulb className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm text-gray-900">Combination Therapy Opportunity</div>
              <div className="text-xs text-gray-600 mt-1">
                Only 7 patents mention STAT6 + checkpoint inhibitor combinations - Underexploited therapeutic angle
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-start gap-2">
            <Lightbulb className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-gray-700">
              <span className="text-blue-900">IP Strategy:</span> Design around existing claims using novel Cluster 7 scaffolds. File provisional patent early. Consider combination therapy claims for broader protection.
            </div>
          </div>
        </div>
      </div>

      {/* Patent Timeline */}
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <h3 className="text-sm text-gray-700 mb-3">Filing Activity Trends</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="text-xs text-gray-500 w-12">2023</div>
            <div className="flex-1 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded" style={{ width: '85%' }}>
              <div className="flex items-center justify-end h-full pr-3 text-xs text-white">28 filings</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-xs text-gray-500 w-12">2022</div>
            <div className="flex-1 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded" style={{ width: '65%' }}>
              <div className="flex items-center justify-end h-full pr-3 text-xs text-white">21 filings</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-xs text-gray-500 w-12">2021</div>
            <div className="flex-1 h-8 bg-gradient-to-r from-blue-300 to-blue-400 rounded" style={{ width: '50%' }}>
              <div className="flex items-center justify-end h-full pr-3 text-xs text-white">16 filings</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-xs text-gray-500 w-12">2020</div>
            <div className="flex-1 h-8 bg-gradient-to-r from-gray-300 to-gray-400 rounded" style={{ width: '35%' }}>
              <div className="flex items-center justify-end h-full pr-3 text-xs text-white">11 filings</div>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          <TrendingUp className="w-3 h-3 inline mr-1 text-green-600" />
          85% increase in filing activity over 3 years - Accelerating competitive interest
        </p>
      </div>
    </div>
  );
}
