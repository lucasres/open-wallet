import { FC } from "react"
import { StyleSheet, TextInput as TextInputC, View } from "react-native"
import TextBold from "../TextBold"
import styles from "./styles"
import { TextInputProps } from "./types"

const TextInput: FC<TextInputProps> = ({
    value,
    onChange,
    placeholder,
    title,
}) => {
    return (
        <View style={styles.container}>
            {title !== undefined && <TextBold text={title} />}
            <TextInputC value={value}
                onChangeText={onChange}
                placeholder={placeholder}
                style={styles.input}>
            </TextInputC>
        </View>
    )
}

export default TextInput
