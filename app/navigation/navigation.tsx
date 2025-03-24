import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { FC } from "react"
import { TypeRootStackParamList } from "./navogation.type"
import { routes } from "./routes"

const Stack = createNativeStackNavigator<TypeRootStackParamList>()


const Navigation: FC = () => {
    return (
        <NavigationContainer > 
           <Stack.Navigator
           screenOptions={
            {
                headerShown: false,
                contentStyle: {
                    backgroundColor: "#FFF"
                }
            }
           }
           >
            {routes.map(rote => (
                <Stack.Screen key={rote.name}
                {...rote} />
            ))}
           </Stack.Navigator>
        </NavigationContainer>
    )

}

    
export default Navigation