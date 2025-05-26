import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "./components/sidebar"
import { Header } from "./components/header/header"
console.log("Header:", Header); // <-- Add this


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Data Analytics Dashboard",
  description: "",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="flex h-screen bg-gray-50">
          <Sidebar /> */}
          <div className="w-full" style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)" }}>
           <Header  />
           <div className="flex h-[#90%] bg-gray-50">
           <Sidebar />
           <main className="flex-1 overflow-auto">{children}</main>
           </div>
          </div>
        {/* </div> */}
      </body>
    </html>
  )
}
