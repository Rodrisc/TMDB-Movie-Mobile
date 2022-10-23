import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { Details } from '../screens/Details'
import { Home } from '../screens/Home'
import { SigIn } from '../screens/SigIn'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name='sigin' component={SigIn} />
                <Screen name='home' component={Home} />
                <Screen name='details' component={Details} />
            </Navigator>
        </NavigationContainer>
    )
}