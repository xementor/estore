import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "@/utils/api";

export default function AuthShowcase() {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-row items-center justify-center bg-slate-600">
      <p className="text-center text-base text-white">
        {sessionData && <span>{sessionData.user?.name}</span>}
      </p>
      <button
        className=""
        onClick={sessionData ? () => {} : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
