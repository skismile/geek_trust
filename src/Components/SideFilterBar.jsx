
import { Checkbox, CheckboxGroup,Text,Box } from '@chakra-ui/react'
const SideFilterBar = () => {
  return (
   <Box position={"sticky"} border="1px solid gray" top={0} p="10" >
    <Box>
  <label><Text fontWeight={"bold"} fontSize="xl" >color</Text></label>
<Checkbox >Red</Checkbox><br />
<Checkbox >Blue</Checkbox><br />
<Checkbox >Green</Checkbox><br />
  </Box><br />
  <Box>
  <label><Text fontWeight={"bold"} fontSize="xl" >Gender</Text></label>
<Checkbox >Men</Checkbox><br />
<Checkbox >Women</Checkbox><br />

  </Box><br />
  <Box>
  <label><Text fontWeight={"bold"} fontSize="xl" >Price</Text></label>
<Checkbox >0-Rs250</Checkbox><br />
<Checkbox >Rs251-450</Checkbox><br />
<Checkbox >Rs450</Checkbox><br />
  </Box><br />
  <Box>
  <label><Text fontWeight={"bold"} fontSize="xl" >Type</Text></label>
<Checkbox >Polo</Checkbox><br />
<Checkbox >Hoodie</Checkbox><br />
<Checkbox >Basic</Checkbox><br />
  </Box><br />
   </Box>
  )
}

export default SideFilterBar