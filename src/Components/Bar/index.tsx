import { FC, useContext } from "react";
import { Text, View } from "react-native";
import PrivacyContext from "../../Context/PrivacyContext";
import styles from "./styles";

const Bar: FC = () => {
    const { see } = useContext(PrivacyContext)

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.expenses}>
                    <Text>R$ {see ? '1.000,00' : '*******'}</Text>
                </View>
                <Text style={styles.free}>R$ {see ? '3.000,00' : '*******'}</Text>
                <View style={styles.investment}>
                    <Text>{see ? '10%' : '***'}</Text>
                </View>
            </View>
        </View>
    )
}

export default Bar
