import React, { useEffect, useState } from 'react';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThreatLevel from './ThreatLevel';

interface ThreatEvent {
  id: number;
  timestamp: Date;
  source: string;
  type: string;
  level: 'low' | 'medium' | 'high' | 'critical';
  status: 'detected' | 'analyzing' | 'mitigated';
  description: string;
}

const threatTypes = [
  'SQL Injection Attempt',
  'XSS Attack',
  'Brute Force Login',
  'DDoS Attack',
  'Suspicious API Call',
  'Malware Detected',
  'Data Exfiltration',
  'Unauthorized Access',
  'Phishing Attack',
  'Ransomware Detected'
];

const threatSources = [
  '192.168.1.105',
  '203.45.167.82',
  '87.134.56.201',
  '45.123.89.10',
  '176.34.29.154'
];

// Generate a random threat event
const generateThreatEvent = (id: number): ThreatEvent => {
  const levels = ['low', 'medium', 'high', 'critical'] as const;
  const statuses = ['detected', 'analyzing', 'mitigated'] as const;
  
  const level = levels[Math.floor(Math.random() * levels.length)];
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  const type = threatTypes[Math.floor(Math.random() * threatTypes.length)];
  const source = threatSources[Math.floor(Math.random() * threatSources.length)];
  
  return {
    id,
    timestamp: new Date(),
    source,
    type,
    level,
    status,
    description: `Potential ${type} detected from IP ${source}`
  };
};

interface ThreatDetectionProps {
  className?: string;
}

const ThreatDetection: React.FC<ThreatDetectionProps> = ({ className }) => {
  const [threats, setThreats] = useState<ThreatEvent[]>([]);
  
  useEffect(() => {
    // Initialize with some threats
    const initialThreats = Array.from({ length: 5 }, (_, i) => 
      generateThreatEvent(i)
    );
    setThreats(initialThreats);
    
    // Add new threats periodically
    const interval = setInterval(() => {
      setThreats(prev => {
        // Keep only the 10 most recent threats
        const newThreats = [...prev, generateThreatEvent(Date.now())];
        if (newThreats.length > 10) {
          return newThreats.slice(newThreats.length - 10);
        }
        return newThreats;
      });
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  const getStatusIcon = (status: ThreatEvent['status']) => {
    switch (status) {
      case 'detected':
        return <AlertTriangle size={16} className="text-threat-high" />;
      case 'analyzing':
        return <Shield size={16} className="text-electric-400 animate-pulse" />;
      case 'mitigated':
        return <CheckCircle size={16} className="text-threat-low" />;
    }
  };
  
  const getStatusText = (status: ThreatEvent['status']) => {
    switch (status) {
      case 'detected':
        return 'Detected';
      case 'analyzing':
        return 'Analyzing';
      case 'mitigated':
        return 'Mitigated';
    }
  };
  
  return (
    <div className={cn("glass-panel p-4", className)}>
      <h3 className="text-lg font-semibold mb-4">Threat Detection</h3>
      
      <div className="space-y-3">
        {threats.map((threat) => (
          <div 
            key={threat.id}
            className="p-2 rounded-md bg-darkwave-950/50 border border-darkwave-800/50"
          >
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-2">
                {getStatusIcon(threat.status)}
                <span className="font-mono text-sm">{threat.type}</span>
              </div>
              <ThreatLevel level={threat.level} />
            </div>
            
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>Source: {threat.source}</span>
              <span>
                {threat.timestamp.toLocaleTimeString()} | {getStatusText(threat.status)}
              </span>
            </div>
            
            {/* Progress bar for analyzing threats */}
            {threat.status === 'analyzing' && (
              <div className="w-full h-1 bg-darkwave-800 mt-2 overflow-hidden rounded-full">
                <div className="h-full bg-electric-400 data-stream"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreatDetection;
