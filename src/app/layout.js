
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import {ThemeProvider} from "next-themes";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "cinematic",
    description: "find the movie you are looking for.",
};

export default function RootLayout({children}) {

    return (
        <html lang="en">
            <body className={inter.className}>
            <ThemeProvider
                attribute="class"
                forcedTheme={"dark"}
            >
                <main className={"flex flex-col w-full"}>
                    <Navbar />
                        <div className={"flex-grow"}>
                            {children}
                        </div>
                    {/*Footer*/}
                </main>
            </ThemeProvider>
            </body>
        </html>
    );
}
