import React from 'react';

const SectionSeparator = () => (
  <div className="w-full flex justify-center my-16">
    <svg width="320" height="24" viewBox="0 0 320 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 12 Q160 32 310 12" stroke="#D4AF37" strokeWidth="2.5" fill="none">
        <animate attributeName="d" values="M10 12 Q160 32 310 12;M10 12 Q160 8 310 12;M10 12 Q160 32 310 12" dur="4s" repeatCount="indefinite" />
      </path>
    </svg>
  </div>
);

export default SectionSeparator; 