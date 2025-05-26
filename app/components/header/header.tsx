"use client"
import { useState } from "react"
import { usePathname } from "next/navigation"
// import { Input } from "antd"
// import { SearchOutlined, BellOutlined } from "@ant-design/icons"
import { LogoIcon,LogoIconText,Headerline } from "./header-icon"

export const Header = () => {
  const pathname = usePathname()
  const [selectedTheme, setSelectedTheme] = useState('Theme');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Define page configurations
  const pageConfigs = {
    "/visualize": {
      title: "Visualize",
      logo: "Drive-R",
    },
    "/ingest": {
      title: "Ingest",
      logo: "Drive-R",
    },
    "/orchestrate": {
      title: "Orchestrate",
      logo: "DalytQ",
    },
    "/transform": {
      title: "Transform",
      logo: "Drive-R",
    },
    "/observe": {
      title: "Observe",
      logo: "Drive-R",
    },
    "/settings": {
      title: "Settings",
      logo: "Drive-R",
    },
    "/profile": {
      title: "Profile",
      logo: "Drive-R",
    },
  }

  // Get current page config or default
  const currentConfig = pageConfigs[pathname as keyof typeof pageConfigs] || {
    title: "Dashboard",
    logo: "Drive-R",
  }
 

  const themeOptions = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
    { label: 'System', value: 'system' }
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 h-18 flex items-center px-6">
      {/* Left Section - Logo, Arrow, and Title */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <div className="ml-4">{/* Logo Icon */}<LogoIcon  /></div>
          <div>{/* Logo Text */}<LogoIconText/></div>
        </div>
        <div className="ml-10"><Headerline /></div>

        {/* Arrow and Title */}
        <div className="flex items-center gap-3 ml-4">
          <button className="text-gray-500 hover:text-gray-700">
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 11L1 6L6 1" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </button>
          <span className="font-medium text-gray-900 text-[24px]">{currentConfig.title}</span>
          </div>
      </div>

      {/* Right Section - Search, Theme, Notifications */}
      <div className="flex justify-end items-center gap-4 ml-230">
        {/* Search Input */}
        <div className="relative mr-10">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
          <svg
    width="24"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
      stroke="#444444"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-[300px] h-[45px] pl-10 pr-4 border border-gray-300 rounded-md text-md text-[#666666] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            style={{ fontFamily: 'Inter, sans-serif' }}
          />
        </div>

        {/* Theme Selector */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between w-[130px] h-[35px] px-3 text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              color: '#666666',
              borderRadius: '6px'
            }}
          >
            <span>{selectedTheme}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 6L8 11L3 6" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-[110px] bg-white border border-gray-300 rounded-md shadow-lg z-50">
              {themeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setSelectedTheme(option.label);
                    setIsDropdownOpen(false);
                  }}
                  className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 first:rounded-t-md last:rounded-b-md"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: '#666666'
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Notifications */}
        <div className="relative">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 16V7C3 5.4087 3.63214 3.88258 4.75736 2.75736C5.88258 1.63214 7.4087 1 9 1C10.5913 1 12.1174 1.63214 13.2426 2.75736C14.3679 3.88258 15 5.4087 15 7V16M3 16H15M3 16H1M15 16H17M8 19H10" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            
            {/* Notification Badge */}
            <div className="absolute -top-1 -right-1">
              <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="21" height="15" rx="6" fill="#5F5084"/>
              </svg>
              <span 
                className="absolute inset-0 flex items-center justify-center text-white text-xs font-medium"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                6
              </span>
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}


