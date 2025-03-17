import ContentHeader from "@/components/ContentHeader";
import MainCard from "@/components/MainCard";

export default function Home() {
  return (
    <>
      <article className="flex flex-col w-full h-full">
        <ContentHeader title={"Homepage"} />
        <div className="h-full items-center flex w-full justify-center gap-20">
          <MainCard
            title="Book"
            src="/images/book-card.jpg"
            url="/book-categories"
            description="View All Available Books"
          />
          <MainCard
            title="Cartoon"
            src="/images/cartoon-card.jpg"
            url="/old-school-cartoons"
            description="View All Available Cartoons"
          />
        </div>
      </article>
    </>
  );
}
