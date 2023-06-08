import { ClerkProvider } from '@clerk/nextjs';
import '../../styles/global.css'
import GlassPane from "@/components/GlassPane";

export default function AuthRootLayout({children}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane
          className="w-full h-full flex items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
    </ClerkProvider>
  )
}