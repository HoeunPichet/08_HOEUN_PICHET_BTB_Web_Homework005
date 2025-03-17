import { navigation } from "@/data/modules";
import Image from "next/image";
import NavLink from "./NavLink";

export default function SideBar() {
  return (
    <>
      <aside className="grid grid-cols-1 h-screen sticky top-0 overflow-auto px-6 py-7 w-full max-w-sm content-start shadow-xl">
        <header className="flex flex-col items-center">
          <Image
            src="/images/profile.png"
            className="object-cover"
            width={150}
            height={150}
            alt="Profile"
          />
          <h3 className="text-lg text-default mt-3">Black Monster</h3>
          <p className="text-primary text-lg">blackmonster@gmail.com</p>
        </header>
        <NavLink />
      </aside>
    </>
  );
}
