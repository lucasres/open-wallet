import { FC } from "react";
import { Text, View } from "react-native";
import Bar from "../../Components/Bar";
import Button from "../../Components/Button";
import Container from "../../Components/Container";
import Header from "../../Components/Header";
import TextBold from "../../Components/TextBold";
import styles from "./styles";
import Feater from '@expo/vector-icons/Feather';
import Divider from "../../Components/Divider";

const Home: FC = () => {
    return (
        <View>
            <Header />
            <Container>
                <TextBold style={{marginTop: 26, marginBottom: 12}} text="Resumo do mês" />
                <Bar />
                <Text style={styles.txLf}>Separamos 10% para investir no seu futuro</Text>
                <View style={styles.wrapperTrasactionsBtn}>
                    <Button customStyle={styles.reciveBtn}
                        text="Recebidos"
                        icon={<Feater name="plus" style={{fontSize: 16}} />} />
                    <Button customStyle={styles.debitBtn}
                        text="Despesas"
                        icon={<Feater name="minus" style={{fontSize: 16}} />} />
                </View>
                <Divider />
            </Container>
        </View>
    )
}

export default Home
