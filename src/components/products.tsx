import Image from "next/image"

type Props = {
  name?: string
  weight?: string
  price?: string
  fDate?: string
  lDate?: string
  itemSelected?: string
}

const tempero = "bg-[#147f0c]"
const doce = "bg-[#fea50d]"


export const Products = ({ name, weight, price, fDate, lDate, itemSelected }: Props) => {
  return (
     
     
     <div className="h-screen w-screen flex justify-center items-center text-white">
    { itemSelected === "PIMENTA" &&  
        <div
         className={`${tempero} font-black`}
         style={{
           width: "257mm",   // largura real da etiqueta
           height: "75.8mm",  // altura real da etiqueta
         }}
       >
         <div className="w-[100%] h-[100%] flex flex-col justify-center items-center">
            <div className="w-[95%] h-[90%] flex justify-center items-center border-4">

              <div className="w-full h-full flex flex-col">
                <div className="flex-1 flex  items-center bg-[#1d3e17]">
                  <div className="relative">
                    <Image
                    src="/assets/sim.png"
                    alt=""
                    width={120}
                    height={120}
                    className="object-cover"
                    />
                  </div>
                  <span className="text-6xl ml-40">JURUBEBA</span>
                </div>
                <div className="flex-1 flex text-3xl bg-[#1d3e17]">
                  <div className="flex-1 flex flex-col justify-center items-center text-">
                    <span>PESO LÍQUIDO: 500ML</span>
                    <span className="mt-5">FABRIC: 12/2025</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center items-center">
                    <span>PESO DRENADO: 350ML</span>
                    <span className="mt-5">VAL: 12/2027</span>
                  </div>
                </div>
              </div>
            </div>
         </div>
       </div> 
        } 
       {itemSelected === "TEMPERO" &&      
       <div
         className={`text-black ${tempero} font-bold`}
         style={{
           width: "127mm",   // largura real da etiqueta
           height: "50.8mm",  // altura real da etiqueta
         }}
       >
         <div className="w-[100%] h-[100%] flex flex-col">
           <div className="flex-3 flex justify-center items-center">
             <div className="w-[95%] h-[75%] bg-white flex justify-between p-[0.5mm]">
                <div className="flex-2 relative">
                  <Image
                  src="/assets/sim.png"
                  alt="deu ruim"
                  fill
                  className="object-cover"
                  />
                </div>
                <div className="flex-8 flex-col flex text-xl font-black">
                  <div className="flex-1 flex justify-center items-center">
                    <span className="font-black text-3xl ">{name}</span>
                  </div>
                  <div className="flex-1 flex justify-between items-center">
                    <span className="ml-2 text-2xl">{`${weight}g`}</span>
                    <span className="mr-2 text-2xl">{`R$${price},00`}</span>
                  </div>
                </div>
             </div>
           </div>
           <div className="flex-2 flex">
             <div className="flex-9 flex flex-col justify-center items-center text-[16pt]">
               <span className="text-white">FAB:</span>
               <div className="w-[90%] h-[45%] flex justify-center items-center bg-white">
                 <span>{fDate}</span>
               </div>
             </div>
             <div className="flex-2"></div>
             <div className="flex-9 flex flex-col justify-center items-center text-[16pt]">
               <span className="text-white"> VAL:</span>
               <div className="w-[90%] h-[45%] flex justify-center items-center bg-white">
                 <span>{lDate}</span>
               </div>
             </div>
           </div>
         </div>
       </div>
       }
       {itemSelected === "DOCE" &&
       <div
         className={`text-black ${doce} font-bold`}
         style={{
           width: "127mm",   // largura real da etiqueta
           height: "50.8mm",  // altura real da etiqueta
         }}
       >
         <div className="w-[100%] h-[100%] flex flex-col">
           <div className="flex-3 flex justify-center items-center">
             <div className="w-[95%] h-[75%] bg-white flex justify-between p-[0.5mm]">
                <div className="flex-2 relative">
                  <Image
                  src="/assets/sim.png"
                  alt="deu ruim"
                  fill
                  className="object-cover"
                  />
                </div>
                <div className="flex-8 flex-col flex text-xl font-black">
                  <div className="flex-1 flex justify-center items-center">
                    <span className="font-black text-3xl ">{name}</span>
                  </div>
                  <div className="flex-1 flex justify-between items-center">
                    <span className="mr-2 text-2xl">{`R$${price},00`}</span>
                  </div>
                </div>
             </div>
           </div>
           <div className="flex-2 flex">
             <div className="flex-9 flex flex-col justify-center items-center text-[16pt]">
               <span className="text-white">FAB:</span>
               <div className="w-[90%] h-[45%] flex justify-center items-center bg-white">
                 <span>{fDate}</span>
               </div>
             </div>
             <div className="flex-2"></div>
             <div className="flex-9 flex flex-col justify-center items-center text-[16pt]">
               <span className="text-white"> VAL:</span>
               <div className="w-[90%] h-[45%] flex justify-center items-center bg-white">
                 <span>{lDate}</span>
               </div>
             </div>
           </div>
         </div>
       </div>
       }
     </div>
     
  );
};
