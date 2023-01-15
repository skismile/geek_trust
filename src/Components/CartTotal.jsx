import { Box, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const CartTotal = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  return (
    <Box mt="20">
      <hr
        style={{
          border: "2px solid gray",
        }}
      />
      <br />
      <Text fontWeight={"bold"}>
        Total amount Rs.{" "}
        {cart.reduce((acc, ele) => {
          return acc + ele.price * ele.quantity;
        }, 0)}
      </Text>
    </Box>
  );
};

export default CartTotal;
