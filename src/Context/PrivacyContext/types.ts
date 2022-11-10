import { ReactNode } from "react"

export interface PrivacyContextProps {
    see: boolean,
    toggleSee: () => void
}

export interface PrivacyContextProviderProps {
    children?: ReactNode
}