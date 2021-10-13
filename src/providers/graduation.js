import { createContext, useState } from "react";

export const GraduationContext = createContext([]);

export const GraduationProvider = ({ children }) => {
    const [graduationList, setGraduationList] = useState([]);


    const addToGraduationList = (item) => {
        setGraduationList([...graduationList, item]);
    }

    const removeFromGraduationList = (item) => {
        const newDrinkList = graduationList.filter((drink) => drink.id !== item.id);
        setGraduationList(newDrinkList);
    }

    return (
        <GraduationContext.Provider value={{ graduationList, addToGraduationList, removeFromGraduationList }}>
            {children}
        </GraduationContext.Provider>
    )
}