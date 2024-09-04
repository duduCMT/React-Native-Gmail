import { Avatar } from "@/components/Avatar";
import { MenuButton } from "@/components/MenuButton";
import { Search } from "@/components/Search";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 bg-gray-900 pt-14 p-4">
      <Search>
        <MenuButton />
        <Search.Field placeholder="Pesquisar no e-mail" />
        <Avatar source={{ uri: "https://github.com/duduCMT.png" }} size="small" />
      </Search>
    </View>
  );
};