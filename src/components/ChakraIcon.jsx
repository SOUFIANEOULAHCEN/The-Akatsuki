export default function ChakraIcon({ color = "#000", size = 68 }) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 68 68" fill="none">
        <circle cx="34" cy="34" r="30" stroke={color} strokeWidth="2" fill="none" />
        <path d="M34 4C34 34 64 34 64 34" stroke={color} strokeWidth="2" />
        <path d="M34 64C34 34 4 34 4 34" stroke={color} strokeWidth="2" />
      </svg>
    );
  }
  
  