import Link from "next/link";

export default function page() {
  return (
    <div>
      <h1>Customers page</h1>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
