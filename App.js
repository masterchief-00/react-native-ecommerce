import { NativeBaseProvider } from "native-base";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <PlaceOrderScreen />
    </NativeBaseProvider>
  );
}
