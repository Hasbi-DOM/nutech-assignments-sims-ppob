'use client';

import TextInput from "@/components/TextInput";
import Image from "next/image";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CustomButton from "@/components/ButtonCustom";

const Account = () => {
    return (
        <div className="flex flex-col items-center mx-96 space-y-6">
            <div className="flex flex-col items-center">
                <Image src={'/Profile Photo.png'} alt="profile" width={100} height={100}/>
                <p className="text-2xl font-semibold text-gray-800">Kristanto Wibowo</p>
            </div>
            <div className="w-full space-y-4">
                <div className="w-full space-y-2">
                    <p className="text-sm font-medium text-gray-800">Email</p>
                    <TextInput
                        type="text"
                        size={'small'}
                        icon={<AlternateEmailIcon fontSize="small" className="text-gray-700"/>}
                    />
                </div>
                <div className="w-full space-y-2">
                    <p className="text-sm font-medium text-gray-800">Nama Depan</p>
                    <TextInput
                        type="text"
                        size={'small'}
                        icon={<PersonOutlineIcon fontSize="small" className="text-gray-700"/>}
                    />
                </div>
                <div className="w-full space-y-2">
                    <p className="text-sm font-medium text-gray-800">Nama Belakang</p>
                    <TextInput
                        type="text"
                        size={'small'}
                        icon={<PersonOutlineIcon fontSize="small" className="text-gray-700"/>}
                    />
                </div>
            </div>
            <div className="w-full space-y-4">
                <CustomButton
                    variant="outlined" 
                    className={'w-full'}               
                >
                    Edit Profile
                </CustomButton>
                <CustomButton
                    variant="contained" 
                    className={'w-full'}               
                >
                    Logout
                </CustomButton>
            </div>
        </div>
    )
}

export default Account