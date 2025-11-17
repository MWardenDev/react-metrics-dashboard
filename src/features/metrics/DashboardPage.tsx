export function DashboardPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <div className="rounded-xl bg-slate-900 border border-slate-800 p-4">
        <h2 className="text-sm font-semibold mb-2">GitHub Stars</h2>
        <p className="text-3xl font-bold">–</p>
      </div>

      <div className="rounded-xl bg-slate-900 border border-slate-800 p-4">
        <h2 className="text-sm font-semibold mb-2">Repo Count</h2>
        <p className="text-3xl font-bold">–</p>
      </div>

      <div className="rounded-xl bg-slate-900 border border-slate-800 p-4">
        <h2 className="text-sm font-semibold mb-2">Follower Count</h2>
        <p className="text-3xl font-bold">–</p>
      </div>

      <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 md:col-span-2 xl:col-span-3">
        <h2 className="text-sm font-semibold mb-2">Recent Activity</h2>
        <p className="text-slate-400 text-sm">
          API integration planned for version 1.1.
        </p>
      </div>
    </div>
  )
}
