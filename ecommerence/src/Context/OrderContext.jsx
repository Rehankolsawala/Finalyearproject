import { createContext, useState } from "react";

export const OrderContext = createContext({
    togglePlaceOrder: () => { },
    placeOrder: false
});

export const OrderContextProvider = ({children}) => {
    const [placeOrder, setPlaceOrder] = useState(false);

    const togglePlaceOrder = () => setPlaceOrder(true);

    const orderCtx = {
        togglePlaceOrder: togglePlaceOrder,
        placeOrder: placeOrder
    }

    return <OrderContext.Provider value={orderCtx}>
        {children}
    </OrderContext.Provider>
}