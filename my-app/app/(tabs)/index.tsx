import { Button, Text, View } from "react-native";

import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function HomeScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = ["50%", "100%"];
  return (
    <View style={{height: "100%"}}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "grey" }}>
          <Button
            title="Open Bottom Sheet"
            onPress={() => bottomSheetRef.current?.expand()}
          />
        </View>
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          index={1}
          style={{ backgroundColor: "white" }}
        >
          <BottomSheetView className="flex-1 items-center justify-start">
            <Text>Bottom Sheet</Text>
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </View>
  );
}
