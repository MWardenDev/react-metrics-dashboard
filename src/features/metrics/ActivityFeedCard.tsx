type ActivityType = "commit" | "release" | "issue" | "other"

interface ActivityItem {
  id: string
  type: ActivityType
  title: string
  timeAgo: string
  description?: string
}

const mockActivity: ActivityItem[] = [
  {
    id: "a1",
    type: "commit",
    title: "Updated React Kanban Board to v2.0.0",
    timeAgo: "2 hours ago",
    description: "Added drag-and-drop support using @dnd-kit/core.",
  },
  {
    id: "a2",
    type: "release",
    title: "Published v1.0.0 of React Metrics Dashboard",
    timeAgo: "5 hours ago",
    description: "Initial layout with sidebar, topbar, and metric cards.",
  },
  {
    id: "a3",
    type: "issue",
    title: "Planned: GitHub metrics integration",
    timeAgo: "1 day ago",
    description: "Track public repos, stars, and followers.",
  },
  {
    id: "a4",
    type: "other",
    title: "Roadmap: Activity feed backed by API",
    timeAgo: "2 days ago",
  },
]

function typeLabel(type: ActivityType): string {
  switch (type) {
    case "commit":
      return "Commit"
    case "release":
      return "Release"
    case "issue":
      return "Planned"
    default:
      return "Activity"
  }
}

export function ActivityFeedCard() {
  return (
    <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 md:col-span-2 xl:col-span-3">
      <h2 className="text-sm font-semibold mb-2">Recent Activity</h2>
      <p className="text-xs text-slate-500 mb-3">
        This feed is currently backed by mock data and represents the kind of
        events that will be shown once API integration is added.
      </p>
      <ul className="space-y-2 text-sm">
        {mockActivity.map((item) => (
          <li
            key={item.id}
            className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 rounded-lg border border-slate-800/70 bg-slate-900/60 px-3 py-2"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-slate-700 px-2 py-0.5 text-[11px] uppercase tracking-wide text-slate-300">
                  {typeLabel(item.type)}
                </span>
                <span className="text-xs text-slate-500">{item.timeAgo}</span>
              </div>
              <p className="mt-1 font-medium text-slate-100">{item.title}</p>
              {item.description && (
                <p className="text-xs text-slate-400 mt-0.5">
                  {item.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
