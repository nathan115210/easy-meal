import Image from "next/image";
import Link from "next/link";
import React from "react";

import { auth, signOut } from "@/auth";
import AuthModal from "@/components/AuthModal";
import { Button } from "@/components/ui/button";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="bg-white px-3 py-3 font-work-sans shadow-sm">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image src={"/logo.svg"} alt={"logo"} width={100} height={30} />
        </Link>
        <div className={"flex items-center gap-5"}>
          {/*TODO: ADD create action back*/}
          {/*{!session?.user ? (
            <div className={"flex items-center gap-5"}></div>
          ) : (
            <Link className={"btn"} href={"/create"}>
              Create
            </Link>
          )}*/}
          {session?.user ? (
            <form
              className={"flex justify-between gap-4"}
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <Button variant={"default"} type={"submit"}>
                Sign Out
              </Button>
            </form>
          ) : (
            <AuthModal />
          )}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
