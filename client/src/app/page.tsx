import Typography from "@/shared/components/Typography";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-dvh flex-col gap-4">
      <Typography variant="tensr" className="tracking-widest">Welcome to Tensr</Typography>
      <div className="flex gap-4">
        <Link
          className="px-4 py-2 font-sans bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          href="/signin"
        >
          <Typography>Go to Sign In</Typography>
        </Link>
        <Link
          className="px-4 py-2 font-sans bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          href="/signup"
        >
          <Typography>Go to Sign Up</Typography>
        </Link>
      </div>
    </div>
  );
}



