import { Activity, Loader2, BarChart3, Microscope, TrendingUp, Package, Atom, FileText, MessageSquare, Send } from 'lucide-react';
import { WorkflowNode, StepConfig } from '../App';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';
import { useEffect, useRef, useState } from 'react';
import Protein3DViewer from './Protein3DViewer';

interface ResultCanvasProps {
  activeNode?: WorkflowNode;
  stepConfig?: StepConfig;
  isExecuted: boolean;
  isExecuting: boolean;
  prompt: string;
  onPromptChange: (prompt: string) => void;
  onExecute: () => void;
  researchQuery?: string;
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

// Clinical Data Analysis
const clinicalTrials = [
  { id: 'NCT05234567', title: 'Phase III Study of STAT6 Inhibitor in Atopic Dermatitis', phase: 'Phase III', status: 'Recruiting', participants: 450, sponsor: 'Novartis' },
  { id: 'NCT05123456', title: 'Safety and Efficacy of Anti-IL4R in Severe Asthma', phase: 'Phase II', status: 'Active', participants: 280, sponsor: 'Regeneron' },
  { id: 'NCT04987654', title: 'Long-term Safety Study of Dupilumab', phase: 'Phase IV', status: 'Completed', participants: 620, sponsor: 'Sanofi' },
  { id: 'NCT04876543', title: 'STAT6 Pathway Inhibition in Allergic Rhinitis', phase: 'Phase II', status: 'Recruiting', participants: 180, sponsor: 'AstraZeneca' },
  { id: 'NCT04765432', title: 'Combination Therapy in Eosinophilic Esophagitis', phase: 'Phase I', status: 'Enrolling', participants: 60, sponsor: 'Eli Lilly' },
];

const trialPhaseDistribution = [
  { phase: 'Phase I', count: 8 },
  { phase: 'Phase II', count: 15 },
  { phase: 'Phase III', count: 12 },
  { phase: 'Phase IV', count: 5 },
];

const adverseEvents = [
  { category: 'Injection Site Reactions', count: 245 },
  { category: 'Headache', count: 189 },
  { category: 'Conjunctivitis', count: 156 },
  { category: 'Upper Respiratory Infections', count: 134 },
  { category: 'Eosinophilia', count: 98 },
  { category: 'Arthralgia', count: 76 },
];

const patentTimeline = [
  { year: 2015, patents: 12 },
  { year: 2016, patents: 18 },
  { year: 2017, patents: 24 },
  { year: 2018, patents: 31 },
  { year: 2019, patents: 28 },
  { year: 2020, patents: 35 },
  { year: 2021, patents: 42 },
  { year: 2022, patents: 38 },
  { year: 2023, patents: 29 },
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
          <Protein3DViewer pdbUrl="https://files.rcsb.org/download/4hhb.pdb" height="400px" />
          <div className="mt-3 text-xs text-slate-500">
            <p>PDB: 4HHB - Hemoglobin</p>
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

        {/* Compound Preview - 2D Structure */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Microscope className="w-4 h-4 text-amber-600" />
            <h4 className="text-sm font-semibold text-slate-900">2D Chemical Structure</h4>
          </div>
          <div className="bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center mb-3 p-2">
            <img 
              src="data:image/png;base64,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" 
              alt="2D Chemical Structure" 
              className="w-full h-auto rounded"
            />
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-600">Compound:</span>
              <span className="text-slate-900 font-medium">Sample Molecule</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Type:</span>
              <span className="text-blue-700 font-medium">Small Molecule</span>
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

      {/* 3D Protein Structure Section */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <Atom className="w-4 h-4 text-amber-600" />
          <h4 className="text-sm font-semibold text-slate-900">3D Protein Structure (PDB: 4HHB - Hemoglobin)</h4>
        </div>
        <Protein3DViewer pdbUrl="https://files.rcsb.org/download/4hhb.pdb" height="500px" />
        <div className="mt-4 text-xs text-slate-500">
          <p>Interactive 3D viewer - Click and drag to rotate, scroll to zoom</p>
        </div>
      </div>
    </div>
  );
}

function ClinicalDashboard() {
  return (
    <div className="space-y-6">
      {/* AI Analysis Report */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">Clinical Trial Analysis</h3>
            <p className="text-xs text-slate-500 mt-1">Clinical Data Report</p>
          </div>
        </div>

        <div className="prose prose-sm max-w-none">
          <p className="text-sm text-slate-700 leading-relaxed">
            The clinical trial analysis reveals <strong>5 active trials</strong> targeting the IL-4/IL-13/STAT6 
            pathway for allergic diseases. The trials cover various phases, with <strong>15 in Phase II</strong> 
            and 12 in Phase III, indicating a robust clinical development pipeline.
          </p>

          <p className="text-sm text-slate-700 leading-relaxed mt-3">
            <strong>Dupilumab</strong> (Sanofi/Regeneron) has completed a Phase IV long-term safety study 
            involving 620 participants, demonstrating sustained efficacy and safety. The trial data 
            supports the drug's market position and provides valuable insights into long-term outcomes.
          </p>

          <p className="text-sm text-slate-700 leading-relaxed mt-3">
            Adverse event analysis shows that <strong>Injection Site Reactions</strong> are the most common 
            side effect, occurring in 245 participants across all trials. Other notable adverse events 
            include <strong>Headache</strong> (189), <strong>Conjunctivitis</strong> (156), and 
            <strong>Upper Respiratory Infections</strong> (134).
          </p>

          <p className="text-sm text-slate-700 leading-relaxed mt-3">
            Patent analysis shows a steady increase in patent filings, with <strong>42 patents</strong> 
            filed in 2021, indicating ongoing innovation and protection of intellectual property.
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-500">
          <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded border border-emerald-200">ClinicalTrials.gov</span>
          <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded border border-emerald-200">Patents</span>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Package className="w-4 h-4 text-blue-600" />
            <p className="text-xs font-semibold text-slate-600">Total Trials</p>
          </div>
          <p className="text-2xl font-bold text-slate-900">5</p>
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
        {/* Trial Table */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Package className="w-4 h-4 text-emerald-600" />
            <h4 className="text-sm font-semibold text-slate-900">Clinical Trials</h4>
          </div>
          <div className="overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 text-slate-600 font-semibold">Trial ID</th>
                  <th className="text-left py-2 text-slate-600 font-semibold">Title</th>
                  <th className="text-left py-2 text-slate-600 font-semibold">Phase</th>
                  <th className="text-left py-2 text-slate-600 font-semibold">Status</th>
                  <th className="text-left py-2 text-slate-600 font-semibold">Participants</th>
                  <th className="text-left py-2 text-slate-600 font-semibold">Sponsor</th>
                </tr>
              </thead>
              <tbody>
                {clinicalTrials.map((trial) => (
                  <tr key={trial.id} className="border-b border-slate-100 last:border-0">
                    <td className="py-2.5 text-slate-900 font-medium">{trial.id}</td>
                    <td className="py-2.5 text-slate-700">{trial.title}</td>
                    <td className="py-2.5">
                      <span className={`px-2 py-0.5 rounded text-xs ${
                        trial.phase === 'Phase III' 
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                          : trial.phase === 'Phase II'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : trial.phase === 'Phase I'
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'bg-slate-50 text-slate-700 border border-slate-200'
                      }`}>
                        {trial.phase}
                      </span>
                    </td>
                    <td className="py-2.5 text-slate-700">{trial.status}</td>
                    <td className="py-2.5 text-slate-700">{trial.participants}</td>
                    <td className="py-2.5 text-slate-700">{trial.sponsor}</td>
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
            <h4 className="text-sm font-semibold text-slate-900">Trial Phase Distribution</h4>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={trialPhaseDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {trialPhaseDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.phase === 'Phase I' ? '#3b82f6' : entry.phase === 'Phase II' ? '#10b981' : entry.phase === 'Phase III' ? '#f59e0b' : '#ef4444'} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Adverse Events Bar Chart */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-4 h-4 text-emerald-600" />
          <h4 className="text-sm font-semibold text-slate-900">Adverse Events</h4>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={adverseEvents}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="category" tick={{ fontSize: 11, fill: '#64748b' }} />
            <YAxis tick={{ fontSize: 11, fill: '#64748b' }} />
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: '11px' }} />
            <Bar dataKey="count" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Patent Timeline Bar Chart */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-4 h-4 text-emerald-600" />
          <h4 className="text-sm font-semibold text-slate-900">Patent Timeline</h4>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={patentTimeline}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="year" tick={{ fontSize: 11, fill: '#64748b' }} />
            <YAxis tick={{ fontSize: 11, fill: '#64748b' }} />
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: '11px' }} />
            <Bar dataKey="patents" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
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

export default function ResultCanvas({ activeNode, stepConfig, isExecuted, isExecuting, prompt, onPromptChange, onExecute, researchQuery }: ResultCanvasProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (prompt.trim()) {
      onExecute(); // Re-execute current step
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Executing State
  if (isExecuting) {
    return (
      <div className="flex-1 bg-slate-50 flex flex-col overflow-hidden">
        {/* Research Query Header - Fixed */}
        {researchQuery && (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-200 p-6">
            <div className="flex items-start gap-3">
              <MessageSquare className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-semibold text-blue-900 uppercase tracking-wider mb-2">
                  Research Query
                </h4>
                <p className="text-lg text-blue-900 leading-relaxed font-medium">
                  {researchQuery}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Prompt Input - Fixed below Query */}
        <div className="border-b border-slate-200 bg-white p-4">
          <div className="flex gap-3">
            <textarea
              value={prompt}
              onChange={(e) => onPromptChange(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={stepConfig?.placeholder || 'Enter analysis parameters...'}
              rows={3}
              className="flex-1 px-3 py-2.5 bg-slate-50 border-0 focus:bg-white rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-colors"
            />
            <button
              onClick={handleSubmit}
              disabled={!prompt.trim() || isExecuting}
              className="px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white rounded-lg flex items-center justify-center transition-all flex-shrink-0 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Loading Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto" />
              <p className="text-sm text-slate-600 mt-4 font-medium">Generating Analysis Report...</p>
              <p className="text-xs text-slate-500 mt-2">Processing {activeNode?.title}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Not Executed State
  if (!isExecuted) {
    return (
      <div className="flex-1 bg-slate-50 flex flex-col overflow-hidden">
        {/* Research Query Header - Fixed */}
        {researchQuery && (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-200 p-6">
            <div className="flex items-start gap-3">
              <MessageSquare className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-semibold text-blue-900 uppercase tracking-wider mb-2">
                  Research Query
                </h4>
                <p className="text-lg text-blue-900 leading-relaxed font-medium">
                  {researchQuery}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Prompt Input - Fixed below Query */}
        <div className="border-b border-slate-200 bg-white p-4">
          <div className="flex gap-3">
            <textarea
              value={prompt}
              onChange={(e) => onPromptChange(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={stepConfig?.placeholder || 'Enter analysis parameters...'}
              rows={3}
              className="flex-1 px-3 py-2.5 bg-slate-50 border-0 focus:bg-white rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-colors"
            />
            <button
              onClick={handleSubmit}
              disabled={!prompt.trim()}
              className="px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white rounded-lg flex items-center justify-center transition-all flex-shrink-0 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Ready Content */}
        <div className="flex-1 overflow-y-auto p-6">
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
      </div>
    );
  }

  // Executed State - Render specific dashboard based on step type
  const dashboardType = stepConfig?.dashboardType || 'custom';

  return (
    <div className="flex-1 bg-slate-50 flex flex-col overflow-hidden">
      {/* Research Query Header - Fixed */}
      {researchQuery && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-200 p-6">
          <div className="flex items-start gap-3">
            <MessageSquare className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-semibold text-blue-900 uppercase tracking-wider mb-2">
                Research Query
              </h4>
              <p className="text-lg text-blue-900 leading-relaxed font-medium">
                {researchQuery}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Prompt Input - Fixed below Query */}
      <div className="border-b border-slate-200 bg-white p-4">
        <div className="flex gap-3">
          <textarea
            value={prompt}
            onChange={(e) => onPromptChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={stepConfig?.placeholder || 'Enter analysis parameters...'}
            rows={3}
            className="flex-1 px-3 py-2.5 bg-slate-50 border-0 focus:bg-white rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-colors"
          />
          <button
            onClick={handleSubmit}
            disabled={!prompt.trim() || isExecuting}
            className="px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white rounded-lg flex items-center justify-center transition-all flex-shrink-0 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Scrollable Dashboard Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          {dashboardType === 'target' && <TargetDashboard />}
          {dashboardType === 'competitor' && <CompetitorDashboard />}
          {dashboardType === 'structural' && <StructuralDashboard />}
          {dashboardType === 'clinical' && <ClinicalDashboard />}
          {dashboardType === 'custom' && <CustomDashboard />}
        </div>
      </div>
    </div>
  );
}