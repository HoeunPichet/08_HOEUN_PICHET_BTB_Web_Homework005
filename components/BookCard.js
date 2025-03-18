import Image from "next/image";
import Link from "next/link";

export default function BookCard({ ...props }) {
  return (
    <>
      <div className="flex gap-5 w-full bg-slate-200 px-7 py-5 rounded-2xl min-h-[10rem]">
        <div className="flex flex-col justify-end gap-5 relative">
          <div className="absolute bottom-14 left-0 w-full pr-2 group">
            <Image
              className="max-h-[14rem] w-full hover:scale-125 transition-all object-cover rounded-2xl shadow-[8px_8px_0px] shadow-default"
              src={props.image}
              width={170}
              height={200}
              alt={props.title}
            />
          </div>
          <Link
            href={
              "/book-categories/" + props.id + "?type=book&title=" + props.title
            }
            className="bg-primary/30 hover:bg-primary transition-all group rounded-3xl py-2"
          >
            <span className="text-primary px-5 whitespace-nowrap group-hover:text-white">
              READ FULL ARTICLE
            </span>
          </Link>
        </div>
        <div className="flex flex-col">
          <h4 className="text-lg text-default font-medium line-clamp-1">
            {props.title}
          </h4>
          <p className="font-light text-sm text-default line-clamp-6">
            {props.description}
          </p>
        </div>
      </div>
    </>
  );
}
