import Sidebar from "../shared/components/Sidebar";
import Navbar from "../shared/components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-6 bg-[var(--bg)] flex-1 overflow-auto">
          {children}
        </main>

      </div>
    </div>
  );
}
