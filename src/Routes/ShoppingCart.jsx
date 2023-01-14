import { Box, Button, Flex, Heading,Image,Spacer,Text } from "@chakra-ui/react"
import { useContext, useState } from "react"
import CartIncrementDecrement from "../Components/CartIncrementDecrement"
import { DELETECARTITEM } from "../Context/Actiontype"
import { AppContext } from "../Context/AppContext"


const ShoppingCart = () => {
  const {state,dispatch}=useContext(AppContext)
  
  const {cart}=state
 
  return (
  <Box p="10">
   
<Heading>Shopping Cart</Heading>
<br /><br />
{
  
  cart.length==0?<Box w="80%" h="50vh" m="auto" ><Image w="100%" src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"/></Box>:<Box mt={"50px"}>

  {
    cart.map((ele)=>{
  return <Flex key={ele.id} gap="10" m="auto" pl="5" pr="5" pb="5" alignItems={"center"} h="100px" w="80%" borderBottom={"1px solid gray"} >
    <Box w="10%" h="100%"  >
  
    <Image src={ele.imageURL} w="100%" h="100%" />
    </Box>
    <Box>
  
    <Text>{ele.name}</Text><br />
    <Text>Rs {ele.price}</Text>
    
    </Box>
    <Spacer/>
  <Box>
  <CartIncrementDecrement item={ele}/>
  </Box>
  <Spacer/>
  <Box>
    <Button colorScheme={"none"} _hover={{
      backgroundColor:"orange"
    }} bg="red" color={"white"} onClick={()=>{
    
    dispatch({type:DELETECARTITEM,payload:ele.id})
    }} >
      Delete
    </Button>
  </Box>
    
  </Flex>
  
    })
  }
  
  
  </Box>
}

  </Box>
  )
}

export default ShoppingCart