import { Activity, Loader2, BarChart3, Microscope, TrendingUp, Package, Atom } from 'lucide-react';
import { WorkflowNode, StepConfig } from '../App';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';

interface ResultCanvasProps {
  activeNode?: WorkflowNode;
  stepConfig?: StepConfig;
  isExecuted: boolean;
  isExecuting: boolean;
}

// ============================================
// MOCK DATA FOR DIFFERENT DASHBOARDS
// ============================================

// Target Identification Data
const proteinDomains = [
  { domain: 'SH2 Domain', start: 135, end: 245, length: 110, confidence: 'High' },
  { domain: 'DNA Binding', start: 320, end: 485, length: 165, confidence: 'High' },
  { domain: 'Transactivation', start: 520, end: 685, length: 165, confidence: 'Medium' },
  { domain: 'Coiled-coil', start: 120, end: 180, length: 60, confidence: 'Low' },
];

// Competitor Drug Data
const competitorDrugs = [
  { id: 1, name: 'Dupilumab', company: 'Sanofi/Regeneron', phase: 'FDA Approved', modality: 'Antibody', year: 2017 },
  { id: 2, name: 'Mepolizumab', company: 'GlaxoSmithKline', phase: 'FDA Approved', modality: 'Antibody', year: 2015 },
  { id: 3, name: 'Lebrikizumab', company: 'Eli Lilly', phase: 'Phase III', modality: 'Antibody', year: 2023 },
  { id: 4, name: 'Tezepelumab', company: 'AstraZeneca', phase: 'Phase III', modality: 'Antibody', year: 2022 },
  { id: 5, name: 'STAT6-IN-2', company: 'Novartis', phase: 'Phase I', modality: 'Small Molecule', year: 2023 },
  { id: 6, name: 'AS-1', company: 'Astellas', phase: 'Phase II', modality: 'Small Molecule', year: 2022 },
];

const modalityDistribution = [
  { name: 'Antibody', value: 67, color: '#3b82f6' },
  { name: 'Small Molecule', value: 33, color: '#10b981' },
];

// Structural Analysis Data
const chemicalSpaceData = [
  { x: 2.5, y: 3.2, compound: 'Drug A', cluster: 'A' },
  { x: 3.1, y: 3.8, compound: 'Drug B', cluster: 'A' },
  { x: 2.8, y: 3.5, compound: 'Drug C', cluster: 'A' },
  { x: 6.2, y: 7.1, compound: 'Drug D', cluster: 'B' },
  { x: 6.8, y: 6.9, compound: 'Drug E', cluster: 'B' },
  { x: 6.5, y: 7.3, compound: 'Drug F', cluster: 'B' },
  { x: 4.5, y: 5.2, compound: 'Drug G', cluster: 'C' },
  { x: 4.9, y: 5.5, compound: 'Drug H', cluster: 'C' },
  { x: 8.2, y: 2.5, compound: 'Drug I', cluster: 'D' },
  { x: 8.5, y: 2.8, compound: 'Drug J', cluster: 'D' },
];

// ============================================
// DASHBOARD COMPONENTS
// ============================================

