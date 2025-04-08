
import React from 'react';
import Navbar from '@/components/Navbar';
import SecurityMetrics from '@/components/SecurityMetrics';
import ThreatMap from '@/components/ThreatMap';
import ThreatDetection from '@/components/ThreatDetection';
import AiInsightPanel from '@/components/AiInsightPanel';
import SecurityLayers from '@/components/SecurityLayers';
import { Shield } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-darkwave-900">
      <Navbar />
      
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="text-electric-400" size={24} />
            <h1 className="text-2xl font-bold">DarkWave Security Dashboard</h1>
            <div className="ml-auto px-3 py-1 rounded-full text-xs font-medium bg-electric-400/10 text-electric-400 border border-electric-400/30">
              AI Protection Active
            </div>
          </div>
          
          <div className="mb-6">
            <SecurityMetrics />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <ThreatMap className="lg:col-span-2" />
            <ThreatDetection />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <AiInsightPanel />
            <SecurityLayers />
          </div>
          
          <div className="glass-panel p-6 mb-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">DarkWave Sentinel Shield</h2>
                <p className="text-muted-foreground">
                  Our comprehensive security platform combines cutting-edge technologies to protect your 
                  business from sophisticated cyber threats before they can cause damage.
                </p>
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-electric-400"></div>
                  <span className="text-sm">AI-powered threat detection</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-electric-400"></div>
                  <span className="text-sm">Multi-layered security architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-electric-400"></div>
                  <span className="text-sm">Real-time monitoring and alerts</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-electric-400"></div>
                  <span className="text-sm">Seamless integration with existing systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-electric-400"></div>
                  <span className="text-sm">Customizable security policies</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-electric-400"></div>
                  <span className="text-sm">Minimal impact on user experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="p-4 border-t border-darkwave-800/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-2 md:mb-0">
            <Shield className="text-electric-400" size={16} />
            <span className="font-medium">DarkWave Security - Aritra</span>
            <span className="text-xs text-muted-foreground">© {new Date().getFullYear()}</span>
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
