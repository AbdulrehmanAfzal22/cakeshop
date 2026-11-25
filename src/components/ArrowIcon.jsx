export default function ArrowIcon({ direction = 'external', className = '' }) {
  const paths = {
    external: (
      <>
        <path d="M14 5h5v5M19 5l-9 9" />
        <path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
      </>
    ),
    down: <path d="M12 4v15m-6-6 6 6 6-6" />,
    right: <path d="M4 12h15m-6-6 6 6-6 6" />,
  };

  return (
    <svg
      className={`arrow-icon arrow-${direction} ${className}`.trim()}
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths[direction]}
      </g>
    </svg>
  );
}
