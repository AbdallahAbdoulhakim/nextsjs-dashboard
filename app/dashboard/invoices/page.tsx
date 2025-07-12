import Link from "next/link";

export default function page() {
  return (
    <div>
      <h1>Invoices page</h1>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
