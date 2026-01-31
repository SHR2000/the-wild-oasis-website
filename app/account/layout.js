import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="flex h-[100dvh] flex-col gap-4 min-768:grid-cols-[10rem_1fr] min-1024:grid min-1024:grid-cols-[12rem_1fr] min-1024:gap-12 min-1280:grid-cols-[16rem_1fr]">
      <SideNavigation />
      <div className="h-full py-1">{children}</div>
    </div>
  );
}
