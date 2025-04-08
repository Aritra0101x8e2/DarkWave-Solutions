
import React from 'react';
import { cn } from '@/lib/utils';
import { AlertTriangle } from 'lucide-react';

type ThreatLevelType = 'low' | 'medium' | 'high' | 'critical';

interface ThreatLevelProps {
  level: ThreatLevelType;
  label?: string;
  className?: string;
}

const getLevelColor = (level: ThreatLevelType) => {
  switch (level) {
    case 'low':
      return 'bg-threat-low';
    case 'medium':
      return 'bg-threat-medium';
    case 'high':
      return 'bg-threat-high';
    case 'critical':
      return 'bg-threat-critical';
  }
};

const getLevelLabel = (level: ThreatLevelType) => {
  switch (level) {
    case 'low':
      return 'Low';
    case 'medium':
      return 'Medium';
    case 'high':
      return 'High';
    case 'critical':
      return 'Critical';
  }
};

const ThreatLevel: React.FC<ThreatLevelProps> = ({
  level,
  label,
  className
}) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center gap-1.5">
        <div className={cn("w-3 h-3 rounded-full", getLevelColor(level))} />
        <span className="text-sm font-medium">
          {label || getLevelLabel(level)}
        </span>
      </div>
      {level === 'high' || level === 'critical' ? (
        <AlertTriangle size={16} className="text-threat-critical animate-pulse" />
      ) : null}
    </div>
  );
};

export default ThreatLevel;
