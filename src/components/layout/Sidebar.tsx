export function Sidebar() {
  return (
    <aside className="w-56 bg-slate-900 border-r border-slate-800 p-4">
      <h1 className="text-lg font-bold mb-6">Metrics Dashboard</h1>

      <nav className="flex flex-col gap-3 text-sm">
        <a className="text-slate-300 hover:text-white transition">Overview</a>
        <a className="text-slate-300 hover:text-white transition">
          Github Stats
        </a>
        <a className="text-slate-300 hover:text-white transition">
          System Health
        </a>
        <a className="text-slate-300 hover:text-white transition">
          Activity Feed
        </a>
      </nav>
    </aside>
  )
}
