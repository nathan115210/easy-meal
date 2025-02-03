import React from "react";
import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export enum AuthClient {
  GITHUB = "github",
  GOOGLE = "google",
  FACEBOOK = "facebook",
  EMAIL = "email",
}

const SignInButton = async ({ authClient }: { authClient: AuthClient }) => {
  return (
    <form className={"flex justify-between gap-4"} action={
      async () => {
        "use server";
        await signIn(authClient);
      }
    }>
      <Button variant={"outline"} type={"submit"} className={"w-full min-w-80"}>
        <Image src={signInClientName(authClient)} alt={`Sign in with ${authClient}`} width={
          20} height={20} />
      </Button>
    </form>
  );
};

// helpers
const signInClientName = (authClient: AuthClient) => {
  switch (authClient) {
    case AuthClient.GITHUB:
      return "/icons/auth-github.svg";
    case AuthClient.GOOGLE:
      return "/icons/auth-google.svg";
    case AuthClient.FACEBOOK:
      return "/icons/auth-facebook.svg";
    case AuthClient.EMAIL:
      return "/icons/auth-email.svg";
  }
};

export default SignInButton;
