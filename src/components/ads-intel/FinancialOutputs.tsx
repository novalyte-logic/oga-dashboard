'use client';

const campaigns = [
  {
    name: 'Google // GLP-1 Search',
    spend: '$920k',
    revenue: '$5.9M',
    grossMargin: '72%',
    netProfit: '$4.1M',
    cpa: '$81 / metrics cascade',
    revPerVisitor: '$48',
    ltvMultiplier: '3.4x',
  },
  {
    name: 'TikTok // TRT Spark',
    spend: '$610k',
    revenue: '$3.1M',
    grossMargin: '68%',
    netProfit: '$2.5M',
    cpa: '$74 / funnel',
    revPerVisitor: '$42',
    ltvMultiplier: '3.8x',
  },
  {
    name: 'Meta // Reels Lookalike',
    spend: '$480k',
    revenue: '$2.4M',
    grossMargin: '63%',
    netProfit: '$1.8M',
    cpa: '$96 / funnel',
    revPerVisitor: '$31',
    ltvMultiplier: '4.2x',
  },
];

const FinancialOutputs = () => {
  return (
    <div className="overflow-x-auto border border-white/10 bg-black/40 text-sm text-white/80">
      <table className="w-full border-collapse font-mono text-xs">
        <thead>
          <tr className="bg-black/60 text-white/50">
            <th className="border border-white/10 px-3 py-2 text-left">Campaign</th>
            <th className="border border-white/10 px-3 py-2 text-left">Spend</th>
            <th className="border border-white/10 px-3 py-2 text-left">Revenue</th>
            <th className="border border-white/10 px-3 py-2 text-left">Gross Margin</th>
            <th className="border border-white/10 px-3 py-2 text-left">Net Profit</th>
            <th className="border border-white/10 px-3 py-2 text-left">CPA per Step</th>
            <th className="border border-white/10 px-3 py-2 text-left">Revenue / Visitor</th>
            <th className="border border-white/10 px-3 py-2 text-left">LTV Multiplier</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign.name}>
              <td className="border border-white/10 px-3 py-2 text-white">{campaign.name}</td>
              <td className="border border-white/10 px-3 py-2">{campaign.spend}</td>
              <td className="border border-white/10 px-3 py-2">{campaign.revenue}</td>
              <td className="border border-white/10 px-3 py-2">{campaign.grossMargin}</td>
              <td className="border border-white/10 px-3 py-2">{campaign.netProfit}</td>
              <td className="border border-white/10 px-3 py-2">{campaign.cpa}</td>
              <td className="border border-white/10 px-3 py-2">{campaign.revPerVisitor}</td>
              <td className="border border-white/10 px-3 py-2">{campaign.ltvMultiplier}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialOutputs;
