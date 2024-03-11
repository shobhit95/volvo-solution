import { ProductsLayout } from "./Products.styles";
import Link from "next/link";

export const Products = (props: any) => {
  const { carsData } = props;
  return (
    <ProductsLayout>
      <section
        className="container-xl reel scrollbar-none gap-x-gutter py-16 px-pagemargin lg:px-0"
        data-bleed
      >
        {carsData.map((cars: any, index: number) => {
          return (
            <div key={cars.id}>
              {cars.bodyType}
              <p className="mb-8 font-medium">
                {cars.modelName}
                <span className="text-secondary font-light">
                  {" "}
                  {cars.modelType}
                </span>
              </p>

              <div className="flex-col flex-shrink-0 flex-grow-0 gap-y-24 w-xs h-full snap-start">
                <img
                  alt={cars.modelName + cars.modelType}
                  className="object-cover aspect-4/3 w-full"
                  height="300"
                  src={cars.imageUrl}
                  style={{
                    height: "auto",
                  }}
                  width="400"
                />
                <div>
                  <div className="flex flex-wrap gap-x-24 justify-center">
                    <Link href={`/learn/${cars.id}`}>
                      <a className="button-text text-accent-blue">LEARN</a>
                    </Link>
                    <Link href={`/shop/${cars.id}`}>
                      <a className="button-text text-accent-blue">SHOP</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </ProductsLayout>
  );
};
