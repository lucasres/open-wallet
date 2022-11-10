import { FC, useContext, useEffect, useState } from "react"
import { SafeAreaView, View } from "react-native"
import Header from "../../Components/Header"
import MoneyContext from "../../Context/MoneyContext"
import { TransactionTypeEnum } from "../../Models/Transaction"
import styles from "./styles"
import CurrencyInput from 'react-native-currency-input';
import { PayloadState } from "./types"
import Container from "../../Components/Container"
import TextInput from "../../Components/TextInput"
import styleTextInput from "../../Components/TextInput/styles"
import TextBold from "../../Components/TextBold"
import Button from "../../Components/Button"

const CreateTrasaction: FC = () => {
    const { currentTransaction } = useContext(MoneyContext)
    const [payload, setPayload] = useState<PayloadState>({
        value: 0,
        description: '',
    })

    const handleChangeValue = (value: number | null) => {
        if (value === null) {
            value = 0
        }

        let newState = {...payload, value}
        setPayload(newState)
    }

    const handleChangeDescription = (description: string) => {
        let newState = {...payload, description}
        setPayload(newState)
    }
    
    useEffect(() => {
        let newState = {...payload, type: currentTransaction}

        setPayload(newState)
    }, [])

    return (
        <SafeAreaView>
            <Header title={currentTransaction === TransactionTypeEnum.RECIVE
                ? "Adicionar recebido" : "Adicionar Despesa"} />
            <Container>
                <View style={styles.container}>
                    <TextBold text="Valor" />
                    <CurrencyInput style={styleTextInput.input} 
                        value={payload.value}
                        prefix="R$ "
                        onChangeValue={handleChangeValue} />
                    <TextInput value={payload.description} 
                        onChange={handleChangeDescription}
                        title="Descrição"
                        customStyles={{height: 80}} />
                    <Button text="Criar" />
                </View>
            </Container>
        </SafeAreaView>
    )
}

export default CreateTrasaction
