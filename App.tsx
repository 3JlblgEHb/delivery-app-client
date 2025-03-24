import Navigation from '@/navigation/navigation'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'



export default function App() {
	return (
		<>
		<SafeAreaProvider>
			<Navigation />
		</SafeAreaProvider>
		<StatusBar style='light' />
		</>
	)
}


