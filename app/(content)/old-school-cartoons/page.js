import BookCard from "@/components/BookCard";
import ContentHeader from "@/components/ContentHeader";
import { getAllBooks } from "@/service/bookService";

export default async function OldSchoolCartoons() {
  const DATA = await getAllBooks();
  const BOOKS = await DATA.payload;

  return (
    <>
      <ContentHeader title="Old School Cartoons" type="cartoon" />
      <div className="mt-36 grid grid-cols-2 w-full gap-x-10 gap-y-40">
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
