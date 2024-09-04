import { colors } from "@/styles/colors";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const ACTIVE_TINT_COLOR = colors.orange[500]; 

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: colors.gray[600],
        borderTopWidth: 0,
        minHeight: 64,
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: ACTIVE_TINT_COLOR,
      tabBarInactiveTintColor: colors.gray[400],
    }}>
      <Tabs.Screen 
        name="index" 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons 
              name={color === ACTIVE_TINT_COLOR ? "email" : "email-outline"} 
              color={color} 
              size={size} 
            />
          ),
        }} 
      />
      <Tabs.Screen 
        name="chat" 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons 
              name={color === ACTIVE_TINT_COLOR ? "chat-bubble" : "chat-bubble-outline"} 
              color={color} 
              size={size} 
            />
          ),
        }} 
      />
      <Tabs.Screen 
        name="meeting" 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons 
              name={color === ACTIVE_TINT_COLOR ? "video" : "video-outline"} 
              color={color} 
              size={size} 
            />
          ),
        }} 
      />
    </Tabs>
  )
}