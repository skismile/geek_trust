import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AppContextProvider } from './Context/AppContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>

  <BrowserRouter>
<AppContextProvider>
    <App />
</AppContextProvider>
  </BrowserRouter>
  </ChakraProvider>
 
)
