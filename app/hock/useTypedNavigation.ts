import { TypeRootStackParamList } from "@/navigation/navogation.type";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export const useTypedNavigation = () => useNavigation<NavigationProp<TypeRootStackParamList>>()