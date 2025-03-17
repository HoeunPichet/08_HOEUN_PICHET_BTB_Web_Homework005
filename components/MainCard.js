import Image from "next/image";
import Link from "next/link";

export default function MainCard({ ...props }) {
  return (
    <>
      <Link
        href={props.url}
        className="relative group w-fit h-fit shadow-2xl rounded-[1.75rem] overflow-hidden shadow-gray-500"
      >
        <div className="absolute top-3 left-3 z-10 flex gap-1 items-center bg-white rounded-2xl justify-center px-2 py-0.5">
          <Image src="/icon/tag.svg" width={14} height={14} alt="Tag" />
          <p className="text-primary text-xs font-medium">{props.title}</p>
        </div>
        <Image
          src={props.src}
          className="object-cover"
          width={260}
          height={450}
          alt={props.title}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all px-3">
          <p className="text-white text-3xl text-center drop-shadow-2xl font-medium transition-all translate-y-10 group-hover:translate-y-0">
            {props.description}
          </p>
        </div>
      </Link>
    </>
  );
}
