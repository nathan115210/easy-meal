import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SignInButton, { AuthClient } from "@/components/SignInButton";


const AuthModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>
          Sign In
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign with:</DialogTitle>
          <div className={"flex flex-col gap-4 align-middle w-full items-center justify-center pt-3.5"}>
            <SignInButton authClient={AuthClient.GITHUB} />
            <SignInButton authClient={AuthClient.GOOGLE} />
            <SignInButton authClient={AuthClient.FACEBOOK} />
            <SignInButton authClient={AuthClient.EMAIL} />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default AuthModal;

