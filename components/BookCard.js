import Image from "next/image";

export default function BookCard({ ...props }) {
  return (
    <>
      <div className="flex gap-5 w-full bg-slate-200 px-7 py-5 rounded-2xl min-h-[10rem]">
        <div className="flex flex-col justify-end gap-5 relative">
          <Image
            className="absolute bottom-14 left-0 object-cover rounded-2xl shadow-[5px_5px_5px] shadow-gray-500"
            src={props.image}
            width={170}
            height={200}
            alt={props.title}
          />
          <button type="button" className="bg-primary/30 rounded-3xl py-2">
            <span className="text-primary px-5 whitespace-nowrap">
              READ FULL ARTICLE
            </span>
          </button>
        </div>
        <div className="flex flex-col">
          <h4 className="text-lg text-default font-medium">How Do You Live?</h4>
          <p className="font-light text-sm text-default">
            The memoir beautifully captures the complexities of mother-daughter
            relationships and the enduring bond of family across time and
            distance.
          </p>
        </div>
      </div>
    </>
  );
}
