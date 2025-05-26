"use client"

import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Spin } from "antd"
import Image from "next/image"

import { VisualizeIcon, VisualizeIconNotActive } from "./icons/visualize-icon"
import { IngestIcon, IngestIconNotActive } from "./icons/ingest-icon"
import { OrchestrateIcon, OrchestrateIconNotActive } from "./icons/orchestrate-icon"
import { TransformIcon, TransformIconNotActive } from "./icons/transform-icon"
import { ObserveIcon, ObserveIconNotActive } from "./icons/observe-icon"
import { SettingsIcon, SettingsIconNotActive } from "./icons/settings-icon"
import profileJpg from './profile.jpg'

const Sidebar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [targetPath, setTargetPath] = useState("")

  const menuItems = [
    { 
      activeIcon: <VisualizeIcon />, 
      inactiveIcon: <VisualizeIconNotActive />, 
      label: "Visualize", 
      href: "/visualize" 
    },
    { 
      activeIcon: <IngestIcon />, 
      inactiveIcon: <IngestIconNotActive />, 
      label: "Ingest", 
      href: "/ingest" 
    },
    { 
      activeIcon: <OrchestrateIcon />, 
      inactiveIcon: <OrchestrateIconNotActive />, 
      label: "Orchestrate", 
      href: "/orchestrate" 
    },
    { 
      activeIcon: <TransformIcon />, 
      inactiveIcon: <TransformIconNotActive />, 
      label: "Transform", 
      href: "/transform" 
    },
    { 
      activeIcon: <ObserveIcon />, 
      inactiveIcon: <ObserveIconNotActive />, 
      label: "Observe", 
      href: "/observe" 
    },
  ]

  const isActive = (href: string) => pathname === href

  // Handle navigation with loading state
  const handleNavigation = (href: string, e: React.MouseEvent) => {
    e.preventDefault()
    if (pathname !== href) {
      setLoading(true)
      setTargetPath(href)
      router.push(href)
    }
  }

  // Reset loading when pathname changes
  useEffect(() => {
    setLoading(false)
    setTargetPath("")
  }, [pathname])

  return (
    <>
      {/* Loading Overlay */}
      {loading && (
  <div className="fixed inset-0 z-0 backdrop-blur-sm flex items-center justify-center">
    <div className=" flex flex-col items-center gap-4 rounded-md">
      <Spin size="large" />
      <p className="text-gray-600 font-medium">Loading...</p>
    </div>
  </div>
      )}

<div className="w-60 h-screen bg-white border-r border-gray-200 flex flex-col justify-between">
        {/* Menu Items */}
        <div className="flex-1 py-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={(e) => handleNavigation(item.href, e)}
              className={`px-4 py-3 flex items-center gap-3 transition-colors ${
                isActive(item.href) 
                  ? "bg-[#5F5084] text-white" 
                  : "text-gray-700 hover:bg-gray-50"
              } ${loading && targetPath === item.href ? "opacity-50" : ""}`}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                {isActive(item.href) ? item.activeIcon : item.inactiveIcon}
              </div>
              <span className="font-medium text-sm">
                {item.label}
              </span>
              {loading && targetPath === item.href && (
                <Spin size="small" className="ml-auto" />
              )}
            </Link>
          ))}

          {/* Settings with dropdown */}
          <Link
            href="/settings"
            onClick={(e) => handleNavigation("/settings", e)}
            className={`px-4 py-3 flex items-center gap-3 transition-colors ${
              isActive("/settings") 
                ? "bg-[#5F5084] text-white" 
                : "text-gray-700 hover:bg-gray-50"
            } ${loading && targetPath === "/settings" ? "opacity-50" : ""}`}
          >
            <div className="w-5 h-5 flex items-center justify-center">
              {isActive("/settings") ? <SettingsIcon /> : <SettingsIconNotActive />}
            </div>
            <span className="font-medium text-sm flex-1">
              Settings
            </span>
            {loading && targetPath === "/settings" ? (
              <Spin size="small" />
            ) : (
              <i className="pi pi-chevron-down w-4 h-4" />
            )}
          </Link>
        </div>

        {/* User Profile */}
        <Link
          href="/profile"
          onClick={(e) => handleNavigation("/profile", e)}
          className={`border-t border-gray-200 px-4 py-3 flex items-center gap-3 transition-colors ${
            isActive("/profile") 
              ? "bg-[#5F5084] text-white" 
              : "text-gray-700 hover:bg-gray-50"
          } ${loading && targetPath === "/profile" ? "opacity-50" : ""}`}
        >
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300">
  <Image 
    src={profileJpg} 
    alt="Gaurav Sharma" 
    width={32} 
    height={32} 
    className="object-cover w-full h-full" 
  />
</div>
          </div>
          <span className="font-medium text-sm flex-1">
            Gaurav Sharma
          </span>
          {loading && targetPath === "/profile" ? (
            <Spin size="small" />
          ) : (
            <i className="pi pi-chevron-right w-4 h-4" />
          )}
        </Link>
      </div>
    </>
  )
}

export default Sidebar