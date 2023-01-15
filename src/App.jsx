import { Box } from "@chakra-ui/react";
import { useState } from "react";
import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box w="100%">
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
