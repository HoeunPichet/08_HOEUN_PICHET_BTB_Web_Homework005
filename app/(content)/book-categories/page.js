import BookCard from "@/components/BookCard";
import ContentHeader from "@/components/ContentHeader";
import { getAllBooks } from "@/service/bookService";

export default async function BookCategories() {
  const DATA = await getAllBooks();
  const BOOKS = await DATA.payload;
  console.log(BOOKS);
  return (
    <>
      <ContentHeader
        title="All Books"
        type="book"
        description="Filter by Categories"
      />
      <div className="mt-44 grid grid-cols-2 w-full gap-x-10 gap-y-40">
        {BOOKS.map((item) => {
          return (
            <BookCard
              key={item.id}
              title={item.book_title}
              image={item.image}
            />
          );
        })}
      </div>
    </>
  );
}
