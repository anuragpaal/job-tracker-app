import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      className="w-64 bg-[var(--card)] text-[var(--text)] shadow-md p-5"
    >
      <h2 className="text-xl font-bold mb-6">Job Tracker</h2>

      <nav className="flex flex-col gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/candidates">Candidates</Link>
        <Link to="/applications">Applications</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </div>
  );
}
