import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <ul>
        <li className="flex flex-col">
          <Link href="/dashboard/customers">Customers</Link>
          <Link href="/dashboard/invoices">Invoices</Link>
        </li>
      </ul>
    </div>
  );
}
