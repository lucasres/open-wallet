import { TransactionTypeEnum } from "../../Models/Transaction"

export interface PayloadState {
    value: number
    description: string
    type?: TransactionTypeEnum
}