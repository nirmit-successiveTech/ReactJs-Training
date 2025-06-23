import CartProvider from "./context/ShoppingContext";
import ThemeProvider from "./context/ThemeContext";

export default function Layout({ children }) {
  return (
    <ThemeProvider>
      <CartProvider>
        <div>this is header</div>
        {children}
      </CartProvider>
    </ThemeProvider>
  );
}
