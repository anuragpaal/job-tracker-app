import Charts from "../components/Charts";

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      <div className="grid grid-cols-4 gap-6">
        <div className="bg-[var(--card)] text-[var(--text)] shadow rounded">Total Jobs: 12</div>
        <div className="bg-[var(--card)] text-[var(--text)] shadow rounded">Candidates: 34</div>
        <div className="bg-[var(--card)] text-[var(--text)] shadow rounded">Interviews: 5</div>
        <div className="bg-[var(--card)] text-[var(--text)] shadow rounded">Hired: 2</div>
      </div>

      <div className="mt-10">
        <Charts />
      </div>
    </div>
  );
}
