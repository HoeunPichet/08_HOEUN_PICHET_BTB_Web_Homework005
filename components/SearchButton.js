import Image from "next/image";

export default function SearchButton() {
  return (
    <form className="relative w-full">
      {/* search button */}
      <button className="cursor-pointer absolute top-1/2 left-5 -translate-y-1/2">
        <Image src="/icon/search.svg" width={24} height={24} alt="Search" />
      </button>

      {/* search input */}
      <input
        type="text"
        placeholder="Search anything you want to"
        className="w-full bg-white py-3 pl-16 pr-5 rounded-2xl h-12 border-none focus:border-none focus:ring-0 focus:outline-primary"
      />
    </form>
  );
}
