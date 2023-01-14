import { Box, Card, SimpleGrid,Flex, Input, Button } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import { getData } from '../Api/api'


import SideFilterBar from '../Components/SideFilterBar';
import { GETDATA } from '../Context/Actiontype';
import { AppContext } from '../Context/AppContext';
import Products from './Products';
const ProductListing = () => {

const {dispatch,state}=useContext(AppContext)
console.log(state)
useEffect(()=>{

getData().then((res)=>{
 
  dispatch({type:GETDATA,payload:res})
})

},[])

  return (
    <Box w="90%" m={"auto"} border={"1px solid red"}>
<Flex w="100%" border={"1px solid red"} h="50px" justifyContent={"right"} alignItems="center" >
  
  <Flex ml={10}w="50%" gap={5}>

<Input placeholder='Search for products..' w="70%" variant='flushed' borderBottom={"2px solid gray"} />
<Button onClick={()=>dispatch({type:"hello"})}><i className="fa-solid fa-magnifying-glass"></i></Button>
  </Flex>

</Flex>
<Flex>
<Box border={"1px solid green"} position="relative" w="30%">
  <SideFilterBar/>
</Box>
<Products />

    </Flex>
    </Box>
  )
}

export default ProductListing