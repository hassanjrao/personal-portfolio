type IconProps = { className?: string };

export function LinkedInIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/**
 * Fiverr's mark is a lowercase "fi" set in a rounded square. Drawn rather than
 * imported so the site ships no icon-font dependency.
 */
export function FiverrIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="currentColor" />
      <path
        d="M13.7 7.15a.95.95 0 1 1 1.9 0 .95.95 0 0 1-1.9 0Zm1.87 2.19h-1.84v7.5h1.84v-7.5Zm-3.02 0H8.63v-.2c0-.62.4-.95 1.05-.95h.72V6.5h-1.1c-1.63 0-2.6.9-2.6 2.48v.36H5.5v1.62h1.2v5.88h1.93v-5.88h2.02v5.88h1.9v-7.5Z"
        fill="#fff"
      />
    </svg>
  );
}
