import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import AuthModal from "@/components/AuthModal";

const Navbar = async () => {
  const session = await auth();
  return (
    <div className="px-3 py-3 bg-white shadow-sm font-work-sans ">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src={"/logo.svg"} alt={"logo"} width={100} height={30} />
        </Link>
        {!session?.user ? <div className={"flex items-center gap-5"}></div> : <Link href={"/create"}>Create</Link>}
        {session?.user ? <form className={"flex justify-between gap-4"} action={
          async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }
        }>
          <Button variant={"default"} type={"submit"}>
            Sign Out
          </Button>


        </form> : <AuthModal />}
      </nav>
    </div>
  );
};
export default Navbar;
