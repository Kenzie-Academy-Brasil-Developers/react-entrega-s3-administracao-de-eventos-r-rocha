import { createContext, useState } from "react";

export const GraduationContext = createContext([]);

export const GraduationProvider = ({ children }) => {
    const [drinkList, setDrinkList] = useState([]);


    const addToList = (item) => {
        setDrinkList([...drinkList, item]);
    }

    const removeFromList = (item) => {
        const newDrinkList = drinkList.filter((drink) => drink.id !== item.id);
        setDrinkList(newDrinkList);
    }

    return (
        <GraduationContext.Provider value={{ drink, addToList, removeFromList }}>
            {children}
        </GraduationContext.Provider>
    )

}