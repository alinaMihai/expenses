import { ClerkProvider } from '@clerk/nextjs';
import '@/styles/global.css'
import { children } from '../../types/generic';

export default function DashboardRootLayout({ children }: children) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="h-screen w-screen rainbow-mesh p-6">
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}