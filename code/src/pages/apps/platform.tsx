import React, { useState } from "react";
import Button, { ButtonType } from "../../../ACE/Button/Button";
import Input from "../../../ACE/Input/Input";
import { Navbar } from "../../components/navbar";

export default function Platform() {
    // state
    const [email, setEmail] = useState("")
  return (
    <>
      <Navbar />
      <main className="m-4 flex flex-col items-center space-y-4 p-4">
        <div className="mt-12 flex flex-col space-y-4 md:w-128">
            <div className="text-5xl md:text-6xl">
                We are currently working on the beta, stay tuned.
            </div>
            {/* <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <div className="flex-2">
                <Input
                placeholder="Enter your email..."
                type="email"
                value={email}
                change={setEmail}
                />
            </div>
            <div className="flex-2">
                <Button type={ButtonType.CONTAINED} click={() => {}}>
                <div>Join The Waitlist</div>
                </Button>
            </div>
            </div> */}
        </div>
      </main>
    </>
  );
}
