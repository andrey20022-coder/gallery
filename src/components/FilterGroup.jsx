import { useState } from 'react';

export default function FilterGroup({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`filter-group ${isOpen ? 'open' : ''}`}>
      <div 
        className="filter-group-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3>{title}</h3>
        <div className="toggle-icon">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ 
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}
          >
            <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div className="filter-group-content">
        {children}
      </div>
    </div>
  );
}