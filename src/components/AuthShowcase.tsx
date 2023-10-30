import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthShowcase() {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-row items-center justify-center">
      <p className="text-center text-base text-white">
        {sessionData && <span>({sessionData.user?.name})</span>}
      </p>
      <button
        className="text-white"
        onClick={sessionData ? () => signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
