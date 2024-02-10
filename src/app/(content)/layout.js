'use client'
import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";

export default function ContentRootLayout({children}){
    return(
        <>
        <Header />
        {children}
        <Footer />
        </>
    )
}