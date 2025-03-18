import SearchButton from "@/components/SearchButton";
import SideBar from "@/components/SideBar";

export default function ContentLayout({ children }) {
  return (
    <main className="w-full max-w-wmax mx-auto flex">
      <SideBar />
      <article className="w-full bg-slate-200 pt-7 px-12 grid grid-cols-1 content-start gap-7">
        <SearchButton />
        <section className="bg-white rounded-tl-3xl rounded-tr-3xl min-h-[calc(100vh_-_104px)] p-7">
          {children}
        </section>
      </article>
    </main>
  );
}
