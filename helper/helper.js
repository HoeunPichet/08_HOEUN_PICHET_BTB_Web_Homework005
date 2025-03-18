export const formatYear = (dt) => {
  const date = new Date(dt);
  const year = {
    year: "numeric",
  };

  let formattedDate = date.toLocaleDateString("en-US", year);
  return formattedDate;
};
