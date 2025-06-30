import DrawerAppBar from "@/components/Sidebar";
import Sidebar from "@/components/Sidebar";
import AnchorTemporaryDrawer from "@/components/Sidepanel";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
export default function Layout({ children }) {
  return (
    <div>
      <DrawerAppBar />

      {children}
    </div>
  );
}
