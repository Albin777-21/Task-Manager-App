import SignInPage from "@/components/auth/sign-in";
import SignUpPage from "@/components/auth/sign-up";
import CommonButton from "@/components/common-button";
import React, { useState } from "react";

const AuthPage = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  return (
    <div className="flex flex-auto flex-col min-h-screen h-full bg-green-200">
      <div className="flex h-full flex-col justify-center items-center">
        <h3 className="text-3xl font-bold text-blue-700">Welcome</h3>
        <div className="mt-5">
          {isLoginView ? <SignInPage /> : <SignUpPage />}
        </div>
        <div className="mt-5"><CommonButton
          type={"button"}
          onClick={() => setIsLoginView(!isLoginView)}
          buttonText={isLoginView ? "Switch to Sign Up" : "Switch to Sign In"}
        /></div>
      </div>
    </div>
  );
};

export default AuthPage;
