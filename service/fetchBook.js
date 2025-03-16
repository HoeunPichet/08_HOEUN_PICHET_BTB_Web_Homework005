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
