import { createContext, useState } from "react";

export const WeddingContext = createContext([]);

export const WeddingProvider = ({ children }) => {
    const [weddingList, setWeddingList] = useState([]);


    const addToWeddingList = (item) => {
        setWeddingList([...weddingList, item]);
    }

    const removeFromWeddingList = (item) => {
        const newDrinkList = weddingList.filter((drink) => drink.id !== item.id);
        setWeddingList(newDrinkList);
    }

    return (
        <WeddingContext.Provider value={{ weddingList, addToWeddingList, removeFromWeddingList }}>
            {children}
        </WeddingContext.Provider>
    )
}