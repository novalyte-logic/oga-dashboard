'use client';

const platformLogic = [
  {
    platform: 'TikTok',
    items: [
      'Hook death detected on Creative #TT-118',
      'Watch-time collapsed to 2.1s',
      'Rewatch percentage -9% week over week',
    ],
  },
  {
    platform: 'Instagram',
    items: [
      'Reels saturation at 82% display share',
      'Frequency poisoning: 3.4 average frequency',
      'Saves vs impressions down 14%',
    ],
  },
  {
    platform: 'Google',
    items: [
      'Ad blindness on keyword “men hormone therapy”',
      'Search intent mismatch flagged on Display retargeting',
      'Quality score erosion: -0.9 points',
    ],
  },
];

const PlatformFatigueLogic = () => (
  <div className="grid gap-4 md:grid-cols-3 font-mono text-xs text-white/80">
    {platformLogic.map((platform) => (
      <div key={platform.platform} className="border border-white/10 bg-black/40 p-3">
        <p className="text-white/50">{platform.platform}</p>
        <ul className="mt-2 space-y-1">
          {platform.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default PlatformFatigueLogic;
