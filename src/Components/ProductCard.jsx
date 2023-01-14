import { Card, CardHeader, CardBody, CardFooter,Heading,Stack,StackDivider,Box,Text,Divider,ButtonGroup,Button,Image, Flex } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { ADDTOCART, CARTITEMDECREMENT, CARTITEMINCREMENT } from '../Context/Actiontype'
import { AppContext } from '../Context/AppContext'
import CartIncrementDecrement from './CartIncrementDecrement'


export default function ProductCard(item){

const {dispatch,state}=useContext(AppContext)
const [quantity,setQuantity]=useState(1)
const [currentItem,setCurrentItem]=useState()
const {cart}=state
// console.log(cart)

const find=()=>{
let get=cart?.filter((ele)=>{
// console.log(ele.id,item.id);
return ele.id==item.id

})



return get.length==0?true:false
// console.log("find",get)

}

const getCartItem=()=>{
  let get=cart?.filter((ele)=>{
    // console.log(ele.id,item.id);
    return ele.id==item.id
    
    })
    // console.log(get);
    return get



}
return <Card maxW='sm'>
<CardBody>
  <Image
    src={item.imageURL}
    alt='Green double couch with wooden legs'
    borderRadius='lg'
  />
  <Stack mt='6' spacing='3'>
    <Heading size='md'>{item.name}</Heading>
   
    <Text color='blue.600' fontSize='2xl'>
      ${item.price}
    </Text>

  </Stack>
</CardBody>
<Divider />
<CardFooter>
  <ButtonGroup spacing='2'>

{
  find()? <Button variant='ghost' colorScheme='blue' onClick={()=>dispatch({type:ADDTOCART,payload:{id:item.id,name:item.name,imageURL:item.imageURL,price:item.price,quantity:1,totalQuantity:item.quantity}})}>
  Add to cart
</Button>:<CartIncrementDecrement item={item} />
}
   
    
  </ButtonGroup>
</CardFooter>
</Card>



}