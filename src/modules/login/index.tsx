import { StyledDiv } from "./style";

import Button from "@/components/Button";
import ImageWithFallback from "@/components/ImageWithFallback";
import InputField from "@/components/InputField";
import Typography from "@/components/Typography";

const LoginModule = () => {
  return (
    <StyledDiv>
      <div className="login-wrapper">
        <div className="login-logo-wrapper">
          <ImageWithFallback src="/vercel.svg" alt="sathi-logo" fill />
        </div>

        <div className="login-title-wrapper">
          <Typography as="h1">Saathi Data System</Typography>
          <Typography as="p">
            Strengthening Data Systems for Safer Communities
          </Typography>
        </div>

        <form className="login-form-wrapper">
          <InputField
            label="Email"
            type="text"
            placeholder="Enter your email"
          />
          <InputField label="Password" type="password" placeholder="*****" />

          <Button size="full-width">Sign In</Button>
        </form>
      </div>
    </StyledDiv>
  );
};

export default LoginModule;
