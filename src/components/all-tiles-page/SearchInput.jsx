"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchInput = () => {
    const [searchInp, setSearchInp] = useState("");
    const router = useRouter();
    const handleSearch = (e) => {
        setSearchInp(e.target.value);
    }

    const handleSearchSubmit = (searchInp) => {
        const searchValue = searchInp.trim().toLowerCase();
        router.push(`/all-tiles?search=${searchValue}`);
    }

    return (
        <div>
            <div className="relative">
                <input onChange={handleSearch} type="text" placeholder="Search tiles" className="border border-gray-300 rounded-md px-4 py-2 w-full outline-none bg-(--color-porcelain)" />
                <button onClick={()=>handleSearchSubmit(searchInp)} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 absolute top-0 right-0 cursor-pointer">Search</button>
            </div>
        </div>
    );
};

export default SearchInput;