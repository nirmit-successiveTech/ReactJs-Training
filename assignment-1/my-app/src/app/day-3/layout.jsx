import AuthProvider from "./context/AuthContext";







export default function Layout3({ children }) {
  return (

        <AuthProvider>
            {children}
        </AuthProvider>
  );
}
