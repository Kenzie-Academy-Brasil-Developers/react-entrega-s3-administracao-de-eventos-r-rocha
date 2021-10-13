import { createContext, useState } from "react";

export const ConfraternizationContext = createContext([]);

export const ConfraternizationProvider = ({ children }) => {
    const [confraternizationList, setConfraternizationList] = useState([]);


    const addToConfraternizationList = (item) => {
        setConfraternizationList([...confraternizationList, item]);
    }

    const removeFromConfraternizationList = (item) => {
        const newDrinkList = confraternizationList.filter((drink) => drink.id !== item.id);
        setConfraternizationList(newDrinkList);
    }

    return (
        <ConfraternizationContext.Provider value={{ confraternizationList, addToConfraternizationList, removeFromConfraternizationList }}>
            {children}
        </ConfraternizationContext.Provider>
    )
}