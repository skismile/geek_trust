import { Box, Card, SimpleGrid,Flex, Input, Button } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import { getData } from '../Api/api'
import MySpinner from '../Components/MySpinner';


import SideFilterBar from '../Components/SideFilterBar';
import { GETDATA, LOADING, SEARCH } from '../Context/Actiontype';
import { AppContext } from '../Context/AppContext';
import Products from './Products';
const ProductListing = () => {
const [searchText,setSearchText]=useState("")
const {dispatch,state}=useContext(AppContext)
const {loading}=state
// console.log(state)
const onSubmit=()=>{

//   const d=searchText.trim().split(" ")
//   // console.log(d,"d");

// d.forEach((ele)=>{

//   let temp=ele.trim().split("")
// temp[0]="toUpperCase()"
// console.log(ele,"ele",temp)

// })
// console.log(d)
// cons.ole.log(d);
dispatch({type:LOADING})
dispatch({type:SEARCH,payload:searchText})
}

useEffect(()=>{
dispatch({type:LOADING})
getData().then((res)=>{
 
  dispatch({type:GETDATA,payload:res})
})

},[])

  return (
    <Box w="90%" m={"auto"} border={"1px solid red"}>
<Flex w="100%" border={"1px solid red"} h="50px" justifyContent={"right"} alignItems="center" >
  
  <Flex ml={10}w="50%" gap={5}>

<Input placeholder='Search for products..' w="70%" variant='flushed' borderBottom={"2px solid gray"} onChange={(e)=>setSearchText(e.target.value)} />
<Button onClick={onSubmit}><i className="fa-solid fa-magnifying-glass"></i></Button>
  </Flex>

</Flex>
<Flex>
<Box border={"1px solid green"} position="relative" w="30%">
  <SideFilterBar/>
</Box>
{
  loading?<MySpinner/>:<Products />
}



    </Flex>
    </Box>
  )
}

export default ProductListing