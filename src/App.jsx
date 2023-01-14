import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import Navbar from './Components/Navbar'

import Product from './Routes/ProductListing'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Box w="100%">
<Navbar/>
      <Product/>
      </Box>
  )
}

export default App
