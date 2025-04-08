
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import ThreatLevel from './ThreatLevel';

interface ThreatMapProps {
  className?: string;
}

// Mock data for threat points
const generateThreats = () => {
  const threats = [];
  const threatLevels = ['low', 'medium', 'high', 'critical'] as const;
  
  // Generate 10-15 random threat points
  const numThreats = Math.floor(Math.random() * 6) + 10;
  
  for (let i = 0; i < numThreats; i++) {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const level = threatLevels[Math.floor(Math.random() * threatLevels.length)];
    
    threats.push({
      id: i,
      x,
      y,
      level
    });
  }
  
  return threats;
};

const ThreatMap: React.FC<ThreatMapProps> = ({ className }) => {
  const [threats, setThreats] = useState(generateThreats());
  
  // Periodically update threats for simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setThreats(generateThreats());
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={cn("glass-panel p-4 relative overflow-hidden", className)}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Global Threat Map</h3>
        <div className="flex gap-3">
          <ThreatLevel level="low" />
          <ThreatLevel level="medium" />
          <ThreatLevel level="high" />
          <ThreatLevel level="critical" />
        </div>
      </div>
      
      <div className="w-full aspect-video bg-darkwave-950/50 rounded-md border border-darkwave-700/30 relative overflow-hidden">
        {/* World map grid lines */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6">
          {Array.from({ length: 12 * 6 }).map((_, i) => (
            <div key={i} className="border border-darkwave-700/20"></div>
          ))}
        </div>
        
        {/* Continents outline - simplified representation */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-[25%] h-[35%] rounded-lg bg-darkwave-700/30 top-[15%] left-[20%]"></div>
          <div className="absolute w-[30%] h-[40%] rounded-lg bg-darkwave-700/30 top-[20%] left-[50%]"></div>
          <div className="absolute w-[15%] h-[25%] rounded-lg bg-darkwave-700/30 top-[40%] left-[15%]"></div>
          <div className="absolute w-[20%] h-[20%] rounded-lg bg-darkwave-700/30 top-[65%] left-[25%]"></div>
          <div className="absolute w-[15%] h-[30%] rounded-lg bg-darkwave-700/30 top-[55%] left-[65%]"></div>
        </div>
        
        {/* Attack lines - simulating data flow */}
        {threats.filter(t => t.level === 'high' || t.level === 'critical').map((threat) => (
          <div 
            key={`line-${threat.id}`}
            className="absolute h-px data-stream" 
            style={{
              width: '30%',
              left: `${Math.random() * 70}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              transformOrigin: 'left center',
            }}
          ></div>
        ))}
        
        {/* Threat points */}
        {threats.map((threat) => (
          <div 
            key={threat.id}
            className={cn(
              "absolute w-2 h-2 rounded-full animate-pulse-glow",
              threat.level === 'low' && "bg-threat-low",
              threat.level === 'medium' && "bg-threat-medium",
              threat.level === 'high' && "bg-threat-high",
              threat.level === 'critical' && "bg-threat-critical",
            )}
            style={{
              left: `${threat.x}%`,
              top: `${threat.y}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
        
        {/* Scanning animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 right-0 h-1 bg-electric-400/10 animate-scan-line"></div>
        </div>
      </div>
      
      <div className="mt-3 text-xs text-muted-foreground">
        Active threats: {threats.length} | 
        Critical: {threats.filter(t => t.level === 'critical').length} | 
        High: {threats.filter(t => t.level === 'high').length}
      </div>
    </div>
  );
};

export default ThreatMap;
