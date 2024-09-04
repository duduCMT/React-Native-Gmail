import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

import { FloatButtonProps } from "./types";

export function FloatButton({ icon, ...rest }: FloatButtonProps) {
  return (
    <TouchableOpacity 
      activeOpacity={0.7}
      {...rest}
    >
      <View className="px-4 py-3 bg-gray-600 rounded-full absolute bottom-4 right-3 flex-row gap-2 items-center">
        <MaterialIcons name={icon} size={22} color={colors.orange[500]} />
        <Text className="font-subtitle text-orange-500">Escrever</Text>
      </View>
    </TouchableOpacity>
  );
};