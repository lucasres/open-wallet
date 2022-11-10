import { FC } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Bar: FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.expenses}>
                    <Text>R$ 1.000,00</Text>
                </View>
                <Text style={styles.free}>R$ 3.000,00</Text>
                <View style={styles.investment}>
                    <Text>10%</Text>
                </View>
            </View>
        </View>
    )
}

export default Bar
