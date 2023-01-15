import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useContext} from "react";
import CartIncrementDecrement from "../Components/CartIncrementDecrement";
import CartTotal from "../Components/CartTotal";
import { DELETECARTITEM } from "../Context/Actiontype";
import { AppContext } from "../Context/AppContext";

const ShoppingCart = () => {
  const { state, dispatch } = useContext(AppContext);

  const { cart } = state;

  return (
    <Box p="10" w="100%" m="auto">
      <Heading>Shopping Cart</Heading>
      <br />
      <br />
      {cart.length == 0 ? (
        <Box h="50vh">
          <Image
            w="100%"
            src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
          />
        </Box>
      ) : (
        <Box mt={"50px"} w="100%">
          {cart.map((ele) => {
            return (
              <Box w="100%">
                <Flex
                  key={ele.id}
                  gap="10"
                  pl="5"
                  pr="5"
                  pb="5"
                  alignItems={"center"}
                  h="100px"
                  borderBottom={"1px solid gray"}
                  w="100%"
                >
                  <Box w="100px" h="100%">
                    <Image src={ele.imageURL} w="100%" h="100%" />
                  </Box>
                  <Box>
                    <Text fontWeight={"bold"} fontSize="xs">
                      {ele.name}
                    </Text>
                    <br />
                    <Text fontWeight={"bold"} fontSize="xs">
                      Rs {ele.price}
                    </Text>
                  </Box>
                  <Spacer />

                  <Box display={["none", "none", "block", "block", "block"]}>
                    <CartIncrementDecrement item={ele} />
                  </Box>
                  <Spacer />
                  <Box>
                    <Button
                      colorScheme={"none"}
                      _hover={{
                        backgroundColor: "orange",
                      }}
                      size="xs"
                      bg="red"
                      color={"white"}
                      onClick={() => {
                        dispatch({ type: DELETECARTITEM, payload: ele.id });
                      }}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </Button>
                  </Box>
                </Flex>
                <Box display={["block", "block", "none", "none", "none"]}>
                  <CartIncrementDecrement item={ele} />
                </Box>
              </Box>
            );
          })}
        </Box>
      )}

      {cart.length == 0 ? null : <CartTotal />}
    </Box>
  );
};

export default ShoppingCart;
