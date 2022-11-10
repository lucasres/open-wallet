import { ReactNode } from "react";
import { TransactionTypeEnum } from "../../Models/Transaction";

export interface MoneyContextProps {
    currentTransaction?: TransactionTypeEnum,
    setCurrentTransaction: (type: TransactionTypeEnum) => void
}

export interface MoneyContextProviderProps {
    children: ReactNode
}