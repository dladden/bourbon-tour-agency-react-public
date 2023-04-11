//Used in {Tours} for price formatting
//priceFormat takes a parameter "number"(the rice)checks if its 0 and returns null
//if not null it formats the number
export const priceFormat = (number) => {
  if (number === 0) {
    return null;
  }
  const newNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
  return newNumber;
};

//getUniqueValues values takes in the raw data and based on name of array string "type"
//maps through the selected array or if the name type contains multiple arrays
export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);

  if (type === "dist") {
    unique = unique.flat();
  }
  if (type === "trans") {
    unique = unique.flat();
  }

  return ["all", ...new Set(unique)];
};
