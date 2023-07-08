import React, { useContext,useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [show, setShow] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const toggleModal = () => {
        setIsOpen(!isOpen);
      };
    const handleCancel = () => {
        setShow(false);
    }
    return (
        <AppContext.Provider value={{show,setShow,handleCancel,isOpen,setIsOpen,toggleModal}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider}

export const useGlobalContext = () => {
    return useContext(AppContext)
}