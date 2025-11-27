"use client"

import { useLabelContext } from "@/contexts/LabelContext"
import { useRouter } from "next/navigation"
import { useState } from "react"

export const Label = () => {
    
const labelCtx = useLabelContext()
    
    const router = useRouter()

    const handleGenerateButton = () => {
        alert('ETIQUETA GERADA COM SUCESSO!')
        router.push("/products")
      }
    
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-black text-white font-bold">
            <div className="w-240 h-60 border-2 border-gray-500 rounded-md flex flex-col">
                <div className="flex-2 flex justify-center items-center">
                    <span className="text-4xl mt-5">INSIRA OS DADOS DA ETIQUETA</span>
                </div>
                <div className="flex-6 flex justify-center items-center">
                    <div className="w-full h-[40px] flex ml-2 mr-2">
                        <div className="flex-1 m-1 border-2 border-blue-500 rounded-md">
                            <input type="text" placeholder="NOME DO PRODUTO" className="w-full h-full outline-none text-center"
                            value={labelCtx?.name}
                            onChange={e => labelCtx?.setName(e.target.value)}
                            />
                        </div>
                        <div className="flex-1 m-1 border-2 border-blue-500 rounded-md">
                            <input type="text" placeholder="PESO" className="w-full h-full outline-none text-center"
                            value={labelCtx?.weight}
                            onChange={e => labelCtx?.setWeight(e.target.value)}
                            />
                        </div>
                        <div className="flex-1 m-1 border-2 border-blue-500 rounded-md">
                            <input type="text" placeholder="VALOR" className="w-full h-full outline-none text-center"
                            value={labelCtx?.price}
                            onChange={e => labelCtx?.setPrice(e.target.value)}
                            />
                        </div>
                        <div className="flex-1 m-1 border-2 border-blue-500 rounded-md">
                            <input type="text" placeholder="DATA DE FABRICAÇÃO" className="w-full h-full outline-none text-center"
                            value={labelCtx?.fDate}
                            onChange={e => labelCtx?.setFDate(e.target.value)}
                            />
                        </div>
                        <div className="flex-1 m-1 border-2 border-blue-500 rounded-md">
                            <input type="text" placeholder="VALIDADE" className="w-full h-full outline-none text-center"
                            value={labelCtx?.lDate}
                            onChange={e => labelCtx?.setLDate(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex-2 flex justify-center items-center mb-5">
                    <button onClick={handleGenerateButton} className="w-120 h-10 bg-blue-500 rounded-md cursor-pointer">GERAR ETIQUETA</button>
                </div>
            </div>
        </div>
    )
}