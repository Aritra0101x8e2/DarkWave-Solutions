
import React from 'react';
import { Shield, Bell, Settings, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  return (
    <header className="w-full h-16 glass-panel flex items-center justify-between px-5">
      <div className="flex items-center gap-2">
        <Shield className="text-electric-400" size={24} />
        <span className="font-bold text-xl">DarkWave</span>
        <span className="text-electric-400 font-semibold text-xs ml-1">SENTINEL.AI</span>
      </div>
      
      <nav>
        <ul className="flex space-x-8">
          <li className="text-sm font-medium"><a href="#" className="border-b-2 border-electric-400 pb-1">DASHBOARD</a></li>
          <li className="text-sm font-medium text-muted-foreground">
  <a 
    href="https://dark-wave-analytics-aritra.vercel.app/" 
    className="hover:text-white transition-colors" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    MORE
  </a>
</li>

    
        </ul>
      </nav>
      
      <div className="flex items-center gap-4">
        <button className="relative text-muted-foreground hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-electric-400 rounded-full"></span>
        </button>
        <button className="text-muted-foreground hover:text-white transition-colors">
          <Settings size={20} />
        </button>
        <div className="ml-2 h-8 w-8 rounded-full bg-darkwave-700 flex items-center justify-center">
          <User size={16} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
