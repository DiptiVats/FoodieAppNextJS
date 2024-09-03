import Link from "next/link";

export default function Meals() {
  return (
    <h1>
      <p>Meals</p>
      <p>
        <Link href="/meals/share">Share Meals</Link>
        <br />
        <Link href="/meals/burger">burger</Link>
      </p>
    </h1>
  );
}
