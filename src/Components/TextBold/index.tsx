import { FC } from "react";
import { Text, TextStyle } from "react-native";
import styles from "./styles";

interface TextBoldProps {
    text: string
    style?: TextStyle
} 

const TextBold: FC<TextBoldProps> = ({ text, style }) => {
    return (
        <Text style={{...styles.text, ...style}}>
            {text}
        </Text>
    )
}

export default TextBold
