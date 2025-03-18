"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getBookById } from "@/service/bookService";
import Image from "next/image";

export default function DetailBook() {
  const params = useParams();
  const { id } = params;

  const [payload, usePayload] = useState("");

  const fetchData = async () => {
    const RESPONSE = await getBookById(id);
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
              alt={payload.book_title}
            />
          </div>
        )}
        <div className="clear-none">
          <h3 className="text-2xl text-default font-semibold">
            {payload.book_title}
          </h3>
          <h4 className="text-default text-xl font-semibold leading-loose">
            <span>By </span>
            <span className="text-primary">{payload.book_author}</span>
          </h4>
          <p className="clear-none text-default">{payload.description}</p>
        </div>
      </article>
    </>
  );
}
