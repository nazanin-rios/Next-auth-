"use client"

import Link from "next/link";
import { Button } from "../ui/button"

interface BackBackButton{
    lable:string;
    href:string;
};

export const BackButton=({lable,href}:BackBackButton)=>{
    return(
        <Button variant="link" className="font-semibold w-full" size="sm" asChild>
            <Link href={href}>
            {lable}
            </Link>
        </Button>
    )
}