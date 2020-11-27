import Head from "next/head"
import Footer from "./footer"

export default function Layout({ children }) {
    return <div className="bg-black text-white font-mono flex flex-col min-h-screen justify-between">
        <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="selection-color-primary">{children}</div>
        <Footer />
    </div>
}