function TargetDashboard() {
  return (
    <div className="space-y-6">
      {/* AI Analysis Report */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Microscope className="w-4 h-4 text-purple-600" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">Target Analysis Report</h3>
            <p className="text-xs text-slate-500 mt-1">Protein Structure & Domain Analysis</p>
          </div>
        </div>

        <div className="prose prose-sm max-w-none">
          <p className="text-sm text-slate-700 leading-relaxed">
            I have identified <strong>STAT6</strong> (Signal Transducer and Activator of Transcription 6) as a 
            validated therapeutic target for allergic inflammatory diseases. The protein structure analysis from 
            <strong> AlphaFold</strong> and <strong>UniProt</strong> reveals a highly conserved architecture with 
            distinct functional domains.
          </p>

          <p className="text-sm text-slate-700 leading-relaxed mt-3">
            The STAT6 protein (847 amino acids) contains <strong>4 major functional domains</strong> with 
            high-confidence structural predictions. The SH2 domain (residues 135-245) is critical for 
            phosphorylation-dependent activation and represents a promising druggable pocket with a 
            volume of approximately 450 Ų.
          </p>

          <p className="text-sm text-slate-700 leading-relaxed mt-3">
            <strong>Key Finding:</strong> The DNA-binding domain shows unique structural features compared to 
            other STAT family members, suggesting opportunities for selective inhibitor design with 
            predicted selectivity ratios &gt;100x over STAT3/STAT5.
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-500">
          <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded border border-purple-200">UniProt</span>
          <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded border border-purple-200">AlphaFold</span>
        </div>
      </div>

      {/* Visual Dashboard */}
      <div className="grid grid-cols-2 gap-6">
        {/* 3D Protein Viewer */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Microscope className="w-4 h-4 text-purple-600" />
            <h4 className="text-sm font-semibold text-slate-900">3D Protein Structure</h4>
          </div>
          <div className="aspect-square bg-slate-900 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Microscope className="w-10 h-10 text-purple-400" />
              </div>
              <p className="text-sm text-slate-300 font-medium">STAT6 Structure</p>
              <p className="text-xs text-slate-500 mt-1">AlphaFold Model</p>
              <p className="text-xs text-slate-600 mt-2 font-mono">Confidence: 92.4%</p>
            </div>
          </div>
        </div>

        {/* Domain Sequence Table */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-4 h-4 text-purple-600" />
            <h4 className="text-sm font-semibold text-slate-900">Protein Domains</h4>
          </div>
          <div className="overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 text-slate-600 font-semibold">Domain</th>
                  <th className="text-left py-2 text-slate-600 font-semibold">Start</th>
                  <th className="text-left py-2 text-slate-600 font-semibold">End</th>
                  <th className="text-left py-2 text-slate-600 font-semibold">Length</th>
                  <th className="text-left py-2 text-slate-600 font-semibold">Conf.</th>
                </tr>
              </thead>
              <tbody>
                {proteinDomains.map((domain, idx) => (
                  <tr key={idx} className="border-b border-slate-100 last:border-0">
                    <td className="py-2.5 text-slate-900 font-medium">{domain.domain}</td>
                    <td className="py-2.5 text-slate-700">{domain.start}</td>
                    <td className="py-2.5 text-slate-700">{domain.end}</td>
                    <td className="py-2.5 text-slate-700">{domain.length} aa</td>
                    <td className="py-2.5">
                      <span className={`px-2 py-0.5 rounded text-xs ${
                        domain.confidence === 'High' 
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                          : domain.confidence === 'Medium'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-slate-50 text-slate-700 border border-slate-200'
                      }`}>
                        {domain.confidence}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompetitorDashboard() {
  return (
    <div className="space-y-6">
      {/* AI Analysis Report */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">Market Landscape Analysis</h3>
            <p className="text-xs text-slate-500 mt-1">Competitive Intelligence Report</p>
          </div>
        </div>

        <div className="prose prose-sm max-w-none">
          <p className="text-sm text-slate-700 leading-relaxed">
            The competitive analysis reveals <strong>6 active drug development programs</strong> targeting 
            the IL-4/IL-13/STAT6 pathway for allergic diseases. The market is dominated by biologics, 
            with <strong>67% antibody-based therapies</strong> and 33% small molecule inhibitors.
          </p>

          <p className="text-sm text-slate-700 leading-relaxed mt-3">
            <strong>Dupilumab</strong> (Sanofi/Regeneron) leads the market with FDA approval in 2017 for 
            atopic dermatitis and asthma, generating $5.9B in 2022 revenue. The success validates the 
            pathway but also reveals market gaps: lack of oral options, high cost ($37K/year), and 
            incomplete response rates (60-70%).
          </p>

          <p className="text-sm text-slate-700 leading-relaxed mt-3">
            Patent analysis shows the <strong>earliest expiry in 2027</strong> for Dupilumab's core patents, 
            creating a biosimilar opportunity window. Small molecule programs (Phase I-II) target direct 
            STAT6 inhibition, offering oral administration and lower cost positioning.
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-500">
          <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded border border-emerald-200">ChEMBL</span>
          <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded border border-emerald-200">Patents</span>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Package className="w-4 h-4 text-blue-600" />
            <p className="text-xs font-semibold text-slate-600">Total Programs</p>
          </div>
          <p className="text-2xl font-bold text-slate-900">6</p>
          <p className="text-xs text-slate-500 mt-1">Active development</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <p className="text-xs font-semibold text-slate-600">Avg Phase</p>
          </div>
          <p className="text-2xl font-bold text-slate-900">Phase II</p>
          <p className="text-xs text-slate-500 mt-1">Clinical stage</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Microscope className="w-4 h-4 text-purple-600" />
            <p className="text-xs font-semibold text-slate-600">Modality Split</p>
          </div>
          <p className="text-2xl font-bold text-slate-900">67%</p>
          <p className="text-xs text-slate-500 mt-1">Antibodies</p>
        </div>
      </div>

      {/* Visual Dashboard */}
      <div className="grid grid-cols-3 gap-6">
        {/* Drug Table */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Package className="w-4 h-4 text-emerald-600" />
            <h4 className="text-sm font-semibold text-slate-900">Competitor Drug Programs</h4>
          </div>
          <div className="overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 text-slate-600 font-semibold">Drug Name</th>
                  <th className="text-left py-2 text-slate-600 font-semibold">Company</th>
                  <th className="text-left py-2 text-slate-600 font-semibold">Phase</th>
                  <th className="text-left py-2 text-slate-600 font-semibold">Modality</th>
                </tr>
              </thead>
              <tbody>
                {competitorDrugs.map((drug) => (
                  <tr key={drug.id} className="border-b border-slate-100 last:border-0">
                    <td className="py-2.5 text-slate-900 font-medium">{drug.name}</td>
                    <td className="py-2.5 text-slate-700">{drug.company}</td>
                    <td className="py-2.5">
                      <span className={`px-2 py-0.5 rounded text-xs ${
                        drug.phase === 'FDA Approved' 
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                          : drug.phase === 'Phase III'
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : drug.phase === 'Phase II'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-slate-50 text-slate-700 border border-slate-200'
                      }`}>
                        {drug.phase}
                      </span>
                    </td>
                    <td className="py-2.5 text-slate-700">{drug.modality}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-4 h-4 text-emerald-600" />
            <h4 className="text-sm font-semibold text-slate-900">Modality Distribution</h4>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={modalityDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {modalityDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function StructuralDashboard() {
  return (
    <div className="space-y-6">
      {/* AI Analysis Report */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Atom className="w-4 h-4 text-amber-600" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">Structural Similarity Report</h3>
            <p className="text-xs text-slate-500 mt-1">Chemical Space Analysis</p>
          </div>
        </div>

        <div className="prose prose-sm max-w-none">
          <p className="text-sm text-slate-700 leading-relaxed">
            Structural clustering analysis using <strong>RDKit</strong> molecular fingerprints reveals 
            <strong> 4 distinct chemical clusters</strong> in the competitive landscape. The compounds 
            segregate primarily by scaffold type and lipophilicity (LogP range: 2.1-8.5).
          </p>

          <p className="text-sm text-slate-700 leading-relaxed mt-3">
            <strong>Cluster A</strong> (3 compounds, top-left): Hydrophilic small molecules with 
            heterocyclic cores. These show moderate STAT6 inhibition (IC50 10-50 nM) but excellent 
            oral bioavailability (&gt;60%). <strong>Cluster B</strong> (3 compounds, top-right): 
            Lipophilic aryl sulfonamides with high potency (IC50 &lt;10 nM) but CNS penetration concerns.
          </p>

          <p className="text-sm text-slate-700 leading-relaxed mt-3">
            The t-SNE projection suggests an unexplored chemical space in the <strong>mid-lipophilicity 
            region (LogP 4-5)</strong> between Clusters A and C, representing a potential opportunity 
            for balanced potency and ADME properties.
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-500">
          <span className="px-2 py-1 bg-amber-50 text-amber-700 rounded border border-amber-200">RDKit</span>
        </div>
      </div>

      {/* Visual Dashboard */}
      <div className="grid grid-cols-3 gap-6">
        {/* Scatter Plot */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Atom className="w-4 h-4 text-amber-600" />
            <h4 className="text-sm font-semibold text-slate-900">Chemical Space (t-SNE)</h4>
          </div>
          <ResponsiveContainer width="100%" height={340}>
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                type="number" 
                dataKey="x" 
                name="t-SNE 1" 
                tick={{ fontSize: 11, fill: '#64748b' }}
                domain={[0, 10]}
              />
              <YAxis 
                type="number" 
                dataKey="y" 
                name="t-SNE 2" 
                tick={{ fontSize: 11, fill: '#64748b' }}
                domain={[0, 10]}
              />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
              <Scatter 
                data={chemicalSpaceData.filter(d => d.cluster === 'A')} 
                fill="#3b82f6" 
                name="Cluster A"
              />
              <Scatter 
                data={chemicalSpaceData.filter(d => d.cluster === 'B')} 
                fill="#10b981" 
                name="Cluster B"
              />
              <Scatter 
                data={chemicalSpaceData.filter(d => d.cluster === 'C')} 
                fill="#f59e0b" 
                name="Cluster C"
              />
              <Scatter 
                data={chemicalSpaceData.filter(d => d.cluster === 'D')} 
                fill="#ef4444" 
                name="Cluster D"
              />
              <Legend wrapperStyle={{ fontSize: '11px' }} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        {/* Compound Preview */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Microscope className="w-4 h-4 text-amber-600" />
            <h4 className="text-sm font-semibold text-slate-900">Compound Preview</h4>
          </div>
          <div className="aspect-square bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center mb-3">
            <div className="text-center p-4">
              <p className="text-xs text-slate-500 mb-2">2D Structure</p>
              <div className="w-32 h-32 bg-white rounded border border-slate-300 flex items-center justify-center mx-auto">
                <Atom className="w-16 h-16 text-slate-300" />
              </div>
            </div>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-600">Selected:</span>
              <span className="text-slate-900 font-medium">Drug A</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Cluster:</span>
              <span className="text-blue-700 font-medium">Cluster A</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">MW:</span>
              <span className="text-slate-900">342.4 g/mol</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">LogP:</span>
              <span className="text-slate-900">2.8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomDashboard() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Activity className="w-4 h-4 text-slate-600" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-900">Custom Analysis Report</h3>
          <p className="text-xs text-slate-500 mt-1">Generic analysis output</p>
        </div>
      </div>
      <p className="text-sm text-slate-700">
        Custom analysis results will appear here. Configure the step type to see specialized dashboards.
      </p>
    </div>
  );
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function ResultCanvas({ activeNode, stepConfig, isExecuted, isExecuting }: ResultCanvasProps) {
  // Executing State
  if (isExecuting) {
    return (
      <div className="flex-1 bg-slate-50 overflow-y-auto p-6">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto" />
            <p className="text-sm text-slate-600 mt-4 font-medium">Generating Analysis Report...</p>
            <p className="text-xs text-slate-500 mt-2">Processing {activeNode?.title}</p>
          </div>
        </div>
      </div>
    );
  }

  // Not Executed State
  if (!isExecuted) {
    return (
      <div className="flex-1 bg-slate-50 overflow-y-auto p-6">
        <div className="flex items-center justify-center h-full">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <Activity className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mt-4">
              Ready to Run {activeNode?.title || 'Analysis'}
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Configure your settings and press <span className="font-semibold">Run</span> to begin
            </p>
            <div className="mt-6 flex items-center justify-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Tools Ready</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Step Configured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Executed State - Render specific dashboard based on step type
  const dashboardType = stepConfig?.dashboardType || 'custom';

  return (
    <div className="flex-1 bg-slate-50 overflow-y-auto">
      <div className="p-6">
        {dashboardType === 'target' && <TargetDashboard />}
        {dashboardType === 'competitor' && <CompetitorDashboard />}
        {dashboardType === 'structural' && <StructuralDashboard />}
        {dashboardType === 'custom' && <CustomDashboard />}
      </div>
    </div>
  );
}
