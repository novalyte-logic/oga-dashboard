'use client';

const events = [
  'Ad impression',
  'Ad click',
  'Landing page view',
  'CTA click',
  'Assessment start',
  'Assessment completion',
  'Lead submission',
  'Clinic booking',
  'Marketplace checkout',
  'Purchase completion',
];

const EventPipeline = () => {
  return (
    <div className="border border-white/10 bg-black/40 p-4 font-mono text-xs text-white/70">
      <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Event Tracking Pipeline</p>
      <p className="text-white/50">Each event logs timestamp, platform, campaign, ad/creative IDs, keyword/interest, device, geo, session ID, and intent path.</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
        {events.map((event) => (
          <div key={event} className="border border-white/10 bg-black/30 px-3 py-2 text-center text-white">
            {event}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPipeline;
