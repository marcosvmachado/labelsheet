"use client"

import { useLabelContext } from "@/contexts/LabelContext"
import { category, doces, pimentas, seasoning } from "@/data/data"
import { Seasoning } from "@/types/seasoning"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export const Label = () => {
  
    const labelCtx = useLabelContext()
    
    const [categoryValue, setCategoryValue] = useState("")
    const [item, setItem] = useState("")
    const [object, setObject] = useState<Seasoning>()

    const [fDate, setfDate] = useState('')
    const [lDate, setlDate] = useState('')

    const date = new Date
    const month = date.getMonth() 
    const year = date.getFullYear()

    useEffect(() => {
        if(categoryValue === "DOCE"){
            setfDate(`0${date.getMonth() + 1}/${year}`)
            setlDate(`0${date.getMonth() + 4}/${year}`)
        } else if(categoryValue === "TEMPERO"){
            setfDate(`0${date.getMonth() + 1}/${year}`)
            setlDate(`0${date.getMonth() + 1}/${year + 2}`)
        }
    },[categoryValue])
    
    useEffect(() => {
        if(item) {
            setObject(JSON.parse(item))
        }     
    },[item])

    useEffect(() => {
    if(object){
           labelCtx?.setName(object.name)
           labelCtx?.setWeight(object.weight)
           labelCtx?.setPrice(object.price)
           labelCtx?.setFDate(fDate)
           labelCtx?.setLDate(lDate)
           labelCtx?.setItemSelected(categoryValue)
        }
    },[object])

    const router = useRouter()

    const handleGenerateButton = () => {
                       
        router.push("/products")
        console.log(labelCtx?.itemSelected)

      }

    return (
        <div className="w-screen h-screen flex justify-center font-bold bg-black">
            <div className="w-240 h-60 border-2 border-gray-500 rounded-md flex flex-col mt-40">
                <div className="flex-2 flex justify-center items-center">
                    <span className="text-4xl mt-5 text-white">INSIRA OS DADOS DA ETIQUETA</span>
                </div>
                <div className="flex-6 flex justify-center items-center">

                        <div className="m-1 text-white bg-black mr-10">
                            <select name="" id="" className="bg-black border-2 p-2 border-blue-500 rounded-md outline-none"
                            value={categoryValue}
                            onChange={e => setCategoryValue(e.target.value)}
                            >
                                <option value="">Selecione a categoria:</option>
                                {category.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </select>
                        </div> 
                        
                        <div className="m-1 text-white bg-black">
                            <select name="" id="" className="bg-black border-2 p-2 border-blue-500 rounded-md outline-none"
                            onChange={e => setItem(e.target.value)}
                            >
                                <option value="">Selecione o produto:</option>
                                {
                                    categoryValue === "TEMPERO" && 
                                    seasoning.map((item, index) => (
                                        <option key={index} value={JSON.stringify(item)}>{item.name}</option>
                                    ))
                                }
                                {
                                    categoryValue === "DOCE" &&
                                    doces.map((item, index) => (
                                        <option key={index} value={JSON.stringify(item)}>{item.name}</option>
                                    ))
                                }
                                {
                                    categoryValue === "PIMENTA" &&
                                    pimentas.map((item, index) => (
                                        <option key={index} value={JSON.stringify(item)}>{item.name}</option>
                                    ))
                                }
                            </select>
                        </div> 
                   
                </div>
                <div className="flex-2 flex justify-center items-center mb-5">
                    <button onClick={handleGenerateButton} className="w-120 h-10 bg-blue-500 rounded-md cursor-pointer text-white">GERAR ETIQUETA</button>
                </div>
            </div>
        </div>
    )
}