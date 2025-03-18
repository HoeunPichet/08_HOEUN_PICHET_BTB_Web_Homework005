import Breadcrumb from "@/components/Breadcrumb";

export default function RootLayout({ children }) {
  return (
    <main className="w-full max-w-wmax mx-auto flex">
      <article className="w-full bg-slate-200 min-h-screen pt-7 px-12 grid grid-cols-1 content-start gap-7">
        <Breadcrumb />
        <section className="bg-white rounded-tl-3xl rounded-tr-3xl min-h-[calc(100vh_-_9.5rem)] px-14 py-8">
          {children}
        </section>
      </article>
    </main>
  );
}
