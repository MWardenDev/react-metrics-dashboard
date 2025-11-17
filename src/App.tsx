import { AppShell } from "./components/layout/AppShell"
import { DashboardPage } from "./features/metrics/DashboardPage"

function App() {
  return (
    <AppShell>
      <DashboardPage />
    </AppShell>
  )
}

export default App
