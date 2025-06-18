import Greeting from "./components/Greeting";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Greeting />
      <h2>Here are the following Pages:</h2>

      <div className="parent-button">
        <Link href="/show-user">
          <button>Question-2</button>
        </Link>{ " "}
        <Link href="/showweather">
          <button>Question-3</button>
        </Link>{" "}
        <Link href="/counter">
          <button>Question-4</button>
        </Link>{" "}
        <Link href="/tasklist">
          <button>Question-5</button>
        </Link>{" "}
        <Link href="/buttons">
          <button>Question-6</button>
        </Link>
      </div>
    </>
  );
}
