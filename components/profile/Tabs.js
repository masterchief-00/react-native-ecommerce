import { View, Text, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { SceneMap } from "react-native-tab-view";

const renderScene = SceneMap({
  first: Profile,
  second: Order,
});

export default function Tabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  return (
    <View>
      <Text>Tabs</Text>
    </View>
  );
}
