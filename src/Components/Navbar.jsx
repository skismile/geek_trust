import { Box, Flex,Spacer,Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
   <Flex gap={10} padding="10" w="100%" h="70px" border={"1px solid gray"} alignItems="center" >
<Text>
TeeRex Store
</Text>
<Spacer/>
<Text>
Products
</Text>


<i className="fa-solid fa-cart-shopping"></i>

   </Flex>
  )
}

export default Navbar