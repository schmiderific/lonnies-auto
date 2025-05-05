export default function YelpIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.07 10.21l-1.45-8.52a.78.78 0 00-1.55.12l.1 9.21a.78.78 0 001.53.13l1.37-1.06zm2.26 3.46l6.48-2.68a.78.78 0 00-.12-1.46l-7.14 1.23a.78.78 0 00-.2 1.47l.98 1.44zm-.89 1.3l2.47 5.88a.78.78 0 001.45-.3l-.89-6.4a.78.78 0 00-1.54-.1l-.49.92zm-2.1-.87l-2.34 3.88a.78.78 0 00.9 1.16l4.14-1.75a.78.78 0 00.21-1.36l-2.91-1.93zm-2.66-1.25l-4.95-.65a.78.78 0 00-.39 1.48l5.45 2.4a.78.78 0 00.92-1.19l-.73-1.04z" />
      </svg>
    );
  }