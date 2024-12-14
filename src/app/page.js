'use client';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import TextInput from "@/components/TextInput";
import CustomButton from "@/components/ButtonCustom";
import LockIcon from '@mui/icons-material/Lock';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import instance from "@/services/axiosConfig";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [token, setToken] = useState('')
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Email wajib diisi"),
      password: Yup.string().required("Password wajib diisi"),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log(values)
      const formData = {
        email: values.email,
        password: values.password,
      }
      try {
        const result = await instance.post(
          "/login",
          formData
        );
        console.log(result.data.data.token)
        if (result.data.status === 0) {
          router.push('/homepage')
          localStorage.setItem('token', result.data.data.token)
        }
      } catch (error) {
        console.log(error)
      } finally {
        resetForm()
      }
    },
  });


  return (
    <div className="w-full flex items-center ">
      <div className="px-44 w-1/2 flex flex-col gap-6 ">
        <div className="flex items-center justify-center gap-2">
          <Image src='/Logo.png' width={30} height={30} alt="logo"/>
          <p className="text-xl font-semibold">SIMS PPOB</p>
        </div>
        <p className="mx-8 text-center text-2xl font-semibold leading-7">Masuk atau buat akun untuk memulai</p>
        <form className="flex flex-col gap-6" onSubmit={formik.handleSubmit}>
        <TextInput 
          type="text"
          name="email"
          placeholder="masukan email anda"
          size="small"
          icon={<AlternateEmailIcon fontSize="small"/>}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextInput 
          type="password"
          name="password"
          placeholder="masukan password anda"
          size="small"
          icon={<LockIcon fontSize="small"/>}
          setShowPassword={setShowPassword}
          showPassword={showPassword}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <CustomButton type="submit">
          Masuk
        </CustomButton>
        </form>
        <div className="mt-6 flex justify-center">
          <p className="text-gray-400">belum punya akun? registrasi <Link href="/signup" className="text-red-700 font-bold">di sini</Link></p>
        </div>
      </div>
      <div className="w-1/2">
        <img src="/Illustrasi Login.png" alt="illustrasi_login" className="object-fill w-full h-screen"/>
      </div>
    </div>
  );
}
