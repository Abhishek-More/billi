import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <button onClick={() => signOut()} className="text-left">
        Sign out
      </button>
    </div>
  );
}
