'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type Severity = 'OK' | 'WARN' | 'CRIT';

interface MatchLog {
  id: string;
  timestamp: string;
  severity: Severity;
  event: string;
}

const templates = [
  { severity: 'OK', event: 'AI_MATCH 0xAC21 -> routed to Geneva Clinic' },
  { severity: 'OK', event: 'AI_MATCH 0x4F99 -> vendor Nexus Spine approved' },
  { severity: 'WARN', event: 'LATENCY SPIKE detected on APAC triage node' },
  { severity: 'OK', event: 'AI_MATCH 0xF211 -> remote surgery slot reserved' },
  { severity: 'CRIT', event: 'BIOHAZARD flag raised for patient cluster' },
  { severity: 'WARN', event: 'Throughput dip: recalibrating inference weights' },
];

const createLog = (): MatchLog => {
  const template = templates[Math.floor(Math.random() * templates.length)];
  return {
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    severity: template.severity as Severity,
    event: template.event,
  };
};

const LiveAIMatches = () => {
  const [logs, setLogs] = useState<MatchLog[]>(() =>
    Array.from({ length: 8 }).map(() => createLog())
  );
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs((prev) => {
        const next = [...prev.slice(-9), createLog()];
        return next;
      });
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [logs]);

  const severityStyles = useMemo<Record<Severity, string>>(
    () => ({
      OK: 'text-teal border-teal/60',
      WARN: 'text-amber border-amber/60',
      CRIT: 'text-crimson border-crimson/60',
    }),
    []
  );

  return (
    <div className="h-[320px] font-mono text-xs text-white/80">
      <div
        ref={scrollRef}
        className="h-full overflow-hidden overflow-y-auto border border-white/5 bg-black/40 px-4 py-3"
      >
        <div className="space-y-2">
          {logs.map((log) => (
            <div key={log.id} className="flex gap-3">
              <span className="text-white/40">{log.timestamp.replace('T', ' ').slice(0, 19)}</span>
              <span
                className={`border border-white/20 px-2 py-0.5 ${
                  severityStyles[log.severity]
                }`}
              >
                {log.severity}
              </span>
              <span className="text-white">{log.event}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveAIMatches;
