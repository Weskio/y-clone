import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <p>Users</p>

      <ul className="users">
        <li>
          <Link href="/dashboard/users/1">User 1</Link>
        </li>
        <li>
          <Link href="/dashboard/users/2">User 2</Link>
        </li>
        <li>
          <Link href="/dashboard/users/3">User 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
