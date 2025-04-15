"use client";
import { useState } from "react";
import { useDropdownStore } from "@/store/dropdownStore";

type SearchBarProps = {
  onSearch: (filters: {
    companyType: string;
  }) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [companyType, setCompanyType] = useState("");
  const [region, setRegion] = useState("");
  const [dateOfCompletion, setDateOfCompletion] = useState("");
  const { activeDropdown, toggleDropdown } = useDropdownStore();

  const handleSearch = () => {
    onSearch({ companyType});
  };

  return (
    <div className="mt-4 bg-white rounded-full shadow-md overflow-hidden border border-gray-200">
      <div className="flex flex-col md:flex-row items-stretch">
        {/* Company Type */}
        <div className="flex-1 px-6 py-4 border-b md:border-b-0 md:border-r border-gray-200">
          {activeDropdown !== "type" ? (
            <>
              <div className="text-sm text-gray-500">Company Type</div>
              <div
                className="font-medium cursor-pointer"
                onClick={() => toggleDropdown("type")}
              >
                {companyType || "Private Limited (SDN BHD)"}
              </div>
            </>
          ) : (
            <input
              type="text"
              value={companyType}
              onChange={(e) => setCompanyType(e.target.value)}
              className="mt-2 w-full px-3 py-2 border-0 rounded-md focus:outline-none"
              placeholder="Company Type"
            />
          )}
        </div>

        {/* Region */}
        <div className="flex-1 px-6 py-4 border-b md:border-b-0 md:border-r border-gray-200">
          {activeDropdown !== "region" ? (
            <>
              <div className="text-sm text-gray-500">Region</div>
              <div
                className="font-medium cursor-pointer"
                onClick={() => toggleDropdown("region")}
              >
                {region || "Peninsular Malaysia (Mainland)"}
              </div>
            </>
          ) : (
            <input
              type="text"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="mt-2 w-full px-3 py-2 border-0 rounded-md focus:outline-none"
              placeholder="Region"
            />
          )}
        </div>

        {/* Date of Completion */}
        <div className="flex-1 px-6 py-4 border-b md:border-b-0 border-gray-200">
          {activeDropdown !== "date" ? (
            <>
              <div className="text-sm text-gray-500">Date of Completion</div>
              <div
                className="font-medium cursor-pointer"
                onClick={() => toggleDropdown("date")}
              >
                {dateOfCompletion || "17th Feb (3 Days)"}
              </div>
            </>
          ) : (
            <input
              type="text"
              value={dateOfCompletion}
              onChange={(e) => setDateOfCompletion(e.target.value)}
              className="mt-2 w-full px-3 py-2 border-0 rounded-md focus:outline-none"
              placeholder="Date of Completion"
            />
          )}
        </div>

        {/* Search Button */}
        <div className="px-6 py-4">
          <button
            onClick={handleSearch}
            className="flex items-center justify-center py-3 px-6 bg-blue-800 hover:bg-blue-900 text-white font-medium rounded-full w-full md:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
