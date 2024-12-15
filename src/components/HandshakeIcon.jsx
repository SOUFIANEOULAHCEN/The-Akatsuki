export default function HandshakeIcon({ color = "#000", size = 68 }) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 68 68" fill="none">
        <path d="M4 34H64" stroke={color} strokeWidth="2" />
        <path d="M24 24C24 24 34 34 44 24" stroke={color} strokeWidth="2" fill="none" />
        <path d="M24 44C24 44 34 34 44 44" stroke={color} strokeWidth="2" fill="none" />
      </svg>
    );
  }
  
  