import BookCard from "@/components/BookCard";
import ContentHeader from "@/components/ContentHeader";
import { getAllBooks } from "@/service/bookService";

export default async function BookCategories() {
  const RESPONSE = await getAllBooks();
  const BOOKS = await RESPONSE.payload;

  return (
    <>
      <ContentHeader title="All Books" type="book" />
      <div className="mt-36 grid xl:grid-cols-2 w-full gap-x-10 gap-y-40">
        {BOOKS.map((item) => {
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
