import Link from "next/link";
import Hello from "./components/hello";

export default function Home() {
  return (
  <div className="">
    <ul className="links">
      <li><Link href='/dashboard/analytics'>Dashboard</Link></li>
      <li><Link href="/dashboard/users">Users</Link></li>
      <li><Link href="about">About</Link></li>
    </ul>
  </div>
  );
}
