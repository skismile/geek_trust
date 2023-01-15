import {SimpleGrid} from "@chakra-ui/react";

import { useContext } from "react";
import ProductCard from "./ProductCard";
import { AppContext } from "../Context/AppContext";
const Products = () => {
  const { state } = useContext(AppContext);
  const { filteredItem } = state;
  return (
    <SimpleGrid columns={[1, 1, 2, 3, 3]} spacing={10} p="10">
      {filteredItem?.map((ele, i) => {
        return <ProductCard key={ele.id} {...ele} />;
      })}
    </SimpleGrid>
  );
};

export default Products;
