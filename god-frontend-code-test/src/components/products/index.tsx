import dynamic from "next/dynamic";

export const Products = dynamic<any>(() =>
  import("./Products").then((module) => module.Products)
);
