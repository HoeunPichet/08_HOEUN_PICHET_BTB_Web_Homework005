"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Breadcrumb() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const title = searchParams.get("title");
  return (
    <>
      <div className="flex w-full items-center h-24 gap-5 text-default text-lg font-semibold">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/icon/home-bread.svg"
            width={24}
            height={24}
            alt="Home Icon"
          />
          <p>Home</p>
        </Link>
        <Image src="/icon/arrow.svg" width={10} height={10} alt="Arrow Icon" />
        <Link
          href={type != "cartoon" ? "/book-categories" : "/old-school-cartoons"}
          className="flex items-center gap-3"
        >
          <Image
            src={
              type != "cartoon"
                ? "/icon/book-bread.svg"
                : "/icon/emoji-bread.svg"
            }
            width={24}
            height={24}
            alt="Category Icon"
          />
          <p>{type != "cartoon" ? "Book Categories" : "Old School Cartoons"}</p>
        </Link>
        <Image src="/icon/arrow.svg" width={10} height={10} alt="Arrow Icon" />
        <Link href="#" className="flex items-center gap-3">
          <Image
            src={
              type != "cartoon"
                ? "/icon/book-open.svg"
                : "/icon/play-circle.svg"
            }
            width={24}
            height={24}
            alt="Title Icon"
          />
          <p className="text-danger">{title}</p>
        </Link>
      </div>
    </>
  );
}
