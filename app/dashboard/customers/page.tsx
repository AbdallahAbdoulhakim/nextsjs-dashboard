import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers",
};

export default function page() {
  return (
    <div>
      <h1>Customers page</h1>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
