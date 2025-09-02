import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { DashboardContent } from "@/components/DashboardContent";
import { useState } from "react";

export default function Index() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState<number>(1);
  const [customAvatarUrl, setCustomAvatarUrl] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        className={`z-50 lg:z-auto transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Main Content */}
      <div
        className={`flex h-screen flex-col transition-all duration-300 ${
          sidebarCollapsed ? "lg:ml-[80px]" : "lg:ml-[274px]"
        }`}
      >
        {/* Header */}
        <div className="py-4 lg:py-[30px] px-4 lg:px-0">
          <Header
            onMenuClick={() => setSidebarOpen(!sidebarOpen)}
            onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
            selectedAvatar={selectedAvatar}
            customAvatarUrl={customAvatarUrl}
          />
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 px-4 lg:pr-8 lg:px-0">
          <DashboardContent
            selectedAvatar={selectedAvatar}
            onAvatarChange={setSelectedAvatar}
            customAvatarUrl={customAvatarUrl}
            onCustomAvatarChange={setCustomAvatarUrl}
          />
        </div>
      </div>
    </div>
  );
}
