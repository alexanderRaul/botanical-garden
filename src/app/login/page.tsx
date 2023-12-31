import LoginForm from "../ui/LoginForm";
import Wrapper from "../ui/Wrapper";

export default function LoginPage() {
  return (
    <Wrapper>
      <div className="py-[72px]">
        <h2 className="sm:text-[7em] text-[11em]">Login Page</h2>
      </div>
      <LoginForm />
    </Wrapper>
  );
}
