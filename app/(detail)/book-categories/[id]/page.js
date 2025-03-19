import { getBookById } from "@/service/bookService";
import Image from "next/image";

export default async function DetailBook({ params }) {
  const { id } = params;

  const RESPONSE = await getBookById(id);
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
              alt={PAYLOAD.book_title}
            />
          </div>
        )}
        <div className="clear-none">
          <h3 className="text-2xl text-default font-semibold">
            {PAYLOAD.book_title}
          </h3>
          <h4 className="text-default text-xl font-semibold leading-loose">
            <span>By </span>
            <span className="text-primary">{PAYLOAD.book_author}</span>
          </h4>
          <p className="clear-none text-default">{PAYLOAD.description}</p>
        </div>
      </article>
    </>
  );
}
