import { FC, useState } from "react";
import { Text, View } from "react-native";
import Bar from "../../Components/Bar";
import Button from "../../Components/Button";
import Container from "../../Components/Container";
import Header from "../../Components/Header";
import TextBold from "../../Components/TextBold";
import styles from "./styles";
import Feater from '@expo/vector-icons/Feather';
import Divider from "../../Components/Divider";
import Modal from "../../Components/Modal";

const Home: FC = () => {
    const [showTrxnModal, setShowTrxModal] = useState<boolean>(false)

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
                        icon={<Feater name="plus" style={styles.iconTransactio} />}
                        onPress={() => setShowTrxModal(true)} />
                    <Button customStyle={styles.debitBtn}
                        text="Despesas"
                        icon={<Feater name="minus" style={styles.iconTransactio} />} />
                </View>
                <Divider />
            </Container>
            <Modal visible={showTrxnModal}>
                <View>
                    <Text>Ola mundo</Text>
                </View>
            </Modal>
        </View>
    )
}

export default Home
