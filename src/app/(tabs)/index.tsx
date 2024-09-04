import { FlatList, Text, View } from "react-native";

import { Avatar } from "@/components/Avatar";
import { EmailItem } from "@/components/EmailItem";
import { MenuButton } from "@/components/MenuButton";
import { Search } from "@/components/Search";
import { EMAILS } from "@/constants/EmailsConstants";

export default function Home() {
  return (
    <View className="flex-1 bg-gray-900 pt-14 pl-4 pr-4">
      <Search>
        <MenuButton />
        <Search.Field placeholder="Pesquisar no e-mail" />
        <Avatar source={{ uri: "https://github.com/duduCMT.png" }} size="small" />
      </Search>
      <FlatList 
        data={EMAILS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <EmailItem data={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="gap-6"
        ListHeaderComponent={() => (
          <Text className="uppercase text-gray-400 text-sm font-subtitle mt-6">
            Entrada
          </Text>
        )}
      />
    </View>
  );
};