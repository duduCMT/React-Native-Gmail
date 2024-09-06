import { Pressable, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { MenuButtonProps } from "./types";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

export function MenuButton({ ...rest }: MenuButtonProps) {
  const navigation = useNavigation();
  
  const toggleMenu = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <Pressable onPress={toggleMenu} {...rest}>
      <MaterialIcons name="menu" size={22} color={colors.white} />
    </Pressable>
  )
}