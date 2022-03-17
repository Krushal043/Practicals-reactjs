import * as Yup from "yup";

const SUPPORTED_FORMATS = ["image/jpg", "image/png", "image/jpeg"];
const lowercase_FORMATregx = /(?=.*[a-z])/;
const uppercase_FORMATregx = /(?=.*[A-Z])/;
const numeriecase_FORMATregx = /(?=.*[0-9])/;
const specialcase_FORMATregx = /(?=.*[!@#$%^&*-+_])/;
export const validate = Yup.object({
  image: Yup.mixed()  
    .nullable()
    .required()
    .test(
      "fileSize",
      "Please Upload valid Image size",
      (value) => value && value.size <= 2000000
    )
    .test(
      "fileType",
      "Please Upload valid Image type JPG or PNG",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),

  name: Yup.string()
    .max(15, "Name is too larg it must be in between 15 charcters")
    .min(3, "Name is too short it must be greater than 3 charcters")
    .required("Name Required"),

  email: Yup.string().email("Invalid email").required("Email Required"),

  phone: Yup.string()
    .max(10, "Please enter valid phone number")
    .min(10, "number must be 10 digits")
    .required("Phone No Required"),

  password: Yup.string()
    .matches(lowercase_FORMATregx, "One Lowercase Required")
    .matches(uppercase_FORMATregx, "One Uppercase Required")
    .matches(numeriecase_FORMATregx, "One Number Required")
    .matches(specialcase_FORMATregx, "One Special Character Required")
    .min(8, "At least 8 characters required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "password dosen't match")
    .required("Confirm password is Required"),
});
