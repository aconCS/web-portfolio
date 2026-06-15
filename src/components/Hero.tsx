export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-8 items-start md:items-center justify-center">
      <div className="flex flex-col items-start shrink-0 w-full md:max-w-[586px]">
        <div className="flex gap-2.5 items-center shrink-0 flex-wrap">
          <p className="whitespace-nowrap">
            <span className="font-kanit font-extralight text-base leading-normal text-primary-brown">based in </span>
            <span className="font-kanit font-medium text-base leading-normal text-primary-brown">Maastricht, Limburg</span>
          </p>
          <svg width="22" height="14" viewBox="0 0 22 14" className="shrink-0">
            <rect y="0" width="22" height="4.667" fill="#AE1C28" />
            <rect y="4.667" width="22" height="4.667" fill="#fff" />
            <rect y="9.333" width="22" height="4.667" fill="#21468B" />
          </svg>
        </div>
        <p className="font-hitmo font-black text-[clamp(24px,6vw,48px)] text-primary-brown leading-normal">
          Hey, I&rsquo;m Andreas
        </p>
        <p className="font-hitmo font-black text-[clamp(16px,3.5vw,28px)] text-primary-brown leading-normal md:hidden">
          I{' '}
          <span className="text-accent-green">develop</span>
          {' '}websites
          <br />
          and{' '}
          <span className="text-accent-orange">hack</span>
          {' '}them
          <br />
          before{' '}
          <span className="text-accent-red">attackers</span>
          {' '}do.
        </p>
        <div className="flex gap-2.5 items-center py-1.5 flex-wrap">
            <a
              href="mailto:2005acon@gmail.com"
              className="flex items-center gap-1.5 hover:opacity-70 transition-opacity"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary-brown shrink-0">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span className="font-kanit font-light text-base sm:text-xl text-primary-brown leading-normal whitespace-nowrap">2005acon@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aconworkcy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:opacity-70 transition-opacity"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-primary-brown shrink-0">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="font-kanit font-light text-base sm:text-xl text-primary-brown leading-normal whitespace-nowrap">linkedin</span>
            </a>
            <a
              href="https://www.github.com/aconcs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:opacity-70 transition-opacity"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-primary-brown shrink-0">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span className="font-kanit font-light text-base sm:text-xl text-primary-brown leading-normal whitespace-nowrap">github</span>
            </a>
            <a
              href="https://cal.eu/aconcs"
              className="border border-primary-brown rounded-[10px] px-2.5 py-1.5 flex items-center gap-1.5 hover:bg-primary-brown/5 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary-brown shrink-0">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span className="font-kanit font-light text-base sm:text-xl text-primary-brown leading-normal whitespace-nowrap">Book meeting</span>
            </a>
          </div>
      </div>
      <div className="w-full md:max-w-[450px] shrink-0 hidden md:block">
        <p className="font-hitmo font-black text-[clamp(16px,3.5vw,28px)] text-primary-brown md:text-right leading-normal">
          I{' '}
          <span className="text-accent-green">develop</span>
          {' '}websites
          <br />
          and{' '}
          <span className="text-accent-orange">hack</span>
          {' '}them
          <br />
          before{' '}
          <span className="text-accent-red">attackers</span>
          {' '}do.
        </p>
      </div>
    </div>
  );
}
