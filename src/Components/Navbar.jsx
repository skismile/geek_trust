import {  Flex, Spacer, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const Navbar = () => {
  const { state } = useContext(AppContext);
  return (
    <Flex
      position="relative"
      gap={10}
      padding="10"
      w="100%"
      h="70px"
      borderBottom={"1px solid gray"}
      alignItems="center"
    >
      <Text fontSize={"2xl"} fontWeight="bold">
        TeeRex Store
      </Text>
      <Spacer />
      <Text fontSize={"xl"}>
        <Link to="/">Products</Link>
      </Text>

      <Text
        color={"red"}
        fontWeight="bold"
        position={"absolute"}
        fontSize="sm"
        top="4"
        right={8}
      >
        {state?.cart?.length}
      </Text>
      <Text fontSize={"xl"}>
        <Link to={"/cart"}>
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
      </Text>
    </Flex>
  );
};

export default Navbar;
