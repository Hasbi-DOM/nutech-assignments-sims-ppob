'use client';
import Image from "next/image";
import SaldoCard from "@/components/SaldoCard";
import GreetingCard from "@/components/GreetingCard";
import instance from "@/services/axiosConfig";
import { useEffect, useState } from "react";

function HomePage () {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [dataBanner, setDataBanner] = useState([])
    const [dataServices, setDataServices] = useState([])
    const [balance, setBalance] = useState('')

    const getProfile = async () => {
        const result = await instance.get(
            "/profile"
        )
        setFirstname(result.data.data.first_name)
        setLastname(result.data.data.last_name)
    }
    const getBanner = async () => {
        const result = await instance.get(
            "/banner"
        )
        setDataBanner(result.data.data)
    }
    const getServices = async () => {
        const result = await instance.get(
            "/services"
        )
        setDataServices(result.data.data)
    }
    const getBalance = async () => {
        const result = await instance.get(
            "/balance"
        )
        setBalance(result.data.data.balance)
    }

    useEffect(() => {
        getProfile()
        getBanner()
        getServices()
        getBalance()
    }, [])
    return (
        <div className="mx-40 ">
            <div className="w-full flex justify-between gap-44">
                <div className="w-2/5">
                    <GreetingCard
                        firstname={firstname}
                        lastname={lastname}
                    />
                </div>
                <div className="w-full  ">
                    <SaldoCard
                        balance={balance}
                    />
                </div>
            </div>
            <div className="mt-24 flex items-start justify-between">
                {
                    dataServices.map((items, index) => (
                        <div key={index} className="w-16 flex flex-col justify-center items-center gap-1">
                            <img src={items.service_icon} alt={items.service_code} className="min-w-full"/>
                            <p className="text-xs text-center">{items.service_name}</p>
                        </div>
                    ))
                }
            </div>
            <div className="mt-16">
                <p className="font-semibold text-sm">Temukan promo menarik</p>
                <div className="mt-4 flex justify-between gap-6">
                    {
                        dataBanner.map((items, index) => (
                            <div key={index}>
                                <img src={items.banner_image} alt={items.banner_name}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage