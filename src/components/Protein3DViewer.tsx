import { useEffect, useRef } from 'react';
import { Loader2 } from 'lucide-react';

interface Protein3DViewerProps {
  pdbUrl: string;
  width?: string;
  height?: string;
}

export default function Protein3DViewer({ pdbUrl, width = '100%', height = '400px' }: Protein3DViewerProps) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const viewerInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Load 3Dmol.js script
    const script = document.createElement('script');
    script.src = 'https://3Dmol.csb.pitt.edu/build/3Dmol-min.js';
    script.async = true;
    
    script.onload = () => {
      if (viewerRef.current && (window as any).$3Dmol) {
        // Create viewer
        const viewer = (window as any).$3Dmol.createViewer(viewerRef.current, {
          backgroundColor: 'black',
        });
        viewerInstanceRef.current = viewer;

        // Load PDB file
        fetch(pdbUrl)
          .then(response => response.text())
          .then(data => {
            viewer.addModel(data, 'pdb');
            viewer.setStyle({}, { cartoon: { color: 'spectrum' } });
            viewer.zoomTo();
            viewer.render();
            viewer.zoom(1.2);
          })
          .catch(error => {
            console.error('Error loading PDB file:', error);
          });
      }
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [pdbUrl]);

  return (
    <div 
      ref={viewerRef} 
      style={{ width, height, position: 'relative' }}
      className="rounded-lg overflow-hidden"
    />
  );
}
