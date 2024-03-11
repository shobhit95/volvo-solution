import { Products } from "../../src/components/products";

export default function ProductDetail(props: any) {
  console.log("shobhit props", props);
  const { carsData } = props;

  return <Products carsData={carsData} />;
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/cars.json");
  const carsData = await response.json();
  return {
    props: {
      carsData,
    },
  };
};
