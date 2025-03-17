import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import SideBar from "@/components/SideBar";
import SearchButton from "@/components/SearchButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Homework",
  description: "Learn Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <main className="w-full max-w-wmax mx-auto flex">
          <SideBar />
          <article className="grow bg-slate-200 pt-7 px-12 grid grid-cols-1 content-start gap-7">
            <SearchButton />
            <section className="bg-white rounded-tl-3xl rounded-tr-3xl h-[calc(100vh_-_104px)] overflow-auto p-7">
              {children}
            </section>
          </article>
        </main>
      </body>
    </html>
  );
}
