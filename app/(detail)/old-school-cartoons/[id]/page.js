import Image from "next/image";
import { getCartoonById } from "@/service/cartoonService";
import { formatYear } from "@/helper/helper";

export default async function DetailBook({ params }) {
  const { id } = params;

  const RESPONSE = await getCartoonById(id);
  const PAYLOAD = await RESPONSE.payload;

  return (
    <>
      <article className="w-full float-left">
        {PAYLOAD.image && (
          <div className="float-right pl-5 pb-5">
            <Image
              src={PAYLOAD.image}
              className="rounded-2xl object-cover"
              width={250}
              height={450}
              alt={PAYLOAD.ct_title}
            />
          </div>
        )}
        <div className="clear-none">
          <h3 className="text-2xl text-default font-semibold">
            {PAYLOAD.ct_title}
          </h3>
          <h4 className="text-default text-xl font-semibold leading-loose">
            <span>By </span>
            <span className="text-primary">{PAYLOAD.ct_creator}</span>
          </h4>
          <div className="inline-flex items-center gap-5 text-sm text-primary">
            <div className="inline-flex gap-1">
              <Image
                src="/icon/eye.svg"
                width={16}
                height={16}
                alt="Eye Icon"
              />
              <span className="font-semibold">{PAYLOAD.view_count} times</span>
            </div>
            <span>|</span>
            <p className="font-semibold">
              {formatYear(PAYLOAD.published_year)}
            </p>
          </div>
          <p className="clear-none text-default">{PAYLOAD.ct_description}</p>
        </div>
      </article>
    </>
  );
}
