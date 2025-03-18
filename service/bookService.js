export async function getAllBooks() {
  try {
    const response = await fetch(
      "https://nextjs-homework005.vercel.app/api/book",
      {
        cache: "force-cache",
        next: { revalidate: 5 },
      }
    );

    const result = await response.json();
    return result;
  } catch (err) {
    return [];
  }
}

export async function getBookById(id) {
  try {
    const response = await fetch("/api/book/" + id, {
      cache: "force-cache",
      next: { revalidate: 5 },
    });

    const result = await response.json();
    return result;
  } catch (err) {
    return [];
  }
}

export async function getBookByCategory(id) {
  try {
    const response = await fetch(
      "https://nextjs-homework005.vercel.app/api/book?query=" + id,
      {
        cache: "force-cache",
        next: { revalidate: 5 },
      }
    );

    const result = await response.json();
    return result;
  } catch (err) {
    return [];
  }
}

export async function getAllBookCategories() {
  try {
    const response = await fetch(
      "https://nextjs-homework005.vercel.app/api/book_category",
      {
        cache: "force-cache",
        next: { revalidate: 5 },
      }
    );

    const result = await response.json();
    return result;
  } catch (err) {
    return [];
  }
}
