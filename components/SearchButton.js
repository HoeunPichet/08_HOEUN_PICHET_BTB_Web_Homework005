"use client";
import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchButton() {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [searchItem, setSearchItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target.querySelector("[name=search]").value;

    if (pathname === "/book-categories") {
      const category = params.get("category")
        ? "?category=" + params.get("category")
        : "";
      const searchParam = search
        ? params.get("category")
          ? "&search=" + search
          : "?search=" + search
        : search;

      // router.push(pathname + category + searchParam);
      window.location.href = pathname + category + searchParam;
    } else if (pathname === "/old-school-cartoons") {
      const genre = params.get("genre") ? "?genre=" + params.get("genre") : "";
      const searchParam = search
        ? genre
          ? "&search=" + search
          : "?search=" + search
        : search;

      // router.push(pathname + genre + searchParam);
      window.location.href = pathname + genre + searchParam;
    }
    setSearchItem(search);
  };

  useEffect(() => {
    router.refresh();
  }, [searchItem]);

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      {/* search button */}
      <button
        type="submit"
        className="cursor-pointer absolute top-1/2 left-5 -translate-y-1/2"
      >
        <Image src="/icon/search.svg" width={24} height={24} alt="Search" />
      </button>

      {/* search input */}
      <input
        defaultValue={params.get("search") ? params.get("search") : ""}
        type="text"
        name="search"
        placeholder="Search anything you want to"
        className="w-full bg-white py-3 pl-16 pr-5 rounded-2xl h-12 border-none focus:border-none focus:ring-0 focus:outline-primary"
      />
    </form>
  );
}
