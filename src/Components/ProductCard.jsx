import { Card, CardHeader, CardBody, CardFooter,Heading,Stack,StackDivider,Box,Text,Divider,ButtonGroup,Button,Image, Flex } from '@chakra-ui/react'
import { useContext } from 'react'
import { ADDTOCART } from '../Context/Actiontype'
import { AppContext } from '../Context/AppContext'


export default function ProductCard(ele){

const {dispatch,state}=useContext(AppContext)
const {cart}=state
console.log(cart)
return <Card maxW='sm'>
<CardBody>
  <Image
    src={ele.imageURL}
    alt='Green double couch with wooden legs'
    borderRadius='lg'
  />
  <Stack mt='6' spacing='3'>
    <Heading size='md'>{ele.name}</Heading>
   
    <Text color='blue.600' fontSize='2xl'>
      ${ele.price}
    </Text>

  </Stack>
</CardBody>
<Divider />
<CardFooter>
  <ButtonGroup spacing='2'>

    <Button variant='ghost' colorScheme='blue' onClick={()=>dispatch({type:ADDTOCART,payload:ele})}>
      Add to cart
    </Button>
    <Flex bg="blackAlpha.500" alignItems={"center"} >

    <Button variant='ghost' color={"white"} colorScheme='blue' onClick={()=>dispatch({type:ADDTOCART,payload:ele})}>
      -
    </Button>
    <Text color={"white"}>1</Text>
    <Button variant='ghost' color={"white"} colorScheme='blue' onClick={()=>dispatch({type:ADDTOCART,payload:ele})}>
      +
    </Button>
    </Flex>
  </ButtonGroup>
</CardFooter>
</Card>



}