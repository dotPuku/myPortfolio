import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import PageTransition from "../components/PageTransition.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Puskar Mondal - Portfolio",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen py-6 px-4 md:py-10 md:px-8 max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Desktop Sidebar - hidden on mobile */}
          <div className="hidden md:block shrink-0">
            <Sidebar />
          </div>

          {/* Main Content Area */}
          <main className="flex-1 flex flex-col min-w-0">
            <Navbar />
            <div className="mt-6 flex-1">
              <PageTransition>
                {children}
              </PageTransition>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
