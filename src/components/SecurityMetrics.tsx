
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Shield, 
  AlertCircle, 
  CheckCircle, 
  Lock, 
  Zap,
  Database,
  Fingerprint
} from 'lucide-react';
import SecurityCard from './SecurityCard';

interface SecurityMetricsProps {
  className?: string;
}

const SecurityMetrics: React.FC<SecurityMetricsProps> = ({ className }) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", className)}>
      <SecurityCard
        title="Threat Detection Rate"
        value="99.8%"
        icon={<Shield size={18} />}
        trend="up"
        trendValue="+0.2%"
      />
      
      <SecurityCard
        title="Active Threats"
        value="14"
        icon={<AlertCircle size={18} />}
        trend="down"
        trendValue="-3"
      />
      
      <SecurityCard
        title="Threats Mitigated"
        value="173"
        icon={<CheckCircle size={18} />}
        trend="up"
        trendValue="+12"
      />
      
      <SecurityCard
        title="System Integrity"
        value="100%"
        icon={<Lock size={18} />}
        trend="neutral"
        trendValue="Stable"
      />
      
      <SecurityCard
        title="Blockchain Verification"
        value="Active"
        icon={<Database size={18} />}
        trend="neutral"
        trendValue="All Nodes"
      />
      
      <SecurityCard
        title="AI Response Time"
        value="43ms"
        icon={<Zap size={18} />}
        trend="down"
        trendValue="-7ms"
      />
      
      <SecurityCard
        title="Biometric Checks"
        value="4.2K"
        icon={<Fingerprint size={18} />}
        trend="up"
        trendValue="+124"
      />
      
      <SecurityCard
        title="Security Score"
        value="A+"
        icon={<Shield size={18} />}
        trend="up"
        trendValue="+1.2"
      />
    </div>
  );
};

export default SecurityMetrics;
