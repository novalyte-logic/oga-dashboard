'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, Radar } from 'lucide-react';

const modules = [
  { label: '1. GOD’S EYE OVERVIEW', href: '/' },
  { label: '2. PATIENT INTELLIGENCE', href: '/patient-intelligence' },
  { label: '3. CLINIC PERFORMANCE', href: '/clinic-performance' },
  { label: '4. MARKETPLACE INFRASTRUCTURE', href: '/marketplace-infrastructure' },
  { label: '5. VENDOR SUPPLY GRID', href: '/vendor-supply-grid' },
  { label: '6. AI TRIAGE ENGINE', href: '/ai-triage-engine' },
  { label: '7. COMPLIANCE & SECURITY', href: '/compliance-security' },
  { label: '8. REVENUE & FORECASTING', href: '/revenue-forecasting' },
  { label: '9. SYSTEM LOGS', href: '/system-logs' },
  { label: '10. CONTROL PANEL', href: '/control-panel' },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-30 w-72 border-r border-white/10 bg-[#070707]">
      <div className="border-b border-white/10 px-6 py-6">
        <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
          <Shield size={16} className="text-teal" />
          Novalyte // Command
        </div>
        <div className="flex items-center justify-between text-[11px] font-mono text-white/60">
          <span>ID: 0x92AF:CTRL</span>
          <Radar size={16} className="text-amber" />
        </div>
      </div>
      <nav className="flex h-[calc(100%-112px)] flex-col overflow-y-auto px-4 py-6">
        <span className="mb-4 text-[11px] uppercase tracking-[0.3em] text-white/40">
          Modules
        </span>
        <ul className="space-y-2">
          {modules.map((module) => {
            const isActive = pathname === module.href;
            return (
              <li key={module.href}>
                <Link
                  href={module.href}
                  data-active={isActive}
                  className="group block border border-white/10 bg-black/30 px-3 py-3 text-[11px] uppercase tracking-wide text-white/60 transition-none data-[active=true]:border-teal data-[active=true]:text-white data-[active=true]:bg-white/5"
                >
                  {module.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
