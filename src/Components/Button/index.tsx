import { FC, ReactNode } from "react";
import { StyleSheet, Text, TextStyle, TouchableHighlight, View, ViewStyle } from "react-native";
import styles from "./styles";

interface ButtonProps {
    text: string
    onPress?: () => any
    textStyle?: TextStyle,
    customStyle?: any
    icon?: ReactNode
}

const Button: FC<ButtonProps> = ({
    text,
    onPress,
    textStyle,
    customStyle,
    icon
}) => {
    return (
        <TouchableHighlight style={StyleSheet.compose(styles.button, customStyle)} onPress={onPress}>
            <View style={styles.contentBtn}>
                {icon !== undefined && <View style={styles.icon}>
                    {icon}
                </View>}
                <Text style={StyleSheet.compose(textStyle, styles.text)}>{text}</Text>
            </View>
        </TouchableHighlight>
    )
}

export default Button