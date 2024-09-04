import { View, TextInput, TextInputProps } from "react-native";
import { ContainerProps } from "./types";
import { colors } from "@/styles/colors";

 

function Search({ children }: ContainerProps) {
  return (
    <View className="w-full h-14 bg-gray-800 rounded-lg p-4 flex-row items-center gap-4">
      {children}
    </View>
  );
};

function SearchField({ ...rest }: TextInputProps) {
  return (
    <TextInput 
      className="flex-1 font-normal text-base text-white" 
      placeholderTextColor={colors.gray[400]} 
      cursorColor={colors.blue[600]}
      {...rest} 
    />
  );
};

Search.Field = SearchField;

export { Search };

