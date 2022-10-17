import React, { useState } from "react";
import { Box, Heading, HStack, Image, ScrollView, Spacer, Text } from "native-base";
import { StatusBar } from "expo-status-bar";
import Rating from "../components/Rating";
import NumericInput from "react-native-numeric-input";
import CustomButton from "../components/CustomButton";
import Review from "../components/Review";

export default function SingleProductScreen() {
  const [value, setvalue] = useState(0);
  return (
    <Box safeArea flex={1} bg="white">
      <StatusBar backgroundColor="transparent" style="dark" />
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={require("../assets/images/shoes04.png")}
          resizeMode="contain"
          alt="image"
          w="full"
          h={250}
        />
        <Heading bold fontSize={20} mt={8} mb={2} lineHeight={22}>
          Blue shoes for women, sizes 6-11
        </Heading>
        <Rating value={3.5} />
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput
            value={value}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            minValue={0}
            maxValue={15}
            rounded
            borderColor="#ddd"
            textColor="black"
            leftButtonBackgroundColor="#009580"
            rightButtonBackgroundColor="#009580"
            iconStyle={{ color: "white" }}
          />
          <Spacer />
          <Heading bold color="black" fontSize={19}>
            $400
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={15}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          dolorum tempora odit iusto veniam reiciendis consectetur perspiciatis
          delectus quasi veritatis quae provident, nihil ipsa consequatur
          commodi! Quae quidem omnis aspernatur.
        </Text>
        <CustomButton color='white' bg='#009580' mt={10}>Add to cart</CustomButton>
        <Review />
      </ScrollView>
    </Box>
  );
}
