import React from 'react'
import { Tabs } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const DashboardLayout = () => {
  return (
     <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'black',
            tabBarLabelStyle: {
                fontSize: 12
            },
            tabBarStyle:{
                margin: 10,
                borderRadius: 10,
            },            
            tabBarShowLabel: true
        }} 
     >
        <Tabs.Screen name='index'
            options={{
                title: 'Home',  
                tabBarIcon: ({ focused }) => <MaterialCommunityIcons name={focused ? 'home': 'home-outline'} size={24} color='black' />
            }}
        
        />
     </Tabs>
  )
}

export default DashboardLayout