const TransactionCard = ({className}) => {
    return (
        <div className={`w-full px-6 py-2 border border-gray-200 rounded-lg flex items-start justify-between ${className}`}>
             <div>
                <p className="font-semibold text-xl text-emerald-500">+ Rp.10.000</p>
                <div className="flex gap-4">
                    <p className="text-xs text-gray-400">17 Agustus 2023</p>
                    <p className="text-xs text-gray-400">13:10 WIB</p>
                </div>
            </div>
            <p className="text-xs font-medium text-gray-400">Top Up Saldo</p>
        </div>
    )
}

export default TransactionCard