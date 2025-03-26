import Loader from "@/components/ui/Loader"
import { useTypedNavigation } from "@/hock/useTypedNavigation"
import { TypeRootStackParamList } from "@/navigation/navogation.type"
import { IAuthFormData } from "@/types/auth.interface"
import { useNavigation } from "@react-navigation/native"
import { FC, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Text, View, TextInput } from "react-native"
import Button from "../../ui/button/Button"


const Auth: FC = () => {
    const [isReg, setIsReg] = useState(false)
    const { handleSubmit, reset, control } = useForm<IAuthFormData>({
        mode: "onChange",
    })
    const isLoading = false 

    const onSubmit: SubmitHandler<IAuthFormData> = (data) => {
        console.log(data)
    }

    return (
        <View className="mx-2 items-center justify-center h-full">
            <View className="w-9/12">
                <Text className="text-center text-black text-3xl font-medium mb-8">
                    {isReg ? "Sign Up" : "Login"}
                </Text>
                {isLoading ? ( <Loader />
                    ) : (
                <> 
                    {/* Auth */}
                <Button onPress={handleSubmit(onSubmit)}>
                    {isReg ? "Sign Up" : "Login"}
                    </Button> 
                    </>
                )}
            </View>
        </View>
    )
}

export default Auth
