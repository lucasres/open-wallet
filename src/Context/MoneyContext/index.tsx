import { format } from "date-fns";
import { createContext, FC, useState } from "react";
import { MoneyContextProps, MoneyContextProviderProps } from "./types";
import { TransactionTypeEnum } from "../../Models/Transaction";


const MoneyContext = createContext<MoneyContextProps>({
    currentTransaction: undefined,
    setCurrentTransaction: (type: TransactionTypeEnum) => {}
})

export const MoneyContextProvider: FC<MoneyContextProviderProps> = ({ children }) => {
    const [currentTransaction, setCurrentTransaction] = useState<TransactionTypeEnum>()

    const handleSetCurrentTransaction = (type: TransactionTypeEnum) => {
        setCurrentTransaction(type)
    }
    
    return (
        <MoneyContext.Provider
            value={{
                currentTransaction,
                setCurrentTransaction: handleSetCurrentTransaction
            }}
        >
            {children}
        </MoneyContext.Provider>
    )
}

export default MoneyContext
