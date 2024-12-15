export default function EyeIcon({ color = "#000", size = 68 }) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 68 68" fill="none">
        <path d="M4 34C4 34 16 14 34 14C52 14 64 34 64 34C64 34 52 54 34 54C16 54 4 34 4 34Z" stroke={color} strokeWidth="2" fill="none" />
        <circle cx="34" cy="34" r="10" stroke={color} strokeWidth="2" fill="none" />
      </svg>
    );
  }
  
  