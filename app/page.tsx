import { auth } from "@/server/auth";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/auth/logout-button";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  // if (!session) {
  //   redirect("/login");
  // }


  return (
    <div>
      <nav className=" flex justify-center w-full h-20px">
        <ul className="flex items-center gap-x-20">
          <li>
            <Link href="/login">
              Sign-up
            </Link>
          </li>
          <li>
            <Link href="/register">
              register
            </Link>
          </li>
          <li>
            <Link href="/login">
              contact
            </Link>
          </li>
          <li>
            <LogoutButton />

          </li>
        </ul>

      </nav>
      <h1 className="flex text-4xl  items-center">this is home page</h1>
    </div>
  );
}
