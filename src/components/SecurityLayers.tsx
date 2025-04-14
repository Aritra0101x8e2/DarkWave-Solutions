
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Shield, 
  Database, 
  Lock, 
  Eye, 
  MessageSquare, 
  Fingerprint,
  Cpu,
  Cloud
} from 'lucide-react';

interface LayerItemProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  className?: string;
}

const LayerItem: React.FC<LayerItemProps> = ({
  icon,
  name,
  description,
  className
}) => {
  return (
    <div className={cn(
      "glass-panel p-3 flex items-center gap-3 group hover:border-electric-400/50 transition-colors",
      className
    )}>
      <div className="p-2 rounded-full bg-darkwave-950/50 border border-darkwave-800/50 text-electric-400 group-hover:border-electric-400/50 transition-colors">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

interface SecurityLayersProps {
  className?: string;
}

const SecurityLayers: React.FC<SecurityLayersProps> = ({ className }) => {
  return (
    <div className={cn("glass-panel p-4", className)}>
      <h3 className="text-lg font-semibold mb-4">Multi-Layered Security Architecture</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
       
        
      <a 
  href="https://network-traffic-aritra-darkwave.vercel.app/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="w-full"
>
  <LayerItem 
    icon={<Cpu size={18} />}
    name="AI-Driven Analysis"
    description="Machine learning pattern recognition"
  />
</a>

        
        <a 
  href="https://trust-vault-id-darkwave-aritra.vercel.app/" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <LayerItem 
    icon={<Database size={18} />}
    name="Blockchain Verification"
    description="Immutable transaction validation"
  />
</a>

        
        <LayerItem 
          icon={<Lock size={18} />}
          name="Zero-Trust Framework"
          description="Continuous authentication and authorization"
        />
        
        <a 
  href="https://ryvora-darkwave-aritra.vercel.app/" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <LayerItem 
    icon={<Eye size={18} />}
    name="Behavioral Monitoring"
    description="User activity analysis and anomaly detection"
  />
</a>

        
<a 
  href="https://ivyra-ai-darkwave-aritra.vercel.app/" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <LayerItem 
    icon={<MessageSquare size={18} />}
    name="Phishing Protection"
    description="AI-powered communication scanning"
  />
</a>



        
        <a 
  href="https://ryvora-darkwave-aritra.vercel.app/" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <LayerItem 
    icon={<Fingerprint size={18} />}
    name="Biometric Verification"
    description="Multi-factor physical identity confirmation"
  />
</a>

        
        <LayerItem 
          icon={<Cloud size={18} />}
          name="Secure Cloud Infrastructure"
          description="Encrypted data storage and transmission"
        />
      </div>
    </div>
  );
};

export default SecurityLayers;
