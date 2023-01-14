import { Box, Card, SimpleGrid,Flex } from '@chakra-ui/react';
import { useContext } from 'react';
import ProductCard from '../Components/ProductCard';
import { AppContext } from '../Context/AppContext';
const Products = () => {
    const {state,dispatch}=useContext(AppContext)
const {products}=state
  return (
    <SimpleGrid columns={3} spacing={10} p="10">

{
  products?.map((ele,i)=>{
    return <ProductCard key={ele.id} {...ele} />
    
  })
}
  </SimpleGrid>
  )
}

export default Products