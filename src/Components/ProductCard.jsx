import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Image,
} from "@chakra-ui/react";
import { useContext, } from "react";
import { ADDTOCART } from "../Context/Actiontype";
import { AppContext } from "../Context/AppContext";
import CartIncrementDecrement from "./CartIncrementDecrement";

export default function ProductCard(item) {
  const { dispatch, state } = useContext(AppContext);

  const { cart } = state;

  const find = () => {
    let get = cart?.filter((ele) => {
      return ele.id == item.id;
    });

    return get.length == 0 ? true : false;
  };

  const getCartItem = () => {
    let get = cart?.filter((ele) => {
      return ele.id == item.id;
    });

    return get;
  };
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={item.imageURL}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{item.name}</Heading>

          <Text color="blue.600" fontSize="2xl">
            ${item.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          {find() ? (
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={() =>
                dispatch({
                  type: ADDTOCART,
                  payload: {
                    id: item.id,
                    name: item.name,
                    imageURL: item.imageURL,
                    price: item.price,
                    quantity: 1,
                    totalQuantity: item.quantity,
                  },
                })
              }
            >
              Add to cart
            </Button>
          ) : (
            <CartIncrementDecrement item={item} />
          )}
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
