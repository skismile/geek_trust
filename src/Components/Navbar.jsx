import { Box, Flex,Spacer,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <Flex gap={10} padding="10" w="100%" h="70px" border={"1px solid gray"} alignItems="center" >
<Text fontSize={"2xl"} fontWeight="bold">

TeeRex Store
</Text>
<Spacer/>
<Text fontSize={"xl"}>
<Link to="/">
Products
</Link>
</Text>

<Text fontSize={"xl"}>
<Link to={"/cart"}>
<i className="fa-solid fa-cart-shopping"></i>
</Link>
</Text>

   </Flex>
  )
}

export default Navbar