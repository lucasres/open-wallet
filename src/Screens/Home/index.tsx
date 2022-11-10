import { FC, useContext, useState } from "react";
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
import { HomeProps } from "./types";
import { RouteNamesEnum } from "../../Routes";
import { TransactionTypeEnum } from "../../Models/Transaction";
import MoneyContext from "../../Context/MoneyContext";

const Home: FC<HomeProps> = ({ navigation }) => {
    const [showTrxnModal, setShowTrxModal] = useState<boolean>(false)
    const { setCurrentTransaction } = useContext(MoneyContext)

    function handleShowCreateTransaction(type: TransactionTypeEnum) {
        setCurrentTransaction(type)
        navigation.navigate(RouteNamesEnum.CREATE_TRANSACTION)
    }

    return (
        <View>
            <Header title="Ola, Lucas" showSee />
            <Container>
                <TextBold style={{marginTop: 26, marginBottom: 12}} text="Resumo do mês" />
                <Bar />
                <Text style={styles.txLf}>Separamos 10% para investir no seu futuro</Text>
                <View style={styles.wrapperTrasactionsBtn}>
                    <Button customStyle={styles.reciveBtn}
                        text="Recebidos"
                        icon={<Feater name="plus" style={styles.iconTransactio} />}
                        onPress={() => handleShowCreateTransaction(TransactionTypeEnum.RECIVE)} />
                    <Button customStyle={styles.debitBtn}
                        text="Despesas"
                        icon={<Feater name="minus" style={styles.iconTransactio} />}
                        onPress={() => handleShowCreateTransaction(TransactionTypeEnum.DEBIT)} />
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
