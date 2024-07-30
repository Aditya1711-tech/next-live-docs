import { SignUp } from "@clerk/nextjs";
import React from "react";

function SignUPPage() {
  return (
    <main className="auth-page">
      <SignUp />
    </main>
  );
}

export default SignUPPage;
