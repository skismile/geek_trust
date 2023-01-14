import { Card, CardHeader, CardBody, CardFooter,Heading,Stack,StackDivider,Box,Text,Divider,ButtonGroup,Button,Image } from '@chakra-ui/react'


export default function ProductCart({name,price,imageURL}){

return <Card maxW='sm'>
<CardBody>
  <Image
    src={imageURL}
    alt='Green double couch with wooden legs'
    borderRadius='lg'
  />
  <Stack mt='6' spacing='3'>
    <Heading size='md'>{name}</Heading>
   
    <Text color='blue.600' fontSize='2xl'>
      ${price}
    </Text>

  </Stack>
</CardBody>
<Divider />
<CardFooter>
  <ButtonGroup spacing='2'>

    <Button variant='ghost' colorScheme='blue'>
      Add to cart
    </Button>
  </ButtonGroup>
</CardFooter>
</Card>



}