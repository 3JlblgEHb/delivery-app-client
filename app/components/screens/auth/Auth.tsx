import { useTypedNavigation } from "@/hock/useTypedNavigation"
import { TypeRootStackParamList } from "@/navigation/navogation.type"
import { IAuthFormData } from "@/types/auth.interface"
import { useNavigation } from "@react-navigation/native"
import { FC, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Text, View } from "react-native"

const Auth: FC = () => {

    const [isReg , setIsReg ] = useState(false)

    const {handleSubmit , reset, control} = useForm<IAuthFormData>({
        mode : 'onChange'
    })

    const onSubmit: SubmitHandler<IAuthFormData> = data =>  {
        console.log(data)
    }
    const isLoading = false 
    return (

        <View className="mx-2 items-center justify-center h-full">
                <View className="w-9/12">
                        <Text className="text-center text black text-3xl font-medium mb-08">
                             {isReg ? 'Sign Up' : 'Login'}
                        </Text>
                    {isLoading ? (
                        
                    )}
                </View>  
        </View>
    )

}

    
export default Auth