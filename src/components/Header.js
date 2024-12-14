'use client';
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";
const Header = () => {
    const pathname = usePathname()
    return (
        <>
         {
            pathname === '/' || pathname == '/signup' ?
            <div className="hidden shadow-sm w-full py-2 mb-4">
            <div className="flex items-center justify-between mx-40">
                <div className="flex items-center gap-2">
                    <Image src={'/Logo.png'} alt="logo" width={20} height={20}/>
                    <p className="text-lg font-semibold">SIMS PPOB</p>
                </div>
                <div className="flex gap-12">
                    <Link href={'/topup'} className="font-semibold text-gray-700 hover:text-gray-500">Top Up</Link>
                    <Link href={'/transaction'} className="font-semibold text-gray-700 hover:text-gray-500">Transaction</Link>
                    <Link href={'/account'} className="font-semibold text-gray-700 hover:text-gray-500">Akun</Link>
                </div>
            </div>
        </div> :
        <div className="shadow-sm w-full py-2 mb-4">
        <div className="flex items-center justify-between mx-40">
            <div className="flex items-center gap-2">
                <Image src={'/Logo.png'} alt="logo" width={20} height={20}/>
                <p className="text-lg font-semibold">SIMS PPOB</p>
            </div>
            <div className="flex gap-12">
                <Link href={'/topup'} className="font-semibold text-gray-700 hover:text-gray-500">Top Up</Link>
                <Link href={'/transaction'} className="font-semibold text-gray-700 hover:text-gray-500">Transaction</Link>
                <Link href={'/account'} className="font-semibold text-gray-700 hover:text-gray-500">Akun</Link>
            </div>
        </div>
    </div>
         }
        </>
        
    )
}

export default Header