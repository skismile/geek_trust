import { Box, Card, SimpleGrid,Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { getData } from '../Api/api'
import ProductCart from '../Components/ProductCard';

const Product = () => {
const [products,setProducts]=useState([]);


useEffect(()=>{

getData().then((res)=>{
  setProducts(res)
  console.log(res);
})

},[])

  return (
    <Box w="90%" m={"auto"} border={"1px solid red"}>

<Flex>
<Box border={"1px solid green"} w="40%">
  
</Box>
<SimpleGrid columns={3} spacing={10}>

{
  products?.map((ele,i)=>{
    return <ProductCart key={ele.id} {...ele} />
    
  })
}
  </SimpleGrid>

    </Flex>
    </Box>
  )
}

export default Product