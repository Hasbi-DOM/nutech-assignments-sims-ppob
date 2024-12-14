'use client';

import { useEffect, useState } from "react";
import CustomButton from "@/components/ButtonCustom";
import GreetingCard from "@/components/GreetingCard";
import SaldoCard from "@/components/SaldoCard";
import TextInput from "@/components/TextInput";
import MoneyIcon from '@mui/icons-material/Money';
import instance from "@/services/axiosConfig";


function TopUp () {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [balance, setBalance] = useState('')
    const nominal = [
        'Rp10.000', 'Rp20.000', 'Rp50.000', 'Rp100.000', 'Rp250.000', 'Rp500.000'
    ]
    const getProfile = async () => {
        const result = await instance.get(
            "/profile"
        )
        setFirstname(result.data.data.first_name)
        setLastname(result.data.data.last_name)
    }
    const getBalance = async () => {
        const result = await instance.get(
            "/balance"
        )
        setBalance(result.data.data.balance)
    }

    useEffect(() => {
        getProfile()
        getBalance()
    }, [])
    return (
        <div className="mx-40 space-y-16">
            <div className="w-full flex justify-between gap-44">
                <div className="w-2/5">
                    <GreetingCard
                        firstname={firstname}
                        lastname={lastname}
                    />
                </div>
                <div className="w-full">
                    <SaldoCard
                    balance={balance}
                    />
                </div>
            </div>
            <div>
                <p className="text-xl">Silahkan masukan</p>
                <p className="text-2xl font-semibold">Nominal Top Up</p>
            </div>
            <div className="flex gap-4">
                <div className="w-2/3 flex flex-col gap-3">
                    <TextInput 
                        type="text"
                        placeholder="masukan nominal Top Up"
                        size="small"
                        icon={<MoneyIcon fontSize="small" className="text-gray-400"/>}
                    />
                    <CustomButton
                        disabled
                        className="text-white"
                        size='medium'
                    >
                        Top Up
                    </CustomButton>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    {
                        nominal.map((items, index) => (
                        <button key={index} className="h-10 px-4 border border-gray-200 hover:bg-gray-50 active:bg-gray-100">
                            <p className="text-gray-500 font-medium text-sm">{items}</p>
                        </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TopUp