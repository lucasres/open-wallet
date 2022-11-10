import { FC } from "react";
import { Text, View } from "react-native";
import Bar from "../../Components/Bar";
import Container from "../../Components/Container";
import Header from "../../Components/Header";
import TextBold from "../../Components/TextBold";
import styles from "./styles";

const Home: FC = () => {
    return (
        <View>
            <Header />
            <Container>
                <TextBold style={{marginTop: 26, marginBottom: 12}} text="Resumo do mês" />
                <Bar />
                <Text style={styles.txLf}>Separamos 10% para investir no seu futuro</Text>
            </Container>
        </View>
    )
}

export default Home
