import React, { useState } from "react";
import { Center, HStack, Modal, VStack, Text } from "native-base";
import CustomButton from "../components/CustomButton";

export default function PlaceOrderModel() {
  const [showModel, setShowModel] = useState(false);
  return (
    <Center>
      <CustomButton
        onPress={() => setShowModel(true)}
        bg="black"
        children="SHOW TOTAL"
        color="white"
        mt={5}
      />
      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              <HStack alignItems="center" justifyContent="space-between">
                <Text fontWeight="medium">Products</Text>
                <Text color="black" bold fontSize={14}>
                  $242.78
                </Text>
              </HStack>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Center>
  );
}
