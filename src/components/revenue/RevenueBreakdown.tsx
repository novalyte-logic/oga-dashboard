'use client';

const clinicBreakdown = [
  { label: 'Titan Ridge Neuro', value: '$42.8M', share: '21%' },
  { label: 'Nova Gulf Trauma', value: '$31.2M', share: '15%' },
  { label: 'Atlas Spine Grid', value: '$27.4M', share: '13%' },
];

const categoryBreakdown = [
  { label: 'Surgical Robotics', value: '$62.1M', share: '30%' },
  { label: 'Tele-ICU Marketplace', value: '$48.5M', share: '24%' },
  { label: 'Advanced Implants', value: '$33.9M', share: '16%' },
];

const vendorBreakdown = [
  { label: 'BioEdge Systems', value: '$27.5M', share: '13%' },
  { label: 'MedVector Labs', value: '$26.8M', share: '13%' },
  { label: 'Quantum Health Grid', value: '$21.3M', share: '10%' },
];

const RevenueBreakdown = () => {
  const sections = [
    { title: 'Revenue by Clinic', data: clinicBreakdown },
    { title: 'Revenue by Category', data: categoryBreakdown },
    { title: 'Revenue by Vendor', data: vendorBreakdown },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {sections.map((section) => (
        <div key={section.title} className="border border-white/10 bg-black/40 p-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">{section.title}</p>
          <div className="mt-3 space-y-3 text-sm text-white/80">
            {section.data.map((item) => (
              <div key={item.label} className="border border-white/10 bg-black/30 px-3 py-2">
                <p className="font-mono text-xs text-white/50">{item.label}</p>
                <div className="flex justify-between">
                  <span>{item.value}</span>
                  <span className="text-white/40">{item.share}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RevenueBreakdown;
