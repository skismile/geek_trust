import { Box, Flex, Input, Button } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { getData } from "../Api/api";
import MyDrawer from "../Components/MyDrawer";
import MySpinner from "../Components/MySpinner";

import SideFilterBar from "../Components/SideFilterBar";
import { GETDATA, LOADING, SEARCH } from "../Context/Actiontype";
import { AppContext } from "../Context/AppContext";
import Products from "./Products";
const ProductListing = () => {
  const [searchText, setSearchText] = useState("");
  const { dispatch, state } = useContext(AppContext);
  const { loading } = state;

  const onSubmit = () => {
    dispatch({ type: LOADING });
    dispatch({ type: SEARCH, payload: searchText });
  };

  useEffect(() => {
    dispatch({ type: LOADING });
    getData().then((res) => {
      dispatch({ type: GETDATA, payload: res });
    });
  }, []);

  return (
    <Box w="90%" m={"auto"} mt="10">
      <br />
      <br />

      <Flex
        ml={10}
        w="100%"
        gap={5}
        alignItems="center"
        justifyContent={"right"}
      >
        <Input
          placeholder="Search for products.."
          w={["80%", "80%", "40%", "30%", "30%"]}
          variant="flushed"
          borderBottom={"2px solid gray"}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button size={"sm"} onClick={onSubmit}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </Button>

        <MyDrawer />
      </Flex>

      <Flex justifyContent={["center", "center", "center"]}>
        <Box
          position="relative"
          w={["40%", "40%", "40%", "50%"]}
          display={["none", "none", "none", "block", "block"]}
        >
          <SideFilterBar />
        </Box>
        {loading ? <MySpinner /> : <Products />}
      </Flex>
    </Box>
  );
};

export default ProductListing;
