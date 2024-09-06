import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import DrawerButton from "@/components/DrawerButton";

import { DrawerContentProps } from "./types";
import { CustomOptions } from "@/types/navigation";

export function DrawerContent(drawerProps: DrawerContentProps) {
  return (
    <View className="flex-1 bg-gray-600 overflow-hidden">
      <View className="mt-20 w-full border-b pb-6 border-gray-500">
        <Image className="w-28 ml-5" resizeMode="contain" source={require("@/assets/images/logo.png")} />
      </View>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 42 }}
      >
        <View className="mt-2">
          {
            drawerProps.state.routes.map((route, index) => {
              const isFocused = drawerProps.state.index === index;
              const options = drawerProps.descriptors[route.key].options as CustomOptions;

              if(options.title === undefined) {
                return;
              }

              const onPress = () => {
                const event = drawerProps.navigation.emit({
                  type: "drawerItemPress",
                  canPreventDefault: true,
                  target: route.key,
                });

                if(!isFocused && !event?.defaultPrevented) {
                  drawerProps.navigation.navigate(route.name, route.params);
                };
              };

              

              return (
                <View key={route.key}>
                  {
                    options.sectionTitle ? (
                      <Text className="text-gray-400 text-sm font-heading ml-4 mt-6">{options.sectionTitle}</Text>
                    ) : null
                  }
                  <DrawerButton 
                    onPress={onPress}
                    title={options.title} 
                    isDivider={options.isDivider}
                    iconName={options.iconName}
                    notifications={options.notifications}
                    isFocused={isFocused} 
                  />
                </View>
              );
            })
          }
        </View>
      </ScrollView>
    </View>
  )
}