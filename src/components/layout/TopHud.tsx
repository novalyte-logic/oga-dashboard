'use client';

import { useEffect, useMemo, useState } from 'react';
import { Activity, ShieldAlert, TimerReset } from 'lucide-react';

type TickerSignal = 'teal' | 'amber' | 'crimson';

interface StatusItem {
  id: string;
  label: string;
  value: string;
  tone: TickerSignal;
}

const baseStatus: StatusItem[] = [
  { id: 'demand', label: 'Global Demand', value: '1.92M req/min', tone: 'teal' },
  { id: 'uptime', label: 'Uptime', value: '99.982%', tone: 'teal' },
  { id: 'latency', label: 'Latency', value: '213 ms', tone: 'amber' },
  { id: 'risk', label: 'Risk Flags', value: '8 ACTIVE', tone: 'crimson' },
  { id: 'data', label: 'Data Ingest', value: '98.7 TB/s', tone: 'teal' },
  { id: 'clinics', label: 'Clinics Online', value: '4,211', tone: 'teal' },
];

const TopHud = () => {
  const [sessionSeconds, setSessionSeconds] = useState(0);
  const [status, setStatus] = useState(baseStatus);

  useEffect(() => {
    const timer = setInterval(() => {
      setSessionSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus((prev) =>
        prev.map((item) => {
          if (item.id === 'latency') {
            const newValue = Math.max(180, Math.min(260, parseInt(item.value) + Math.round(Math.random() * 8 - 4)));
            return { ...item, value: `${newValue} ms` };
          }
          if (item.id === 'demand') {
            const base = 1900000;
            const jitter = Math.round(Math.random() * 6000);
            return { ...item, value: `${((base + jitter) / 1000000).toFixed(2)}M req/min` };
          }
          return item;
        })
      );
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const sessionTime = useMemo(() => {
    const hours = String(Math.floor(sessionSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((sessionSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(sessionSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }, [sessionSeconds]);

  const tickerItems = useMemo(() => [...status, ...status], [status]);

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-gradient-to-b from-[#080808]/90 to-[#050505]/90 px-8 py-5 backdrop-blur">
      <div className="mb-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-white/40">
            Heads Up Display
          </p>
          <h1 className="font-mono text-xl uppercase tracking-[0.5em] text-white">
            God&apos;s Eye Control
          </h1>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-3 rounded-sm border border-white/15 bg-black/40 px-4 py-3">
            <ShieldAlert size={18} className="text-amber" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                Security Level
              </p>
              <p className="font-mono text-sm text-amber">
                DEFCON-2 // LOCKED
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-sm border border-white/15 bg-black/40 px-4 py-3">
            <TimerReset size={18} className="text-teal" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                Session Timer
              </p>
              <p className="font-mono text-sm text-white">{sessionTime}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 rounded-sm border border-white/10 bg-black/40 px-4 py-3">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.4em] text-white/40">
          <Activity size={16} className="text-teal" />
          Global Status
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex animate-ticker gap-10 whitespace-nowrap">
            {tickerItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/70"
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    item.tone === 'teal'
                      ? 'bg-teal'
                      : item.tone === 'amber'
                        ? 'bg-amber'
                        : 'bg-crimson'
                  }`}
                />
                <span className="text-white/50">{item.label}:</span>
                <span className="text-white">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHud;
