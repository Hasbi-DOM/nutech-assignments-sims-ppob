'use client';

import Image from "next/image";
import GreetingCard from "@/components/GreetingCard";
import SaldoCard from "@/components/SaldoCard";
import TextInput from "@/components/TextInput";
import MoneyIcon from '@mui/icons-material/Money';
import CustomButton from "@/components/ButtonCustom";

function Payment () {
    return (
        <div className="mx-40 space-y-16">
            <div className="w-full flex justify-between gap-44">
                <div className="w-2/5">
                    <GreetingCard/>
                </div>
                <div className="w-full">
                    <SaldoCard/>
                </div>
            </div>
            <div className="space-y-2">
                <p className="text-xl">PemBayaran</p>
                <div className="flex items-center gap-4">
                    <Image src={'/Listrik.png'} alt="listrik" width={25} height={25}/>
                    <p className="font-semibold text-xl">Listrik Prabayar</p>
                </div>
            </div>
            <div className="space-y-4">
                <TextInput 
                    type="text"
                    icon={<MoneyIcon fontSize="small" className="text-gray-400"/>}
                    size={'small'}
                />
                <CustomButton>
                    Bayar
                </CustomButton>
            </div>
        </div>
    )
}

export default Payment