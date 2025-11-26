import React, { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab, className = '' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id);

  return (
    <div className={className}>
      <div className="flex border-b border-slate-200 mb-6 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-6 py-3 font-bold text-sm transition-all duration-200 relative whitespace-nowrap
              ${activeTab === tab.id ? 'text-primary-dark' : 'text-slate-500 hover:text-slate-800'}
            `}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-dark rounded-t-full" />
            )}
          </button>
        ))}
      </div>
      <div className="animate-in fade-in duration-300">
        {tabs.find(t => t.id === activeTab)?.content}
      </div>
    </div>
  );
};
