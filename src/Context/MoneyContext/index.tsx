import { format } from "date-fns";
import { createContext, FC } from "react";
import { MoneyContextProps, MoneyContextProviderProps } from "./types";


const MoneyContext = createContext<MoneyContextProps>({
    day: ''
})

export const MoneyContextProvider: FC<MoneyContextProviderProps> = ({ children }) => {
    console.log(format(new Date(), 'uuuu_LL_dd'));
    
    return (
        <MoneyContext.Provider
            value={{
                day: format(new Date(), 'uuuu_LL_ee')
            }}
        >
            {children}
        </MoneyContext.Provider>
    )
}

export default MoneyContext
