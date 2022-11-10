import { FC, useContext } from "react"
import { View } from "react-native"
import Header from "../../Components/Header"
import MoneyContext from "../../Context/MoneyContext"
import { TransactionTypeEnum } from "../../Models/Transaction"

const CreateTrasaction: FC = () => {
    const { currentTransaction } = useContext(MoneyContext)

    return (
        <View>
            <Header title={currentTransaction === TransactionTypeEnum.RECIVE
                ? "Adicionar recebido" : "Adicionar Despesa"} />
        </View>
    )
}

export default CreateTrasaction
