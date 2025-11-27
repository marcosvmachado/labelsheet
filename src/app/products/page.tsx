'use client'

import { Products } from "@/components/products"
import { useLabelContext } from "@/contexts/LabelContext"

export default function ProductsPage() {
    
    const labelCtx = useLabelContext()

    return (
        <Products   name={labelCtx?.name}
                    weight={labelCtx?.weight}
                    price={labelCtx?.price}
                    fDate={labelCtx?.fDate}
                    lDate={labelCtx?.lDate}
        
        />
    )
}