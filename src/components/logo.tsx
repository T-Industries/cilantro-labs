type LogoProps = {
  className?: string;
};

export function LogoMark({ className = "h-6 w-6" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="cl-leaf" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0%" stopColor="#6ee7b7" />
          <stop offset="55%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>
      <path
        d="M16 3c5.5 4 9 8.5 9 14a9 9 0 1 1-18 0c0-5.5 3.5-10 9-14Z"
        fill="url(#cl-leaf)"
      />
      <path
        d="M16 8v18"
        stroke="rgba(0,0,0,0.35)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M16 14c-2.2 0-4 .8-5.2 2M16 18c-1.8 0-3.4.6-4.5 1.6M16 14c2.2 0 4 .8 5.2 2M16 18c1.8 0 3.4.6 4.5 1.6"
        stroke="rgba(0,0,0,0.3)"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <LogoMark className="h-7 w-7" />
      <span className="text-[15px] font-semibold tracking-tight">
        Cilantro Labs
      </span>
    </div>
  );
}
