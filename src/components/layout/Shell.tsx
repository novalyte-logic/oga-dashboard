import Sidebar from './Sidebar';
import TopHud from './TopHud';

interface ShellProps {
  children: React.ReactNode;
}

const Shell = ({ children }: ShellProps) => {
  return (
    <div className="flex min-h-screen bg-obsidian text-white">
      <Sidebar />
      <div className="ml-72 flex min-h-screen flex-1 flex-col border-l border-white/10 bg-[radial-gradient(circle_at_top,#0f0f0f, #050505_60%)]">
        <TopHud />
        <main className="flex-1 overflow-x-hidden overflow-y-auto px-8 pb-10 pt-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Shell;
