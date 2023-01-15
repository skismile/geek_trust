import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";
import SideFilterBar from "./SideFilterBar";
const MyDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box display={["block", "block", "block", "none", "none"]}>
      <Button size="sm" onClick={onOpen}>
        <i className="fa-solid fa-filter"></i>
      </Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <SideFilterBar />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MyDrawer;
