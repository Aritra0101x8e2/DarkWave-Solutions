
import React, { useEffect, useState } from 'react';
import { Brain, Cpu, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AiInsightPanelProps {
  className?: string;
}

// Mock AI insights
const aiInsights = [
  "Detected pattern matching sophisticated phishing attack from Eastern Europe",
  "Blockchain verification layer detected attempted double-spend attack",
  "Biometric anomaly detected: User login pattern does not match historical data",
  "Potential data exfiltration attempt blocked at firewall level",
  "Unusual API call patterns from authenticated user detected and flagged",
  "Machine learning algorithm identified and prevented credential stuffing attack",
  "Strong correlation between recent attacks and known threat actor 'BlackSwan'",
  "Predictive analysis suggests heightened risk of SQL injection attempts",
  "Facial recognition discrepancy detected at payment verification step",
  "Blockchain ledger integrity verified, no anomalies detected"
];

const AiInsightPanel: React.FC<AiInsightPanelProps> = ({ className }) => {
  const [currentInsight, setCurrentInsight] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  useEffect(() => {
    // Rotate through insights
    const insightInterval = setInterval(() => {
      setCurrentInsight(prev => (prev + 1) % aiInsights.length);
    }, 5000);
    
    // Simulate AI analysis
    const analyzeInterval = setInterval(() => {
      setIsAnalyzing(true);
      setTimeout(() => setIsAnalyzing(false), 2000);
    }, 8000);
    
    return () => {
      clearInterval(insightInterval);
      clearInterval(analyzeInterval);
    };
  }, []);
  
  return (
    <div className={cn("glass-panel p-4", className)}>
      <div className="flex items-center gap-2 mb-3">
        <Brain className="text-electric-400" size={20} />
        <h3 className="text-lg font-semibold">AI Security Insights</h3>
        {isAnalyzing && (
          <div className="ml-auto flex items-center gap-1.5 text-xs bg-darkwave-950/70 px-2 py-1 rounded-full">
            <Cpu size={12} className="text-electric-400 animate-pulse" />
            <span>Analyzing threats...</span>
          </div>
        )}
      </div>
      
      <div className="space-y-3">
        <div className="p-3 rounded-md bg-darkwave-950/50 border border-electric-400/30 min-h-[80px] flex items-center">
          <div className="flex gap-3 items-start">
            <AlertCircle size={18} className="text-electric-400 mt-0.5" />
            <p className="text-sm">{aiInsights[currentInsight]}</p>
          </div>
        </div>
        
        {/* AI Processing Visualization */}
        <div className="h-16 rounded-md bg-darkwave-950/50 border border-darkwave-800/50 overflow-hidden relative">
          {/* Matrix-like data visualization */}
          <div className="absolute inset-0 overflow-hidden opacity-40">
            <div className="grid grid-cols-24 grid-rows-4 h-full w-full">
              {Array.from({ length: 96 }).map((_, i) => (
                <div 
                  key={i} 
                  className="flex items-center justify-center font-mono text-[8px]"
                  style={{ opacity: Math.random() * 0.8 + 0.2 }}
                >
                  {Math.random() > 0.5 ? '1' : '0'}
                </div>
              ))}
            </div>
          </div>
          
          {/* Data streams */}
          <div className="absolute inset-0">
            {Array.from({ length: 5 }).map((_, i) => (
              <div 
                key={i}
                className="absolute h-0.5 bg-electric-400/30 data-stream"
                style={{
                  width: `${Math.random() * 30 + 20}%`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 70}%`,
                  animationDuration: `${Math.random() * 8 + 2}s`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* Status indicators */}
          <div className="absolute bottom-2 right-2 flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-threat-low animate-pulse"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          </div>
        </div>
      </div>
      
      <div className="mt-3 text-xs text-muted-foreground flex items-center gap-1.5">
        <Cpu size={12} className="text-electric-400" />
        <span>DarkWave AI continuously learns from threats for improved protection</span>
      </div>
    </div>
  );
};

export default AiInsightPanel;
