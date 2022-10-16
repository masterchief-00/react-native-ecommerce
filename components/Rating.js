import { MaterialIcons, AntDesign } from "@expo/vector-icons";

import React from "react";
import { HStack } from "native-base";

export default function Rating({ value }) {
  return (
    <HStack opacity={0.6} space={0.4} mt={1} alignItems="center">
      <MaterialIcons
        name={value >= 1 ? "star" : value >= 0.5 ? "star-half" : "star-outline"}
        size={15}
        color="#e47200"
      />
      <MaterialIcons
        name={value >= 2 ? "star" : value >= 1.5 ? "star-half" : "star-outline"}
        size={15}
        color="#e47200"
      />
      <MaterialIcons
        name={value >= 3 ? "star" : value >= 2.5 ? "star-half" : "star-outline"}
        size={15}
        color="#e47200"
      />
      <MaterialIcons
        name={value >= 4 ? "star" : value >= 3.5 ? "star-half" : "star-outline"}
        size={15}
        color="#e47200"
      />
      <MaterialIcons
        name={value >= 5 ? "star" : value >= 4.5 ? "star-half" : "star-outline"}
        size={15}
        color="#e47200"
      />
    </HStack>
  );
}
