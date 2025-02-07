import SignInButton, { AuthClient } from "@/components/SignInButton";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AuthModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>Sign In</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign with:</DialogTitle>
          <div
            className={
              "flex w-full flex-col items-center justify-center gap-4 pt-3.5 align-middle"
            }
          >
            <SignInButton authClient={AuthClient.GITHUB} />
            <SignInButton authClient={AuthClient.GOOGLE} />
            {/*<SignInButton authClient={AuthClient.FACEBOOK} />*/}
            {/*<SignInButton authClient={AuthClient.EMAIL} />*/}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default AuthModal;
