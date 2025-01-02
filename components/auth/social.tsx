"use client";
import { FcGoogle } from "react-icons/fc";
import { RxGithubLogo } from "react-icons/rx";

import { Button } from "../ui/button";

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button size="lg" className="w-full" variant="outline" onClick={()=>{}}>
        <FcGoogle/>
      </Button>
      <Button size="lg" className="w-full" variant="outline" onClick={()=>{}}>
        <RxGithubLogo   />
      </Button>
    </div>
  );
};
