import { Flex, ScrollView, Text } from "native-base";
import React from "react";
import { products } from "../data/Product";

export default function HomeProducts() {
  return (
    <ScrollView>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
      >
        {products.map((product) => (
          <Text key={product.id}>{product.name}</Text>
        ))}
      </Flex>
    </ScrollView>
  );
}
