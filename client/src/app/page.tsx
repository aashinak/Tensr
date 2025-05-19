import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-dvh flex-col gap-4">
      <h1 className="text-4xl tracking-widest">Tensr</h1>
      <div className="flex gap-4">
        <Link
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          href="/login"
        >
          Go to Login
        </Link>
        <Link
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          href="/signup"
        >
          Go to Sign Up
        </Link>
      </div>
    </div>
  );
}

