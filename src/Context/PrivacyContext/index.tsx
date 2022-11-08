import { createContext, FC, ReactNode, useState } from "react";

interface PrivacyContextProps {
    see: boolean,
    toggleSee: () => void
}

interface PrivacyContextProviderProps {
    children?: JSX.Element
}

const PrivacyContext = createContext<PrivacyContextProps>({
    see: true,
    toggleSee: () => {},
})

export const PrivacyContextProvider: FC<PrivacyContextProviderProps> = ({ children }) => {
    const [see, setSee] = useState<boolean>(true)

    function toggleSee() {
        setSee(!see)
    } 

    return (
        <PrivacyContext.Provider
            value={{
                see,
                toggleSee,
            }}
        >
            {children}
        </PrivacyContext.Provider>
    )
} 

export default PrivacyContext