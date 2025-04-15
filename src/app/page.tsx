"use client";
import SearchBar from "../component/SearchBar";
import ServicesList from "../component/ServicesList";
import Header from "../component/Header";
import { useState } from "react";
export default function Home() {
  const [filters, setFilters] = useState({ companyType: "" });
  const handleSearch = (newFilters: { companyType: string }) => {
    setFilters(newFilters);
  };
  return (
    <div className="flex flex-col w-full min-h-screen bg-white font-[system-ui]">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <SearchBar onSearch={handleSearch} />
        <div className="mt-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Incorporate new company
          </h1>
          <p className="text-gray-600 mt-1">
            Over 350 Company Secretaries ready to assist you
          </p>
          <div className="flex justify-end items-center mt-6 mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <span className="mr-2 text-gray-700">Sort by: Ratings</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <button className="flex items-center text-gray-700">
                <span className="mr-1">Filter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <ServicesList filters={filters} />
        </div>
      </main>
    </div>
  );
}
