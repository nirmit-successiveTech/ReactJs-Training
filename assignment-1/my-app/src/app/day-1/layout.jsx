import Link from "next/link";

export default function Layout1({ children }) {
  return (
    <>
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
          <Link href="/day-1/show-user">
            <button>Question-2</button>
          </Link>{" "}
          <Link href="/day-1/showweather">
            <button>Question-3</button>
          </Link>{" "}
          <Link href="/day-1/counter">
            <button>Question-4</button>
          </Link>{" "}
          <Link href="/day-1/tasklist">
            <button>Question-5</button>
          </Link>{" "}
          <Link href="/day-1/buttons">
            <button>Question-6</button>
          </Link>
        </div>
      </div>
      <div style={{ paddingTop: 20 }}>{children}</div>
    </>
  );
}
