"use client";

import { navigation } from "@/data/navigation";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink() {
  const pathname = usePathname();

  return (
    <>
      <div className="flex flex-col gap-2 mt-8">
        {navigation.map((item) => {
          return (
            <Link
              key={item.id}
              href={item.url}
              className={
                "flex gap-3 w-full items-center px-5 rounded-xl py-2 hover:font-medium " +
                (pathname.startsWith(item.url)
                  ? "bg-slate-200 font-medium"
                  : "hover:bg-slate-100")
              }
            >
              <Image src={item.icon} width={20} height={20} alt={item.title} />
              <p className="line-clamp-1 text-default">{item.title}</p>
            </Link>
          );
        })}

        <div className="mt-5">
          <Link
            href="#"
            className="flex gap-3 w-full items-center px-5 rounded-xl py-2 bg-slate-200 hover:font-medium"
          >
            <Image
              src="/icon/setting.svg"
              width={20}
              height={20}
              alt="Settings"
            />
            <p className="line-clamp-1 text-default">Settings</p>
          </Link>
        </div>
      </div>
    </>
  );
}
