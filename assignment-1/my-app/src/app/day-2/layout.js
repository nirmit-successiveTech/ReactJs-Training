import Link from "next/link";
import CartProvider from "./context/ShoppingContext";
import ThemeProvider from "./context/ThemeContext";

export default function Layout2({ children }) {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="parent-button">
          <div className="heading-wrapper">
            <div>
              <h2>Please Select the Questions</h2>
            </div>
            <div>
              <Link href={'/'}>
                <button>Home</button>
              </Link>
            </div>
          </div>
          <div className="layout-button">
            <Link href="/day-2/question1">
              <button>Question-1</button>
            </Link>
            <Link href="/day-2/question2">
              <button>Question-2</button>
            </Link>
            <Link href="/day-2/question3">
              <button>Question-3</button>
            </Link>
            <Link href="/day-2/question4">
              <button>Question-4</button>
            </Link>
            <Link href="/day-2/question5">
              <button>Question-5</button>
            </Link>
            <Link href="/day-2/question6">
              <button>Question-6</button>
            </Link>
            <Link href="/day-2/question7">
              <button>Question-7</button>
            </Link>
            <Link href="/day-2/question8">
              <button>Question-8</button>
            </Link>
            <Link href="/day-2/question9">
              <button>Question-9</button>
            </Link>
            <Link href="/day-2/question10">
              <button>Question-10</button>
            </Link>
            <Link href="/day-2/question11">
              <button>Question-11</button>
            </Link>
            <Link href="/day-2/question12">
              <button>Question-12</button>
            </Link>
            <Link href="/day-2/question13">
              <button>Question-13</button>
            </Link>
            <Link href="/day-2/question14">
              <button>Question-14</button>
            </Link>
            <Link href="/day-2/question15">
              <button>Question-15</button>
            </Link>
            <Link href="/day-2/question16">
              <button>Question-16</button>
            </Link>
            <Link href="/day-2/question17">
              <button>Question-17</button>
            </Link>
            <Link href="/day-2/question18">
              <button>Question-18</button>
            </Link>
            <Link href="/day-2/question19">
              <button>Question-19</button>
            </Link>
          </div>
        </div>
        {children}
      </CartProvider>
    </ThemeProvider>
  );
}
