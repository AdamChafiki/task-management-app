import TopDashboard from "@/components/dashboard/top-dashboard";
import SideMenu from "@/components/sidebar/side-menu";

export default function DashbaordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex">
      <SideMenu />
      <main className="w-full">
        <TopDashboard />
        {children}
      </main>
    </div>
  );
}
