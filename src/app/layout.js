import { Inter, JetBrains_Mono } from 'next/font/google';
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import DemoCredentials from '@/components/DemoCredentials';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Dashboard App",
  description: "Dashboard application with authentication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        <AuthProvider>
          {children}
          <DemoCredentials />
        </AuthProvider>
      </body>
    </html>
  );
}
