import { LabelProvider } from "@/contexts/LabelContext";
import "./globals.css";
import { ReactNode } from "react";


type Props = {
  children: ReactNode
}

const Layout = ( {children}: Props ) => {
  return (
    <html suppressHydrationWarning>
      <body className="">
        <div>
          <LabelProvider>
            {children}
          </LabelProvider>
        </div>
      </body>
    </html>
  )
}

export default Layout;

