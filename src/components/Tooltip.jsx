// src/components/Tooltip.js
import React from 'react';

function Tooltip({ topic }) {
  return (
    <div className="tooltip">
      <span className="tooltip-text">{topic}</span>
    </div>
  );
}

export default Tooltip;
