import { createContext, FC, ReactNode, useState } from "react";
import { PrivacyContextProps, PrivacyContextProviderProps } from "./types";

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