"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { getCartoonById } from "@/service/cartoonService";
import { formatYear } from "@/helper/helper";

export default function DetailBook() {
  const params = useParams();
  const { id } = params;

  const [payload, usePayload] = useState("");

  const fetchData = async () => {
    const RESPONSE = await getCartoonById(id);
    const DATA = await RESPONSE.payload;
    usePayload(DATA);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <article className="w-full float-left">
        {payload.image && (
          <div className="float-right pl-5 pb-5">
            <Image
              src={payload.image}
              className="rounded-2xl"
              width={250}
              height={500}
              alt={payload.ct_title}
            />
          </div>
        )}
        <div className="clear-none">
          <h3 className="text-2xl text-default font-semibold">
            {payload.ct_title}
          </h3>
          <h4 className="text-default text-xl font-semibold leading-loose">
            <span>By </span>
            <span className="text-primary">{payload.ct_creator}</span>
          </h4>
          <div className="inline-flex items-center gap-5 text-sm text-primary">
            <div className="inline-flex gap-1">
              <Image
                src="/icon/eye.svg"
                width={16}
                height={16}
                alt="Eye Icon"
              />
              <span className="font-semibold">{payload.view_count} times</span>
            </div>
            <span>|</span>
            <p className="font-semibold">
              {formatYear(payload.published_year)}
            </p>
          </div>
          <p className="clear-none text-default">{payload.ct_description}</p>
        </div>
      </article>
    </>
  );
}
