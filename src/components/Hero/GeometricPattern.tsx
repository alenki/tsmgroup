import styles from './GeometricPattern.module.css';

export function GeometricPattern() {
  return (
    <svg
      className={styles.pattern}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      aria-hidden="true"
    >
      <defs>
        <pattern id="islamicStar" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          {/* 8-point star (octagram) — classic Islamic geometric motif */}
          <g fill="none" stroke="currentColor" strokeWidth="0.5">
            {/* Outer octagon */}
            <polygon points="60,5 84.7,15.3 104.7,35.3 115,60 104.7,84.7 84.7,104.7 60,115 35.3,104.7 15.3,84.7 5,60 15.3,35.3 35.3,15.3" />
            {/* Inner rotated square 1 */}
            <polygon points="60,10 110,60 60,110 10,60" />
            {/* Inner rotated square 2 */}
            <polygon points="25.2,25.2 94.8,25.2 94.8,94.8 25.2,94.8" />
            {/* Star points connecting lines */}
            <line x1="60" y1="5" x2="60" y2="25.2" />
            <line x1="115" y1="60" x2="94.8" y2="60" />
            <line x1="60" y1="115" x2="60" y2="94.8" />
            <line x1="5" y1="60" x2="25.2" y2="60" />
            {/* Diagonal connectors */}
            <line x1="35.3" y1="15.3" x2="25.2" y2="25.2" />
            <line x1="84.7" y1="15.3" x2="94.8" y2="25.2" />
            <line x1="104.7" y1="84.7" x2="94.8" y2="94.8" />
            <line x1="15.3" y1="84.7" x2="25.2" y2="94.8" />
            {/* Center circle */}
            <circle cx="60" cy="60" r="18" />
            {/* Inner star detail */}
            <polygon points="60,42 68,52 78,52 71,60 74,70 60,64 46,70 49,60 42,52 52,52" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#islamicStar)" />
    </svg>
  );
}
