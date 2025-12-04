'use client';

const branches = [
  {
    title: 'Symptom Parse',
    hash: '0xMH1',
    nodes: ['Token stream', 'Symptom embeddings', 'Context guardrails'],
  },
  {
    title: 'Hormone Risk Core',
    hash: '0xMH2',
    nodes: ['Baseline hormones', 'Risk multipliers', 'Safety gating'],
  },
  {
    title: 'Provider Matching',
    hash: '0xMH3',
    nodes: ['Capacity scoring', 'Men’s health credential check', 'Geo fit'],
  },
  {
    title: 'Decision Output',
    hash: '0xMH4',
    nodes: ['Confidence bands', 'Override triggers', 'Dispatch'],
  },
];

const DecisionTree = () => {
  return (
    <div className="relative grid gap-4 md:grid-cols-4">
      {branches.map((branch, index) => (
        <div key={branch.hash} className="relative border border-white/10 bg-black/30 p-3">
          {index < branches.length - 1 && (
            <span className="absolute top-1/2 right-0 hidden h-px w-6 translate-x-1/2 transform bg-white/30 md:block" />
          )}
          <p className="font-mono text-xs text-white/50">
            {branch.title}
            {' // '}
            {branch.hash}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white">
            {branch.nodes.map((node) => (
              <li key={node} className="border border-white/10 bg-black/50 px-2 py-1">
                {node}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DecisionTree;
