'use client';

import { useEffect, useState } from 'react';

interface Feed {
  label: string;
  freshness: number;
  sla: string;
}

const baseFeeds: Feed[] = [
  { label: 'Lab Feeds', freshness: 92, sla: '15m SLA' },
  { label: 'Clinic Telemetry', freshness: 86, sla: '5m SLA' },
  { label: 'Vendor Supply Grid', freshness: 78, sla: '30m SLA' },
];

const DataFreshness = () => {
  const [feeds, setFeeds] = useState(baseFeeds);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeeds((prev) =>
        prev.map((feed) => {
          const jitter = Math.round((Math.random() - 0.5) * 6);
          return { ...feed, freshness: clamp(feed.freshness + jitter, 45, 100) };
        })
      );
    }, 3600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3">
      {feeds.map((feed) => (
        <div key={feed.label}>
          <div className="flex justify-between text-xs text-white/60">
            <span>{feed.label}</span>
            <span>{feed.sla}</span>
          </div>
          <div className="mt-1 h-2 bg-white/10">
            <div
              className="h-full bg-teal transition-all"
              style={{ width: `${feed.freshness}%` }}
            />
          </div>
          <p className="font-mono text-xs text-white/50">Freshness: {feed.freshness}%</p>
        </div>
      ))}
    </div>
  );
};

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

export default DataFreshness;
