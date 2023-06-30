import { ClerkProvider } from '@clerk/nextjs';
import '@/styles/global.css'
import GlassPane from "@/components/GlassPane";
import Sidebar from '@/components/Sidebar';

export default function DashboardRootLayout({children}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane
          className="w-full h-full flex items-center">
          <Sidebar />
          {children}
        </GlassPane>
        <div id="modal"></div>
      </body>
    </html>
    </ClerkProvider>
  )
}