* {
  box-sizing: border-box;
}

:root {
  --bg: #f3f6fb;
  --panel: rgba(255, 255, 255, 0.82);
  --panel-strong: #ffffff;
  --line: #eaeef7;
  --text: #101828;
  --muted: #667085;
  --blue: #4169ff;
  --blue-soft: #eef3ff;
  --green: #17b26a;
  --green-soft: #eafaf1;
  --orange: #f59e0b;
  --orange-soft: #fff4dd;
  --purple: #7c3aed;
  --purple-soft: #f2ebff;
  --shadow: 0 18px 45px rgba(17, 24, 39, 0.08);
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: linear-gradient(145deg, #eff4ff, #f7f9fc 35%, #eef6fd);
  color: var(--text);
}

button {
  font: inherit;
}

.app-shell {
  width: min(1480px, calc(100% - 40px));
  margin: 28px auto;
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 22px;
}

.sidebar,
.panel,
.stat-card {
  background: var(--panel);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: var(--shadow);
}

.sidebar {
  border-radius: 24px;
  padding: 24px 18px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 10px 18px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, #2349ff, #73a2ff);
  color: white;
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size: 1.2rem;
}

.brand-title {
  font-size: 1.05rem;
  font-weight: 700;
}

.brand-subtitle {
  color: var(--muted);
  font-size: 0.72rem;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
}

.nav-item {
  border: none;
  border-radius: 12px;
  text-align: left;
  padding: 12px 14px;
  background: transparent;
  color: var(--muted);
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;
}

.nav-item.active,
.nav-item:hover {
  background: var(--blue-soft);
  color: var(--blue);
}

.sidebar-card {
  margin-top: 26px;
  background: linear-gradient(180deg, #f6f9ff, #edf3ff);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 18px 16px;
}

.card-label,
.eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}

.progress-title {
  font-size: 1.35rem;
  font-weight: 800;
  margin: 12px 0 14px;
}

.progress-bar {
  width: 100%;
  height: 10px;
  background: #dfe7ff;
  border-radius: 999px;
  overflow: hidden;
}

.progress-bar span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #4169ff, #7cb3ff);
}

.mini-meta {
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: var(--muted);
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.topbar,
.panel-header,
.stat-head,
.task-list li,
.mini-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.topbar {
  background: rgba(255, 255, 255, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 22px;
  padding: 20px 22px;
  box-shadow: var(--shadow);
}

.topbar h1,
.panel-header h2 {
  margin: 8px 0 0;
}

.topbar-actions {
  display: flex;
  gap: 10px;
}

.primary-btn,
.ghost-btn {
  border: none;
  border-radius: 12px;
  padding: 10px 16px;
  font-weight: 600;
  cursor: pointer;
}

.primary-btn {
  background: linear-gradient(135deg, #2f5bff, #5e86ff);
  color: white;
}

.ghost-btn {
  background: white;
  border: 1px solid var(--line);
  color: var(--text);
}

.small {
  padding: 8px 12px;
  font-size: 0.8rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  gap: 18px;
}

.stat-card {
  border-radius: 20px;
  padding: 18px 18px 16px;
}

.accent-blue { background: linear-gradient(180deg, #f4f7ff, #fff); }
.accent-green { background: linear-gradient(180deg, #f2fff7, #fff); }
.accent-orange { background: linear-gradient(180deg, #fffaf0, #fff); }
.accent-purple { background: linear-gradient(180deg, #f5f1ff, #fff); }

.stat-head {
  color: var(--muted);
  font-size: 0.88rem;
}

.chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 5px 8px;
  font-size: 0.78rem;
  font-weight: 700;
}

.chip.positive {
  background: var(--green-soft);
  color: var(--green);
}

.chip.negative {
  background: #fff1f2;
  color: #ef4444;
}

.stat-value {
  margin-top: 18px;
  font-size: clamp(1.8rem, 2vw, 2.3rem);
  font-weight: 800;
  letter-spacing: -0.07em;
}

.stat-foot {
  margin-top: 8px;
  font-size: 0.82rem;
  color: var(--muted);
}

.content-grid,
.lower-grid {
  display: grid;
  grid-template-columns: 1.6fr 0.9fr;
  gap: 20px;
}

.panel {
  border-radius: 22px;
  padding: 18px 20px 20px;
}

.chart-panel {
  min-height: 270px;
}

.bars {
  margin-top: 28px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 12px;
  height: 220px;
  padding: 12px 6px 4px;
}

.bar-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 12px;
  min-height: 100%;
}

.bar {
  width: 100%;
  max-width: 44px;
  display: block;
  border-radius: 12px 12px 8px 8px;
  background: linear-gradient(180deg, #9bb5ff, #4169ff);
  box-shadow: 0 10px 18px rgba(65, 105, 255, 0.18);
}

.bar-group label {
  color: var(--muted);
  font-size: 0.74rem;
}

.ring-wrap {
  display: flex;
  justify-content: center;
  margin-top: 22px;
}

.ring {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: conic-gradient(#4169ff 0 68%, #e8ecf7 68% 100%);
  display: grid;
  place-items: center;
}

.ring-inner {
  width: 112px;
  height: 112px;
  border-radius: 50%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1px var(--line);
}

.ring-inner strong {
  font-size: 1.8rem;
}

.ring-inner span {
  color: var(--muted);
  font-size: 0.8rem;
}

.mini-list {
  list-style: none;
  padding: 0;
  margin: 22px 0 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.mini-list li {
  padding: 10px 0;
  border-top: 1px solid var(--line);
}

.mini-list span,
.mini-list strong {
  font-size: 0.92rem;
}

.task-list {
  list-style: none;
  padding: 0;
  margin: 20px 0 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.task-list li {
  gap: 12px;
  padding: 14px 12px;
  background: #f8faff;
  border: 1px solid var(--line);
  border-radius: 14px;
}

.task-list div {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 3px;
}

.task-list small {
  color: var(--muted);
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.dot.green { background: var(--green); }
.dot.orange { background: var(--orange); }
.dot.blue { background: var(--blue); }

.pill {
  display: inline-flex;
  padding: 7px 10px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  background: var(--green-soft);
  color: var(--green);
}

.pill.neutral {
  background: var(--orange-soft);
  color: var(--orange);
}

.pill.info {
  background: var(--blue-soft);
  color: var(--blue);
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 18px;
}

th, td {
  padding: 12px 10px;
  border-bottom: 1px solid var(--line);
  text-align: left;
  font-size: 0.9rem;
}

th {
  color: var(--muted);
  font-weight: 600;
}

.up {
  color: var(--green);
  font-weight: 700;
}

@media (max-width: 1060px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, minmax(180px, 1fr));
  }

  .content-grid,
  .lower-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .app-shell {
    width: min(100% - 18px, 1480px);
    margin: 14px auto;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .topbar-actions {
    width: 100%;
  }

  .topbar-actions button {
    flex: 1;
  }
}

