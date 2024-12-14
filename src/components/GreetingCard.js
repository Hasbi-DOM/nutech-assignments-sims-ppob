const GreetingCard = ({firstname, lastname}) => {
    return (
        <div className="w-full space-y-8">
            <img src="/Profile Photo.png" alt="profile"/>
            <div>
                <p className="text-xl">Selamat datang,</p>
                <p className="font-semibold text-2xl capitalize">{firstname} {lastname}</p>
            </div>
        </div>
    )
}

export default GreetingCard