'use client';

import { useEffect, useState } from 'react';

interface Token {
  text: string;
  weight: number;
}

const baseTokens: Token[] = [
  { text: 'androgen', weight: 0.91 },
  { text: 'hair-loss', weight: 0.72 },
  { text: 'cortisol', weight: 0.66 },
  { text: 'sleep-fragment', weight: 0.58 },
  { text: 'labs:psa', weight: 0.81 },
  { text: 'clinic:H-12A', weight: 0.63 },
  { text: 'risk:cardio', weight: 0.54 },
];

const ReasoningTokens = () => {
  const [tokens, setTokens] = useState(baseTokens);

  useEffect(() => {
    const interval = setInterval(() => {
      setTokens((prev) =>
        prev.map((token) => {
          const jitter = (Math.random() - 0.5) * 0.08;
          return { ...token, weight: clamp(token.weight + jitter, 0.3, 0.99) };
        })
      );
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap gap-2">
      {tokens.map((token) => (
        <span
          key={token.text}
          className="border border-white/15 bg-black/40 px-3 py-2 font-mono text-xs text-white/80"
        >
          <span className="text-white">{token.text}</span>
          <span className="ml-2 text-teal">{(token.weight * 100).toFixed(1)}%</span>
        </span>
      ))}
    </div>
  );
};

const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, val));

export default ReasoningTokens;
