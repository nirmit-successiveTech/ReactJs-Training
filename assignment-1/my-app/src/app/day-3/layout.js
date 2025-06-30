
import AuthProvider from "./context/AuthContext.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";

export default function Layout({children}){
    return(
        <>
        <ThemeProvider>
         <AuthProvider>
            {children}
        </AuthProvider>
        </ThemeProvider>

        </>
    )
}