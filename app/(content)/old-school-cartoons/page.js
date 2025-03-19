"use client";
import CartoonCard from "@/components/CartoonCard";
import ContentHeader from "@/components/ContentHeader";
import { getAllCartoons, getCartoonGenreById } from "@/service/cartoonService";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function OldSchoolCartoons() {
  const [cartoons, setCartoons] = useState("");
  const [title, setTitle] = useState("");
  const params = useSearchParams();
  const genreId = params.get("genre") ? params.get("genre") : "";
  const search = params.get("search") ? params.get("search") : "";

  const fetchTitle = async () => {
    const RESPONSE = await getCartoonGenreById(genreId);
    const TITLE = await RESPONSE?.payload?.cartoon_genre;
    setTitle(typeof TITLE !== "undefined" ? TITLE : "Old School Cartoons");
  };

  const fetchCartoon = async () => {
    console.log(genreId, search);

    const RESPONSE = await getAllCartoons(genreId, search);
    const DATA = await RESPONSE.payload;
    setCartoons(DATA);
  };

  useEffect(() => {
    fetchTitle();
    fetchCartoon();
  }, []);

  const fetchCartoonByGenre = async (genId) => {
    const RESPONSE = await getCartoonGenreById(genId);
    const TITLE = await RESPONSE?.payload?.cartoon_genre;
    setTitle(typeof TITLE !== "undefined" ? TITLE : "Old School Cartoons");

    const RESCARTOON = await getAllCartoons(genId, search);
    const DATA = await RESCARTOON.payload;
    setCartoons(DATA);
  };
  return (
    <>
      <ContentHeader
        title={title}
        type="cartoon"
        queryId={fetchCartoonByGenre}
      />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 w-full gap-10 xl:gap-x-16 gap-y-20">
        {cartoons &&
          cartoons.map((item) => {
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
