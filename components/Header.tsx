'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {BellIcon,BellDotIcon} from "lucide-react"

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  return (
    <header className="bg-slate-700 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl  text-emerald-500"> H </h1>
        <h1 className="text-2xl "> O </h1>
        <h1 className="text-2xl "> U </h1>
        <h1 className="text-2xl "> R </h1>
        <h1 className="text-2xl "> S </h1>
        <nav className="flex-1 flex justify-center items-center space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <p className="underline underline-offset-4 decoration-emerald-500   ">Dashboard</p>
              </Link>
            </li>
            <li>
              <Link href="/project">
                <p className="hover:underline underline-offset-4 decoration-emerald-500">Project</p>
              </Link>
            </li>
            <li>
              <Link href="/teams">
                <p className="hover:underline underline-offset-4 decoration-emerald-500">Teams</p>
              </Link>
            </li>
            <li>
              <Link href="/clients">
                <p className="hover:underline underline-offset-4 decoration-emerald-500">Clients</p>
              </Link>
            </li>
            <li>
              <Link href="/time">
                <p className="hover:underline underline-offset-4 decoration-emerald-500">Time</p>
              </Link>
            </li>
            <li>
              <Link href="/reports">
                <p className="hover:underline">Reports</p>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setNotificationOpen(!notificationOpen)}
              className="focus:outline-none"
            >
              <span className="material-icons"><BellIcon/></span>
            </button>
            {notificationOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1">
                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Notification 1
                </p>
                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Notification 2
                </p>
                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Notification 3
                </p>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="focus:outline-none flex items-center"
            >

              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt="Profile"
                className="object-cover w-10 h-10 rounded-full"
                width={0}
                height={0}
              />
              Mario ⌵
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                <Link href="/profile">
                  <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile
                  </p>
                </Link>
                <Link href="/settings">
                  <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </p>
                </Link>
                <Link href="/logout">
                  <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Logout
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
} 