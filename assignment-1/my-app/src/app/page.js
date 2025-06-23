import Greeting from "../components/Greeting";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="home-wrapper">
        <div>
          <Link href={'/day-1'}>
          <button>Assignment 1</button>
          </Link>
        </div>
        <div>
          <Link href={'/day-2'}>
          <button>Assignment 2</button>
          </Link>
        </div>
      </div>
      <Greeting />

    </>
  );
}
