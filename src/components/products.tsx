import Image from "next/image"

type Props = {
  name?: string
  weight?: string
  price?: string
  fDate?: string
  lDate?: string
}

export const Products = ({ name, weight, price, fDate, lDate }: Props) => {
  return (
     <div className="h-screen w-screen flex justify-center items-center">
      <div
         className="text-black bg-[#147f0c] font-bold"
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
                    <span className="font-black text-3xl">{name}</span>
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
     </div>
     
    /* 
    <div className="h-screen w-screen flex justify-center items-center">
      <div
        className="text-white bg-[#FF1A1A] font-black"
        style={{
          width: "127mm",   // largura real da etiqueta
          height: "50.8mm",  // altura real da etiqueta
        }}
      >
        <div className="w-20 h-20 relative">
          <Image
            src="/assets/sim.png"
            alt=""
            fill
            className="object-cover mt-3 ml-3"
          />
          <div className="w-full h-full absolute flex justify-center "
            style={{
              width: "127mm", 
              height: "50.8mm",  
            }}
          >
            <div className="w-[75%] h-full flex flex-col text-center">
              <span className="text-3xl mt-2">{name}</span>
              <span className="my-1 text-2xl">{`${weight}g`}</span>
              <span className="mb-1 text-2xl">{`R$${price},00`}</span>
              <span>{`Fab. ${fDate}`}</span>
              <span>{`Venc. ${lDate}`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
*/



  );
};
