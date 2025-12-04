'use client';

import { useState } from 'react';

interface LogEntry {
  timestamp: string;
  action: string;
  data: string;
  forecast: string;
  risk: string;
}

const seedEntries: LogEntry[] = [
  {
    timestamp: new Date().toISOString(),
    action: 'Micro ramp TikTok Spark +7%',
    data: 'ROAS 6.2x, CPA -12%, attribution revenue $410k / 24h',
    forecast: '+$42k net / 6d',
    risk: 'Low',
  },
  {
    timestamp: new Date().toISOString(),
    action: 'Kill Meta Feed Clinic',
    data: 'ROAS 1.8x, fatigue RED, revenue decoupled',
    forecast: 'Stops $8k/day loss',
    risk: 'Medium',
  },
];

const AutopilotChangeLog = () => {
  const [entries] = useState(seedEntries);
  return (
    <div className="max-h-60 overflow-y-auto border border-white/10 bg-black/40 px-3 py-2 font-mono text-xs text-white/80">
      {entries.map((entry, idx) => (
        <div key={idx} className="border-b border-white/10 py-2 last:border-b-0">
          <p>{entry.timestamp}</p>
          <p className="text-white">{entry.action}</p>
          <p className="text-white/60">Data: {entry.data}</p>
          <p className="text-teal">Forecast: {entry.forecast}</p>
          <p className="text-white/50">Risk rating: {entry.risk}</p>
        </div>
      ))}
    </div>
  );
};

export default AutopilotChangeLog;
