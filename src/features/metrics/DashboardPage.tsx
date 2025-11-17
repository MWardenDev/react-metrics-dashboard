import { ActivityFeedCard } from "./ActivityFeedCard"

export function DashboardPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <div className="rounded-xl bg-slate-900 border border-slate-800 p-4">
        <h2 className="text-sm font-semibold mb-2">GitHub Stars</h2>
        <p className="text-3xl font-bold">–</p>
        <p className="text-xs text-slate-500 mt-2">
          Planned: aggregate stars from selected repositories.
        </p>
      </div>

      <div className="rounded-xl bg-slate-900 border border-slate-800 p-4">
        <h2 className="text-sm font-semibold mb-2">Repo Count</h2>
        <p className="text-3xl font-bold">–</p>
        <p className="text-xs text-slate-500 mt-2">
          Planned: count public repositories on GitHub.
        </p>
      </div>

      <div className="rounded-xl bg-slate-900 border border-slate-800 p-4">
        <h2 className="text-sm font-semibold mb-2">Follower Count</h2>
        <p className="text-3xl font-bold">–</p>
        <p className="text-xs text-slate-500 mt-2">
          Planned: display GitHub follower count.
        </p>
      </div>

      <ActivityFeedCard />
    </div>
  )
}
