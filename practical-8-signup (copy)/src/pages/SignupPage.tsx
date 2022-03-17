import { Formik, FormikProps } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../components/styles/SignupPage.css";
import { usersSignup } from "../redux/actions/signupActions";
import { Signup } from "../redux/actions/signupTypes";
import { State } from "../redux/reducers";
import { validate } from "./Validation";


const SignupPage: React.FC = () => {
  const user = useSelector((state: State) => state);
  console.log(user);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  

  const handleSubmit = (values: Signup) => {
    const imgBlob = URL.createObjectURL(values.image as Blob | MediaSource);
    const signUp = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      password: values.password,
      confirmPassword: values.confirmPassword,
      image: imgBlob,
      isLoggedIn:true
    };
    dispatch(usersSignup(signUp));
    console.log(values);
    navigation("/home");
  };

  return (
    <div>
      <Formik<Signup>
        initialValues={{
          image: null,
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          isLoggedIn:false
        }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validate}
        component={SigupPageValidation}
      />
    </div>
  );
};

let SigupPageValidation: (props: FormikProps<Signup>) => JSX.Element = ({
  handleSubmit,
  values,
  handleChange,
  errors,
  setFieldValue,
  handleReset,
  isValid,
}) => {
  return (
    <form className="bg" onSubmit={handleSubmit}>
      <div className="main_form">
        <div className="signup">
          <div className="form">
            <h1>SignUp</h1>
            <div className="form_photo">
              <label className="btn btn-light" htmlFor="image">
                <sup>*</sup>Photo +
                <input
                  type="file"
                  name="photo"
                  id="image"
                  onChange={(event) => {
                    setFieldValue("image", event.target.files![0]);
                  }}
                />
              </label>
              {errors.image ? (
                <div className="error">{errors.image}</div>
              ) : null}
            </div>
            <br />
            <div className="form_data">
              <label htmlFor="name">
                Name<sup>*</sup>
              </label>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                value={values.name}
              />
              {errors.name ? (
                <span className="error">{errors.name}</span>
              ) : null}
              <br />
              <br />
              <label htmlFor="email">
                Email<sup>*</sup>
              </label>
              <br />
              <input
                type="text"
                name="email"
                id="email"
                onChange={handleChange}
                value={values.email}
              />
              {errors.email ? (
                <span className="error">{errors.email}</span>
              ) : null}
              <br />
              <br />
              <label htmlFor="phone">
                Phone No<sup>*</sup>
              </label>
              <br />
              <span>+91</span>
              <input
                type="number"
                name="phone"
                id="phone"
                onChange={handleChange}
                value={values.phone}
              />
              {errors.phone ? (
                <span className="error">{errors.phone}</span>
              ) : null}
              <br />
              <br />
              <label htmlFor="password">
                Password<sup>*</sup>
              </label>
              <br />
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                value={values.password}
              />
              {errors.password ? (
                <span className="error">{errors.password}</span>
              ) : null}
              <br />
              <br />
              <label htmlFor="confirmPassword">
                Confirm Password<sup>*</sup>
              </label>
              <br />
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                onChange={handleChange}
                value={values.confirmPassword}
              />
              {errors.confirmPassword ? (
                <span className="error">{errors.confirmPassword}</span>
              ) : null}
              <br />
              <br />
              <button
                className="btn btn-dark "
                disabled={!isValid}
                type="submit"
              >
                SignUp
              </button>
              <button
                className="btn btn-danger"
                onClick={handleReset}
                type="reset"
              >
                Reset
              </button>
            </div>
          </div>
          <div className="image">
            <img
              src="https://squahr.com/assets/images/authentication/signup.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignupPage;
