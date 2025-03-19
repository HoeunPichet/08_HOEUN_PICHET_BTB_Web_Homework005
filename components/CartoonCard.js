import { formatYear } from "@/helper/helper";
import Image from "next/image";
import Link from "next/link";

export default function CartoonCard({ ...props }) {
  return (
    <>
      <div className="flex flex-col gap-5 w-full rounded-2xl">
        <Link
          href={
            "/old-school-cartoons/" +
            props.id +
            "?type=cartoon&title=" +
            props.title
          }
          className="w-full shadow-[0px_0px_10px] shadow-default rounded-2xl"
        >
          <Image
            src={props.image}
            className="w-full h-full hover:contrast-150 transition-all max-h-[22rem] rounded-2xl object-cover"
            width={314}
            height={490}
            alt={props.title}
          />
        </Link>
        <div className="flex flex-col">
          <h5 className="text-lg font-semibold text-default">{props.title}</h5>
          <div className="flex gap-3 w-full text-sm text-primary">
            <div className="flex gap-1">
              <Image
                src="/icon/eye.svg"
                width={16}
                height={16}
                alt="Eye Icon"
              />
              <span className="font-semibold">{props.view} times</span>
            </div>
            <span>|</span>
            <p className="font-semibold">{formatYear(props.publish)}</p>
          </div>
        </div>
      </div>
    </>
  );
}
