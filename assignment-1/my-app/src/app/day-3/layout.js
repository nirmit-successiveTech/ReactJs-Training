
import Navbar from "@/components/Navbar.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";

export default function Layout({children}){
    return(
        <>
        <ThemeProvider>
         <AuthProvider>
        <Navbar />

            {children}
        </AuthProvider>
        </ThemeProvider>

        </>
    )
}