import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "MediConnect | Book Doctor Appointments Online",
  description:
    "Easily book doctor appointments online with MediConnect. Connect with trusted healthcare professionals anytime, anywhere.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
    }}>
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Header */}
          <Header/>
          {/* Main Content */}
          <main className="min-h-screen">{children}</main>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-10 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Column 1: Logo and description */}
              <div>
                <h2 className="text-2xl font-bold text-blue-400">MediConnect</h2>
                <p className="mt-2 text-gray-400 text-sm">
                  Your trusted partner in online doctor appointments. Book easily,
                  stay healthy.
                </p>
              </div>

              {/* Column 2: Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li><a href="#" className="hover:text-white">Home</a></li>
                  <li><a href="#" className="hover:text-white">Doctors</a></li>
                  <li><a href="#" className="hover:text-white">Appointments</a></li>
                  <li><a href="#" className="hover:text-white">Contact</a></li>
                </ul>
              </div>

              {/* Column 3: Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                <p className="text-sm text-gray-300">Email: support@mediconnect.com</p>
                <p className="text-sm text-gray-300">Phone: +91 98765 43210</p>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
              &copy; {new Date().getFullYear()} MediConnect. All rights reserved.
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
