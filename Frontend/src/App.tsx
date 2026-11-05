const healthStats = [
  { label: 'Heart rate', value: '72 bpm', trend: '+4%' },
  { label: 'Sleep quality', value: '6.8/10', trend: '-1.1' },
  { label: 'Hydration', value: '84%', trend: '+6%' },
  { label: 'CO₂ scrubber', value: 'Normal', trend: 'Stable' },
];

const alerts = [
  { title: 'Solar flare watch', detail: 'Minor radiation spike detected in the outer shield array.', severity: 'High' },
  { title: 'Crew fatigue trend', detail: 'Sleep debt increased over the last three days.', severity: 'Medium' },
  { title: 'Thermal stability', detail: 'Habitat temperatures remain within safe operating range.', severity: 'Low' },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">Mission control</p>
            <h1 className="mt-2 text-4xl font-semibold text-white">AstroGuard</h1>
          </div>
          <div className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
            Status: Nominal
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-4">
          {healthStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg shadow-slate-950/40">
              <p className="text-sm text-slate-400">{stat.label}</p>
              <div className="mt-4 flex items-end justify-between">
                <span className="text-2xl font-semibold text-white">{stat.value}</span>
                <span className="text-sm text-cyan-300">{stat.trend}</span>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Crew wellbeing overview</h2>
              <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                Stable
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-950/70 p-4">
                <p className="text-sm text-slate-400">Mood index</p>
                <p className="mt-3 text-3xl font-semibold text-cyan-300">82%</p>
              </div>
              <div className="rounded-2xl bg-slate-950/70 p-4">
                <p className="text-sm text-slate-400">Stress load</p>
                <p className="mt-3 text-3xl font-semibold text-yellow-300">31%</p>
              </div>
              <div className="rounded-2xl bg-slate-950/70 p-4">
                <p className="text-sm text-slate-400">Recovery score</p>
                <p className="mt-3 text-3xl font-semibold text-emerald-300">7.6</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-950/80 p-4">
              <div className="mb-3 flex justify-between text-sm text-slate-400">
                <span>Vitals trend</span>
                <span>Last 24h</span>
              </div>
              <div className="flex h-36 items-end gap-2">
                {[35, 42, 50, 58, 66, 73, 80, 72, 64, 71, 82, 88].map((height, index) => (
                  <div key={index} className="flex-1 rounded-t-xl bg-gradient-to-t from-cyan-500 to-blue-500" style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <h2 className="text-xl font-semibold text-white">System alerts</h2>
            <div className="mt-5 space-y-4">
              {alerts.map((alert) => (
                <div key={alert.title} className="rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-white">{alert.title}</p>
                    <span
                      className={`rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                        alert.severity === 'High'
                          ? 'bg-red-500/15 text-red-300'
                          : alert.severity === 'Medium'
                            ? 'bg-yellow-500/15 text-yellow-300'
                            : 'bg-emerald-500/15 text-emerald-300'
                      }`}
                    >
                      {alert.severity}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{alert.detail}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

export default App;
