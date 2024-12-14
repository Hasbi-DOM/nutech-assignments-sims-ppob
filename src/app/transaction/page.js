'use client';

import GreetingCard from "@/components/GreetingCard";
import SaldoCard from "@/components/SaldoCard";
import TransactionCard from "@/components/TransactionCard";
function Transaction () {
    return (
        <div className="mx-40">
            <div className="w-full flex justify-between gap-44">
                <div className="w-2/5">
                    <GreetingCard/>
                </div>
                <div className="w-full">
                    <SaldoCard/>
                </div>
            </div>
            <div className="mt-14 w-full">
                <p>Semua Transaksi</p>
                <TransactionCard
                    className={'mt-4'}
                />
                <TransactionCard
                    className={'mt-4'}
                />
                <TransactionCard
                    className={'mt-4'}
                />
                <TransactionCard
                    className={'mt-4'}
                />
                <TransactionCard
                    className={'mt-4'}
                />
            </div>
            <div className="mt-2 flex justify-center">
                <button className="text-red-600 hover:text-red-700 font-semibold">
                    See more
                </button>
            </div>
        </div>
    )
}

export default Transaction