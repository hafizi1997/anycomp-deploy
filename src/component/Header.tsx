"use client";
import { useDropdownStore } from "@/store/dropdownStore";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const { activeDropdown, toggleDropdown } = useDropdownStore();
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                src="./image.png"
                alt="AnyComp Logo"
                className="h-10 w-auto"
              />
            </div>
            <nav className="ml-5 flex space-x-8">
              <div className="relative group">
                <button
                  className="flex items-center text-gray-800 hover:text-blue-800 font-medium"
                  onClick={() => toggleDropdown("manage")}
                >
                  Manage company
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <AnimatePresence>
                  {activeDropdown === "manage" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 bg-white border rounded shadow z-10"
                    >
                      <a
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        href="#"
                      >
                        View Companies
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative group">
                <button
                  className="flex items-center text-gray-800 hover:text-blue-800 font-medium"
                  onClick={() => toggleDropdown("secretary")}
                >
                  Company Secretary
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <AnimatePresence>
                  {activeDropdown === "secretary" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 bg-white border rounded shadow z-10"
                    >
                      <a
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        href="#"
                      >
                        View Employees
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="relative group">
                <button
                  className="flex items-center text-gray-800 hover:text-blue-800 font-medium"
                  onClick={() => toggleDropdown("incorporate")}
                >
                  Incorporate Company
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <AnimatePresence>
                  {activeDropdown === "incorporate" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 bg-white border rounded shadow z-10"
                    >
                      <a
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        href="#"
                      >
                        Suruhanjaya Syarikat Malaysia
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="relative group">
                <button
                  className="flex items-center text-gray-800 hover:text-blue-800 font-medium"
                  onClick={() => toggleDropdown("sign")}
                >
                  Sign Documents
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <AnimatePresence>
                  {activeDropdown === "sign" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 bg-white border rounded shadow z-10"
                    >
                      <a
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        href="#"
                      >
                        View Documents
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>
          </div>
          <div className="flex items-center">
            <div className="flex items-center border border-gray-300 rounded-full px-3 py-1">
              <button className="p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <button className="p-1 ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <button className="p-1 ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
              <div className="ml-2 flex items-center">
                <img
                  className="h-8 w-8 rounded-full"
                  src="./myimage6.jpeg"
                  alt="User"
                />
                <span className="px-2">Hafizi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
