import ResetPasswordPage from "@/modules/auth/reset-password/pages/ResetPasswordPage";

interface PageProps {
  searchParams: {
    token?: string;
    email?: string;
  };
}

async function Page({ searchParams }: PageProps) {
  return <ResetPasswordPage searchParams={searchParams} />;
}

export default Page;
