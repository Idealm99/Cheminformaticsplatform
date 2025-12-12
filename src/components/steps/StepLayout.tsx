import { useState } from 'react';
import LeftPanel from '../LeftPanel';
import RightPanel from '../RightPanel';

interface StepLayoutProps {
  stepNumber: 1 | 2 | 3 | 4;
}

export default function StepLayout({ stepNumber }: StepLayoutProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);

  const handleRun = () => {
    setIsRunning(true);
    setLogs([]);
    
    // Simulate agent execution
    const logMessages = getSimulatedLogs(stepNumber, selectedTools);
    
    logMessages.forEach((log, index) => {
      setTimeout(() => {
        setLogs(prev => [...prev, log]);
        if (index === logMessages.length - 1) {
          setIsRunning(false);
        }
      }, index * 800);
    });
  };

  const handleToolToggle = (tool: string) => {
    setSelectedTools(prev => 
      prev.includes(tool) 
        ? prev.filter(t => t !== tool)
        : [...prev, tool]
    );
  };

  return (
    <div className="h-full flex">
      {/* Left Column */}
      <LeftPanel 
        stepNumber={stepNumber}
        onRun={handleRun}
        isRunning={isRunning}
        selectedTools={selectedTools}
        onToolToggle={handleToolToggle}
      />

      {/* Right Column */}
      <RightPanel 
        stepNumber={stepNumber}
        isRunning={isRunning}
        logs={logs}
        selectedTools={selectedTools}
      />
    </div>
  );
}

function getSimulatedLogs(step: number, tools: string[]): string[] {
  const baseLogs = [`> Initializing workflow for Step ${step}...`, '> Validating input parameters...'];
  
  if (tools.length === 0) {
    return [...baseLogs, '> Warning: No tools selected', '> Process completed with warnings'];
  }

  const toolLogs: Record<string, string[]> = {
    'UniProt': [
      '> Connecting to UniProt API...',
      '> Querying protein: STAT6_HUMAN',
      '> Found entry P42226 (685 amino acids)',
      '> Retrieving functional annotations...'
    ],
    'InterPro': [
      '> Fetching InterPro domain architecture...',
      '> Identified: SH2 domain (IPR000980)',
      '> Identified: STAT DNA-binding domain (IPR013799)'
    ],
    'RCSB PDB': [
      '> Searching RCSB PDB for STAT6 structures...',
      '> Found 3 experimental structures',
      '> Best resolution: 6WTT (2.15 Å)'
    ],
    'AlphaFold': [
      '> Querying AlphaFold database...',
      '> Retrieved predicted structure: AF-P42226-F1',
      '> Confidence score: 85.3 (pLDDT)'
    ],
    'ChEMBL': [
      '> Connecting to ChEMBL API...',
      '> Searching bioactivity data for target...',
      '> Found 247 compounds with IC50 < 10μM',
      '> Retrieving SMILES strings...'
    ],
    'PubChem': [
      '> Querying PubChem compound database...',
      '> Found 1,342 similar structures',
      '> Downloading molecular properties...'
    ],
    'SureChEMBL': [
      '> Searching patent chemical space...',
      '> Identified 89 unique scaffolds',
      '> Extracting patent metadata...'
    ],
    'ClinicalTrials.gov': [
      '> Connecting to ClinicalTrials.gov...',
      '> Searching active trials...',
      '> Found 12 trials in Phase II/III'
    ],
    'openFDA': [
      '> Querying openFDA adverse events database...',
      '> Analyzing safety signals...',
      '> Retrieved 4,523 event records'
    ],
    'RDKit': [
      '> Initializing RDKit cheminformatics engine...',
      '> Calculating Morgan fingerprints (radius=2)...',
      '> Computing Tanimoto similarity matrix...',
      '> Performing hierarchical clustering...',
      '> Generated 7 chemical clusters'
    ],
    'Google Patents': [
      '> Searching Google Patents API...',
      '> Query: STAT6 inhibitor compounds',
      '> Found 156 patent families',
      '> Top assignee: Pfizer Inc. (23 patents)'
    ]
  };

  let resultLogs: string[] = [...baseLogs];
  
  tools.forEach(tool => {
    if (toolLogs[tool]) {
      resultLogs = [...resultLogs, ...toolLogs[tool]];
    }
  });

  resultLogs.push('> ✓ All agents completed successfully');
  resultLogs.push(`> Results ready for review`);

  return resultLogs;
}
