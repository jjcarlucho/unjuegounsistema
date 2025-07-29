import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PillarCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const PillarCard: React.FC<PillarCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <div 
      className="quantum-card p-8 hover:translate-y-[-10px] transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Icono grande y estilizado */}
        <div className="bg-quantum-amber-accent/10 p-6 rounded-full text-quantum-amber-accent">
          {icon}
        </div>
        
        <div>
          <h3 className="text-xl font-sans font-bold text-quantum-amber-accent mb-4">
            {title}
          </h3>
          <p className="text-quantum-text-dim leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PillarCard; 