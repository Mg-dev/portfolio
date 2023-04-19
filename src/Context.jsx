import React, { useContext,useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [show, setShow] = useState(false);
    const handleCancel = () => {
        setShow(false);
    }
    return (
        <AppContext.Provider value={{show,setShow,handleCancel}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}

export const useGlobalContext = () => {
    return useContext(AppContext)
}