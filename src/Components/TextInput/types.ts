import { TextStyle } from "react-native"

export interface TextInputProps {
    value: any
    onChange: (value: string) => any
    placeholder?: string
    title?: string
    customStyles: TextStyle
}