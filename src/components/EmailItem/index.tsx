import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Avatar } from "@/components/Avatar";
import { colors } from "@/styles/colors";
import { EmailProps } from "./types";

export function EmailItem({ data }: EmailProps) {
  return (
    <View className="w-full flex-row gap-4">
      <Avatar source={{ uri: data.avatar }} />

      <View className="flex-1">
        <View className="flex-row items-center gap-1">
          {data.marker ? (
            <MaterialIcons 
              name="label-important" 
              size={16} 
              color={colors.yellow[600]} 
            />
          ) : null}
          <Text className="text-lg font-subtitle text-gray-400 flex-1">
            {data.name}
          </Text>
          <Text className="text-sm font-body text-gray-400">
            {data.date}
          </Text>
        </View>
        <Text className="text-base font-body text-gray-400" lineBreakMode="tail" numberOfLines={1}>
          {data.subject}
        </Text>

        <View className="flex-row items-center gap-4">
          <Text className="text-base font-body text-gray-400 flex-1" lineBreakMode="tail" numberOfLines={1}>
            {data.message}
          </Text>

          <MaterialIcons 
            name={data.star ? "star" : "star-outline"} 
            size={22} 
            color={data.star ?colors.blue[600] : colors.gray[400]} 
          />
        </View>
      </View>
    </View>
  );
}