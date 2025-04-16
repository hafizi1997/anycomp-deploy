"use client";
import { useState } from "react";
import { useDropdownStore } from "@/store/dropdownStore";

type SearchBarProps = {
  onSearch: (filters: { companyType: string }) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [companyType, setCompanyType] = useState("");
  const [region, setRegion] = useState("");
  const [dateOfCompletion, setDateOfCompletion] = useState("");
  const { activeDropdown, toggleDropdown } = useDropdownStore();

  const handleSearch = () => {
    onSearch({ companyType });
  };

  return (
    <div className="mt-4 bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
      <div className="flex flex-col gap-2 md:gap-0 md:flex-row items-stretch">
        {/* Company Type */}
        <div className="flex-1 px-4 py-4 border-b md:border-b-0 md:border-r border-gray-200">
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
              className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Company Type"
            />
          )}
        </div>

        {/* Region */}
        <div className="flex-1 px-4 py-4 border-b md:border-b-0 md:border-r border-gray-200">
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
              className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Region"
            />
          )}
        </div>

        {/* Date of Completion */}
        <div className="flex-1 px-4 py-4 border-b md:border-b-0 border-gray-200">
          {activeDropdown !== "date" ? (
            <>
              <div className="text-sm text-gray-500">Date of Completion</div>
              <div
                className="font-medium cursor-pointer"
                onClick={() => toggleDropdown("date")}
              >
                {dateOfCompletion || "Within 1 Week"}
              </div>
            </>
          ) : (
            <input
              type="text"
              value={dateOfCompletion}
              onChange={(e) => setDateOfCompletion(e.target.value)}
              className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Date of Completion"
            />
          )}
        </div>
      </div>

      <div className="px-4 py-4 border-t border-gray-200 flex justify-end">
        <button
          onClick={handleSearch}
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
