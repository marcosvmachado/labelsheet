"use client"

import { createContext, ReactNode, useContext, useState } from "react";

type LabelContextType = {
    name: string
    weight: string
    price: string
    fDate: string
    lDate: string
    setName: (i: string) => void
    setWeight: (i: string) => void
    setPrice: (i: string) => void
    setFDate: (i: string) => void
    setLDate: (i: string) => void
}

export const LabelContext = createContext<null | LabelContextType>(null)

export const LabelProvider = ( {children}: {children: ReactNode} ) => {
    
    const [name, setName] = useState('') 
    const [weight, setWeight] = useState('')
    const [price, setPrice] = useState('')
    const [fDate, setFDate] = useState('')
    const [lDate, setLDate] = useState('')   
        
    
    return (
    <LabelContext.Provider value={ { name, setName, weight, setWeight, price, setPrice, fDate, setFDate, lDate, setLDate } }>
        {children}
    </LabelContext.Provider>
    )
}

export const useLabelContext = () => useContext(LabelContext)