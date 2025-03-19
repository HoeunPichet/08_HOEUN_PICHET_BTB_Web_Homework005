export async function getAllCartoons(id = "", search = "") {
  try {
    const response = await fetch(`/api/cartoon?genre=${id}&search=${search}`, {
      cache: "force-cache",
      next: { revalidate: 5 },
    });

    const result = await response.json();
    return result;
  } catch (err) {
    return [];
  }
}

export async function getCartoonById(id) {
  try {
    const response = await fetch(
      "https://nextjs-homework005.vercel.app/api/cartoon/" + id,
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

export async function getCartoonGenreById(id) {
  try {
    const response = await fetch("/api/cartoon_genre/search?genre=" + id, {
      cache: "force-cache",
      next: { revalidate: 5 },
    });

    const result = await response.json();
    return result;
  } catch (err) {
    return [];
  }
}

export async function getAllCartoonGenre() {
  try {
    const response = await fetch("/api/cartoon_genre", {
      cache: "force-cache",
      next: { revalidate: 5 },
    });

    const result = await response.json();
    return result;
  } catch (err) {
    return [];
  }
}
