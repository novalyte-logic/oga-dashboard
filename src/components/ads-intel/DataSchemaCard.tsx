'use client';

const fields = [
  { field: 'platform', detail: 'google | tiktok | meta' },
  { field: 'campaign_id', detail: 'Normalized ID + SHA digest' },
  { field: 'ad_group', detail: 'Unified group slug' },
  { field: 'creative_id', detail: 'Creative fingerprint' },
  { field: 'impressions', detail: 'int' },
  { field: 'clicks', detail: 'int' },
  { field: 'spend', detail: 'USD float' },
  { field: 'revenue', detail: 'USD float' },
  { field: 'conversions', detail: 'Patient | Clinic | Marketplace | Vendor' },
  { field: 'timestamp', detail: 'ISO 8601 (UTC)' },
];

const DataSchemaCard = () => {
  return (
    <div className="border border-white/10 bg-black/40 p-4 font-mono text-xs text-white/70">
      <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Unified Ads Schema</p>
      <p className="text-white/50">Auto-refresh 35s // Cached by Redis // Multi-platform normalization</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.field} className="border border-white/10 bg-black/30 px-3 py-2">
            <p className="text-white">{field.field}</p>
            <p className="text-white/60">{field.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataSchemaCard;
