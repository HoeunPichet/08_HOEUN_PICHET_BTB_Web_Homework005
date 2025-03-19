"use client";
import BookCard from "@/components/BookCard";
import ContentHeader from "@/components/ContentHeader";
import { getAllBooks, getBookCategoryById } from "@/service/bookService";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BookCategories() {
  const [books, setBooks] = useState("");
  const [title, setTitle] = useState("");
  const params = useSearchParams();
  const categoryId = params.get("category") ? params.get("category") : "";
  const search = params.get("search") ? params.get("search") : "";

  const fetchTitle = async () => {
    const RESPONSE = await getBookCategoryById(categoryId);
    const TITLE = await RESPONSE?.payload?.book_cate_name;
    setTitle(typeof TITLE !== "undefined" ? TITLE : "All Books");
  };

  const fetchBook = async () => {
    const RESPONSE = await getAllBooks(categoryId, search);
    const DATA = await RESPONSE.payload;
    setBooks(DATA);
  };

  useEffect(() => {
    fetchTitle();
    fetchBook();
  }, []);

  const fetchBookByCategory = async (cateId) => {
    const RESPONSE = await getBookCategoryById(cateId);
    const TITLE = await RESPONSE?.payload?.book_cate_name;
    setTitle(typeof TITLE !== "undefined" ? TITLE : "All Books");

    const RESBOOK = await getAllBooks(cateId, search);
    const DATA = await RESBOOK.payload;
    setBooks(DATA);
  };

  return (
    <>
      <ContentHeader title={title} type="book" queryId={fetchBookByCategory} />
      <div className="mt-36 grid xl:grid-cols-2 w-full gap-x-10 gap-y-40">
        {books &&
          books.map((item) => {
            return (
              <BookCard
                key={item.id}
                id={item.id}
                title={item.book_title}
                image={item.image}
                description={item.description}
              />
            );
          })}
      </div>
    </>
  );
}
