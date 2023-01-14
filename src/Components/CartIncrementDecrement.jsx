import { Flex,Box,Text,Button,useToast } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { CARTITEMDECREMENT, CARTITEMINCREMENT } from "../Context/Actiontype"
import { AppContext } from "../Context/AppContext"


const CartIncrementDecrement = ({item}) => {
const {state,dispatch}=useContext(AppContext)
const {cart}=state
const [cartItem,setCartItem]=useState()
// console.log(cart);
const toast = useToast()
useEffect(()=>{

    let data=cart.filter((ele)=>{

return ele.id==item.id



    })
    console.log(data);

setCartItem(data[0])

},[cart])


  return (
    <Flex bg="blackAlpha.500" alignItems={"center"} gap="5" >

<Button disabled={cartItem?.quantity==1} variant='ghost' color={"white"} colorScheme='blue' onClick={()=>{
//   setQuantity(quantity-1)
  dispatch({type:CARTITEMDECREMENT,payload:cartItem?.id})
}}
colorScheme="none"
_hover={{
    backgroundColor:"black"
}}
>
  -
</Button>
<Text color={"white"}>{cartItem?.quantity}</Text>
<Button variant='ghost' color={"white"} colorScheme='blue' onClick={()=>{
//   setQuantity(quantity+1)
if(cartItem?.quantity==cartItem?.totalQuantity)
{
    toast({
        title: `You can't buy more than ${cartItem?.totalQuantity} for this item`,
        
        status: 'error',
        duration: 2000,
        isClosable: true,
        position:"top"
      })
    dispatch({type:CARTITEMDECREMENT,payload:cartItem?.id})
}
  dispatch({type:CARTITEMINCREMENT,payload:cartItem?.id})
}}
colorScheme="none"
_hover={{
    backgroundColor:"black"
}}
>
  +
</Button>
</Flex>
  )
}

export default CartIncrementDecrement