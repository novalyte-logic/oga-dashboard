interface PanelProps {
  title: string;
  stamp: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Panel = ({ title, stamp, subtitle, children, className }: PanelProps) => {
  return (
    <section
      className={`rounded-sm border border-white/10 bg-gradient-to-b from-[#0c0c0c] to-[#060606] p-5 shadow-[0_0_25px_rgba(0,0,0,0.45)] ${className ?? ''}`}
    >
      <header className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
        <div>
          {subtitle ? (
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/30">
              {subtitle}
            </p>
          ) : (
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/30">
              Secure Channel
            </p>
          )}
          <h2 className="font-mono text-sm uppercase tracking-[0.3em] text-white">
            {title}
          </h2>
        </div>
        <span className="font-mono text-[11px] text-white/50">ID: {stamp}</span>
      </header>
      {children}
    </section>
  );
};

export default Panel;
