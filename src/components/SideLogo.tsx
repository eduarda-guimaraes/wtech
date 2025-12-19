import React from "react";
import logoname  from '../assets/wtech-logoname.png';

export function SideLogo(){
    return(
        <div className="flex h-screen items-center justify-center bg-[#05478A]">
            <div className="w-2/4">
                <img src={logoname} alt="Logo"/>
            </div>
        </div>
    )
}