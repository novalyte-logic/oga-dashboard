'use client';

const leaderboard = [
  { creative: 'TikTok // TRT Lab', roas: '6.1x', fatigue: 'GREEN' },
  { creative: 'Google Search // GLP-1', roas: '5.9x', fatigue: 'GREEN' },
  { creative: 'Meta Reels // Clinic Walk', roas: '3.2x', fatigue: 'RED' },
];

const warRoomData = [
  { label: 'Thumb-stop collapse', value: '41%' },
  { label: 'Engagement decay', value: '-23%' },
  { label: 'Creative replacement queue', value: '6 ready assets' },
];

const CreativeWarRoom = () => (
  <div className="space-y-4 text-sm text-white/80">
    <div className="border border-white/10 bg-black/40 p-3">
      <p className="font-mono text-xs text-white/50">Creative Leaderboard</p>
      <div className="mt-2 space-y-2 font-mono text-xs">
        {leaderboard.map((row) => (
          <div key={row.creative} className="border border-white/10 bg-black/30 px-3 py-2 flex justify-between">
            <span>{row.creative}</span>
            <span className="text-teal">{row.roas} · {row.fatigue}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="grid gap-3 md:grid-cols-3 font-mono text-xs text-white/70">
      {warRoomData.map((item) => (
        <div key={item.label} className="border border-white/10 bg-black/40 px-3 py-2">
          <p className="text-white/50">{item.label}</p>
          <p>{item.value}</p>
        </div>
      ))}
    </div>
  </div>
);

export default CreativeWarRoom;
