import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Scan presenter",
    description: "Visualization tool for csv and txt data files from scanning setups."
}
export default function RootLayout({
    children
                                   }
                                   : {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                {/* Layout UI */}
                <main>{children}</main>
            </body>
        </html>
    )
}