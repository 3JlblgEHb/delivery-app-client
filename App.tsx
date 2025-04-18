import Navigation from '@/navigation/navigation'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import "./global.css"



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


