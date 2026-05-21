import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MeetingOptimizer – Reduce Zoom Fatigue",
  description: "Analyzes team calendars to suggest optimal meeting lengths, breaks, and no-meeting blocks. Smart scheduling for team leads and HR managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a9036ac5-41a9-47fe-8308-661f93f02711"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
