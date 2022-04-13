import Link from "next/link";

export default function BoxHeader({ maximise, isMaximised, close }) {
  return (
    <div className="box__header">
      <p>Luke Lehane</p>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
      <div className="circles">
        <button
          className={`circle green ${!isMaximised ? "active" : ""}`}
          onClick={maximise}
        ></button>
        <button
          className={`circle amber ${isMaximised ? "active" : ""}`}
          onClick={maximise}
        ></button>
        <button className="circle red active" onClick={close}></button>
      </div>
    </div>
  );
}
