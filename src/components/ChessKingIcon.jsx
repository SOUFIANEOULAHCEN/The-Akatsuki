// ChessKingIcon.jsx
import React from 'react';

const ChessKingIcon = ({ color = "#000", size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      width={size}
      height={size}
    >
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm1-14h-2v6h2zm1 8h-4v2h4zm-5-8H9V7h2z" />
    </svg>
  );
};

export default ChessKingIcon;
