'use client';

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const SaldoCard = ({balance}) => {
    return (
        <div className="relative">
            <img src="/Background Saldo.png" className="absolute"/>
            <div className=" relative px-5 py-6 flex flex-col justify-center gap-4">
                <p className="text-white">Saldo anda</p>
                <p className="text-white font-semibold text-3xl">Rp {balance}</p>
                <div className="flex items-center gap-1">
                    <p className="text-white text-sm">Lihat Saldo</p>
                    <Visibility className="text-white text-sm" fontSize="small"/>
                </div>
            </div>
         </div>
    )
}

export default SaldoCard