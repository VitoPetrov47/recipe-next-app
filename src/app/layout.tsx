"use client"

import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";
import Header from "@/components/navigation/header";
import {Provider} from "react-redux";
import {store} from "@/store";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <html lang="en">
            <body>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <Header/>
                    <main className={"mx-auto max-w-[1220px] px-5"}>
                        {children}
                    </main>
                </QueryClientProvider>
            </Provider>
            </body>
        </html>
    );
}