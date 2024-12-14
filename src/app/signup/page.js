'use client';
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import TextInput from "@/components/TextInput";
import CustomButton from "@/components/ButtonCustom";
import LockIcon from '@mui/icons-material/Lock';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MessageAlert from "@/components/MessageAlert";
import instance from "@/services/axiosConfig";
function SignUp () {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [open, setOpen] = useState(false)
    const handleOpenNotif = () => {
      setOpen(true)
    }
    const handleCloseNotif = () => {
      setOpen(false)
    }
    const formik = useFormik({
      initialValues: {
        email: "",
        firstname: "",
        lastname: "",
        password: "",
        passwordConfirmation: "",
      },
      validationSchema: Yup.object().shape({
        email: Yup.string()
          .email("Format email salah!")
          .required("Email wajib diisi"),
        firstname: Yup.string().required("Nama Depan wajib diisi"),
        lastname: Yup.string().required("Nama Belakang wajib diisi"),
        password: Yup.string().min(8).required("Password wajib diisi"),
        passwordConfirmation: Yup.string().oneOf([Yup.ref("password"), null], "password tidak sama")
      }),
      onSubmit: async (values, { resetForm }) => {
        console.log(values)
        const formData = {
          email: values.email,
          first_name: values.firstname,
          last_name: values.lastname,
          password: values.password
        };
        try {
          setIsSubmit(true)
          const result = await instance.post(
            "/registration",
            formData
          )
          console.log(result.data)
          if (result.data.status === 0) {
            handleOpenNotif()
          }
        } catch (error) {
          console.log(error)
        } finally {
          setIsSubmit(false)
          resetForm()
        }
      }
    })
    
    return (
    <div className="w-full flex items-center ">
      <div className="px-44 w-1/2  ">
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
          type="text"
          name="firstname"
          placeholder="nama depan"
          size="small"
          icon={<PersonOutlineIcon fontSize="small"/>}
          onChange={formik.handleChange}
          error={formik.touched.firstname && Boolean(formik.errors.firstname)}
          helperText={formik.touched.firstname && formik.errors.firstname}
        />
        <TextInput 
          type="text"
          name="lastname"
          placeholder="nama belakang"
          size="small"
          icon={<PersonOutlineIcon fontSize="small"/>}
          onChange={formik.handleChange}
          error={formik.touched.lastname && Boolean(formik.errors.lastname)}
          helperText={formik.touched.lastname && formik.errors.lastname}
        />
        <TextInput 
          type="password"
          name="password"
          placeholder="buat password"
          size="small"
          icon={<LockIcon fontSize="small"/>}
          setShowPassword={setShowPassword}
          showPassword={showPassword}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextInput 
          type="password"
          name="passwordconfirmation"
          placeholder="konfirmasi password"
          size="small"
          icon={<LockIcon fontSize="small"/>}
          setShowPassword={setShowPasswordConfirmation}
          showPassword={showPasswordConfirmation}
          onChange={formik.handleChange}
          error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
          helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
        />
        <CustomButton type="submit" loading={isSubmit}>
          Registrasi
        </CustomButton>
        </form>
        <div className="mt-6 flex justify-center">
          <p className="text-gray-400">sudah punya akun? login <Link href="/" className="text-red-700 font-bold">di sini</Link></p>
        </div>
        <MessageAlert severity="success" onClose={handleCloseNotif} open={open} children={"Registrasi berhasil, silahkan login!"}/>
      </div>
      <div className="w-1/2">
        <img src="/Illustrasi Login.png" alt="illustrasi_login" className="object-fill w-full h-screen"/>
      </div>
    </div>
    )
}

export default SignUp