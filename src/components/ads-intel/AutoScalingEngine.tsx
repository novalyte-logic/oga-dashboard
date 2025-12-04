'use client';

import { useEffect, useState } from 'react';

interface ScalingAction {
  campaign: string;
  rule: string;
  action: 'Micro Ramp' | 'Medium Ramp' | 'Hard Scale' | 'Throttle' | 'Kill' | 'Freeze Creative';
  delta: string;
}

const seedActions: ScalingAction[] = [
  {
    campaign: 'TikTok // TRT Spark',
    rule: 'ROAS > target 3 windows',
    action: 'Medium Ramp',
    delta: '+18%',
  },
  {
    campaign: 'Google Display // Retarget',
    rule: 'Revenue decoupled from spend',
    action: 'Kill',
    delta: '-100%',
  },
  {
    campaign: 'Meta Reels // Clinic Lookalike',
    rule: 'Creative fatigue detected',
    action: 'Freeze Creative',
    delta: '0%',
  },
];

const AutoScalingEngine = () => {
  const [actions, setActions] = useState(seedActions);

  useEffect(() => {
    const interval = setInterval(() => {
      setActions((prev) => {
        const next = [...prev];
        next[Math.floor(Math.random() * next.length)] = {
          campaign: 'Google Search // GLP-1 Core',
          rule: 'ROAS > target 3 windows',
          action: 'Hard Scale',
          delta: '+52%',
        };
        return next;
      });
    }, 45000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3 text-sm text-white/80">
      {actions.map((action, idx) => (
        <div key={`${action.campaign}-${idx}`} className="border border-white/10 bg-black/40 px-3 py-2 font-mono text-xs">
          <div className="flex items-center justify-between">
            <span className="text-white">{action.campaign}</span>
            <span className="text-teal">{action.action}</span>
          </div>
          <p className="text-white/60">{action.rule}</p>
          <p className="text-white/40">Δ {action.delta}</p>
        </div>
      ))}
      <p className="text-[11px] text-white/50">
        Logic: ROAS targets, CPA thresholds, revenue coupling, fatigue detection, and lead quality continuously stream
        into the scaling engine to decide between micro/medium/hard ramps or throttles.
      </p>
    </div>
  );
};

export default AutoScalingEngine;
