import Greeting from "../components/Greeting";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Greeting />
      <h2>Here are the following Pages:</h2>

      <div className="parent-button">
        <Link href="/day-1/show-user">
          <button>Question-2</button>
        </Link>{ " "}
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
    </>
  );
}
