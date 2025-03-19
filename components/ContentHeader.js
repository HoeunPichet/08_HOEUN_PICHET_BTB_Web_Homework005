"use client";

import { getAllBookCategories } from "@/service/bookService";
import { getAllCartoonGenre } from "@/service/cartoonService";
import { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function ContentHeader({ title, type = null, queryId = null }) {
  const [category, setCategory] = useState("");
  const [typeId, setTypeId] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const fetchCategory = async () => {
    if (type == "book") {
      const RESPONSE = await getAllBookCategories();
      const DATA = await RESPONSE.payload;
      setCategory(DATA);
      setTypeId(params.get("category"));
    } else if (type == "cartoon") {
      const RESPONSE = await getAllCartoonGenre();
      const DATA = await RESPONSE.payload;
      setCategory(DATA);
      setTypeId(params.get("genre"));
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleChange = (e) => {
    const searchs = params.get("search")
      ? "&search=" + params.get("search")
      : "";
    if (type == "book") {
      router.push(pathname + "?category=" + e.target.value + searchs);
    } else if (type == "cartoon") {
      router.push(pathname + "?genre=" + e.target.value + searchs);
    }
    setTypeId(e.target.value);
    queryId(e.target.value);
  };

  return (
    <>
      <div className="flex justify-between w-full gap-5 pb-2 border-b border-primary">
        <h3 className="bg-slate-100 py-2.5 px-5 rounded-xl font-medium text-primary">
          {title}
        </h3>
        {type && (
          <div className="max-w-64 w-full">
            <select
              onChange={handleChange}
              name="select-type"
              value={typeId ? typeId : ""}
              id="select-type"
              className="bg-slate-100 text-slate-500 w-full px-5 py-2 rounded-xl border border-gray-300 outline-primary"
            >
              <option value="">Filter by Categories</option>
              {category &&
                category.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item?.book_cate_name
                        ? item.book_cate_name
                        : item.cartoon_genre}
                    </option>
                  );
                })}
            </select>
          </div>
        )}
      </div>
    </>
  );
}
