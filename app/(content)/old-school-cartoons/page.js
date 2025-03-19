import CartoonCard from "@/components/CartoonCard";
import ContentHeader from "@/components/ContentHeader";
import { getAllCartoons } from "@/service/cartoonService";

export default async function OldSchoolCartoons() {
  const RESPONSE = await getAllCartoons();
  const CARTOONS = await RESPONSE.payload;

  const fetchCartoonByGenre = (genre) => {
    console.log(genre);

    // const RESPONSE = await getBookCategoryById(cateId);
    // const TITLE = await RESPONSE?.payload?.book_cate_name;
    // setTitle(typeof TITLE !== "undefined" ? TITLE : "All Books");
    // const RESBOOK = await getAllBooks(cateId);
    // const DATA = await RESBOOK.payload;
    // setBooks(DATA);
  };

  return (
    <>
      <ContentHeader
        title="Old School Cartoons"
        type="cartoon"
        // queryId={fetchCartoonByGenre}
      />
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 w-full gap-10 xl:gap-x-16 gap-y-20">
        {CARTOONS &&
          CARTOONS.map((item) => {
            return (
              <CartoonCard
                key={item.id}
                id={item.id}
                title={item.ct_title}
                image={item.image}
                view={item.view_count}
                publish={item.published_year}
              />
            );
          })}
      </div>
    </>
  );
}
