import { FC } from "react";
import { Text } from "react-native";
import styles from "./styles";

interface TextBoldProps {
    text: string
} 

const TextBold: FC<TextBoldProps> = ({ text }) => {
    return (
        <Text style={styles.text}>
            {text}
        </Text>
    )
}

export default TextBold
