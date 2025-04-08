
import React from 'react';
import { cn } from '@/lib/utils';

interface SecurityCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  className?: string;
}

const SecurityCard: React.FC<SecurityCardProps> = ({
  title,
  value,
  icon,
  trend,
  trendValue,
  className
}) => {
  return (
    <div className={cn("glass-panel p-4 h-full", className)}>
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <div className="text-electric-400">{icon}</div>
      </div>
      <div className="flex items-end justify-between">
        <p className="text-2xl font-bold">{value}</p>
        {trend && (
          <div className={cn(
            "text-xs font-medium flex items-center",
            trend === 'up' ? 'text-threat-critical' : trend === 'down' ? 'text-threat-low' : 'text-muted-foreground'
          )}>
            {trend === 'up' && '↑'}
            {trend === 'down' && '↓'}
            {trend === 'neutral' && '→'}
            {trendValue}
          </div>
        )}
      </div>
    </div>
  );
};

export default SecurityCard;
