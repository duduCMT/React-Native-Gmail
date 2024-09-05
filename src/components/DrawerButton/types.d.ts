import { MaterialIcons } from "@expo/vector-icons";
import { PressableProps } from "react-native";

export type IconNameProps = keyof typeof MaterialIcons.glyphMap;

export type DrawerButtonProps = PressableProps & {
  title: string;
  isFocused?: boolean;
  isDivider?: boolean;
  iconName: IconNameProps;
  notifications?: number;
};