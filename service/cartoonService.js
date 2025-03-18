export async function getAllCartoons() {
  try {
    const response = await fetch(
      "https://nextjs-homework005.vercel.app/api/cartoon",
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

export async function getAllCartoonGenre() {
  try {
    const response = await fetch(
      "https://nextjs-homework005.vercel.app/api/cartoon_genre",
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
