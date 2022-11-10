import { FC } from "react";
import { View } from "react-native";
import styles from "./styles";

interface ContainerProps {
    children: React.ReactNode
}

const Container: FC<ContainerProps> = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default Container
