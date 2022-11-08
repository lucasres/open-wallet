import { FC } from "react";
import { Touchable, TouchableHighlight, View } from "react-native";
import TextBold from "../TextBold";
import styles from "./styles";
import Feater from '@expo/vector-icons/Feather';
import { useContext } from "react";
import PrivacyContext from "../../Context/PrivacyContext";


const Header: FC = () => {
    const { see, toggleSee } = useContext(PrivacyContext)

    return (
        <View style={styles.container}>
            <TextBold text="Ola, Lucas" />
            <TouchableHighlight onPress={() => toggleSee()}>
                <Feater name={see ? "eye" : "eye-off"} 
                    style={styles.see} />
            </TouchableHighlight>
        </View>
    )
}

export default Header