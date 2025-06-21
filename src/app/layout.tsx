import "@/scss/main.scss";
import React from "react";
import { Metadata } from "next";
import ReduxProvider from "@/providers/ReduxProvider";
import Navbar from "@/components/modules/Navbar";

export const metadata: Metadata = {
    title: "DevYard",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main id="main">
                    <ReduxProvider>{children}</ReduxProvider>
                </main>
            </body>
        </html>
    )
}
