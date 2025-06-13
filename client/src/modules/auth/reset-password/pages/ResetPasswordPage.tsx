import ConfirmationButton from "../components/ConfirmationButton";
import InvalidRequest from "../components/InvalidRequest";
import { ResetPasswordProvider } from "../context/ResetPasswordContext";
import { resetParamsSchema } from "../validators";

interface ResetPasswordPageProps {
  searchParams: {
    token?: string;
    email?: string;
  };
}

export default async function ResetPasswordPage({
  searchParams,
}: ResetPasswordPageProps) {
  const params = await searchParams;
  const token = params.token;
  const email = params.email;

  // Validate the token and email parameters
  const result = resetParamsSchema.safeParse(params);

  // If the parameters are invalid, show an error page
  if (!token || !email || !result.success) {
    return <InvalidRequest />;
  }

  return (
    <div className="w-full absolute top-0">
      {/* Wrap the ConfirmationButton with ResetPasswordProvider */}
      <ResetPasswordProvider initialToken={token} initialEmail={email}>
        <ConfirmationButton />
      </ResetPasswordProvider>
    </div>
  );
}
