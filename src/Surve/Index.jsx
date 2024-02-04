import React from "react";
import Navbar from "./Navbar";
import { useFormik } from "formik";
import * as Yup from "yup";

const Index = () => {
  const { values, handleChange, handleSubmit, touched, errors } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      check: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .trim()
        .min(2)
        .matches(/^[A-Za-z ]*$/, "special character not allowed")
        .required("at least 2 Char"),
      lastName: Yup.string()
        .trim()
        .min(2)
        .matches(/^[A-Za-z ]*$/, "special character not allowed")
        .required("at least 2 Char"),
      email: Yup.string()
        .email()
        .matches(
          /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/,
          "invalid Gmail"
        )
        .required("enter valid gmail"),
      password: Yup.string()
        .trim()
        .min(6)
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[a-zA-Z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{6,}$/,
          "Enter Strong number"
        )
        .required("Enter password above 6 char"),
      address: Yup.string().trim().min(5).required("at least 5 words"),
      address2: Yup.string().trim().min(5).required("at least 5 words"),
      city: Yup.string().trim().min(2).required("at least 2 words"),
      state: Yup.string().required("at least one"),
      zip: Yup.string()
        .trim()
        .matches(/^(\d{6}(?:[-\s]\d{4})?)$/, "Invalid ZIP code"),

      check: Yup.boolean().oneOf([true], "accept terms and Condition"),
    }),
    onSubmit: async (value, action) => {
      let a = await fetch("/api", {
        method: "POST",
        body: JSON.stringify(value),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let b = await a.text();
      console.log(b);

      console.log(value);
      action.setStatus("form submited");
    },
  });
  return (
    <>
      <Navbar />
      <main className="row">
        <img
          className="col-lg-6 col-sm-12"
          src="https://unblast.com/wp-content/uploads/2020/03/Illustrator-Vector-Illustration-1.jpg"
          alt=""
        />
        <form className="row col-lg-6 col-sm-12 g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              aria-label="First name"
            />
            {errors.firstName && touched.firstName ? (
              <div
                style={{
                  padding: "0px",
                  backgroundColor: "transparent",
                  border: "none",
                }}
                className="alert alert-danger d-flex align-items-center"
                role="alert"
              >
                <div>{errors.firstName} *</div>
              </div>
            ) : null}
          </div>
          <div className=" col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              aria-label="Last name"
            />
            {errors.lastName && touched.lastName ? (
              <div
                style={{
                  padding: "0px",
                  backgroundColor: "transparent",
                  border: "none",
                }}
                className="alert alert-danger d-flex align-items-center"
                role="alert"
              >
                <div>{errors.lastName} *</div>
              </div>
            ) : null}
          </div>

          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              id="inputEmail4"
            />
            {errors.email && touched.email ? (
              <div
                style={{
                  padding: "0px",
                  backgroundColor: "transparent",
                  border: "none",
                }}
                className="alert alert-danger d-flex align-items-center"
                role="alert"
              >
                <div>{errors.email} *</div>
              </div>
            ) : null}
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && touched.password ? (
              <div
                style={{
                  padding: "0px",
                  backgroundColor: "transparent",
                  border: "none",
                }}
                className="alert alert-danger d-flex align-items-center"
                role="alert"
              >
                <div>{errors.password} *</div>
              </div>
            ) : null}
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Enter Address here"
              name="address"
              value={values.address}
              onChange={handleChange}
            />
            {errors.address && touched.address ? (
              <div
                style={{
                  padding: "0px",
                  backgroundColor: "transparent",
                  border: "none",
                }}
                className="alert alert-danger d-flex align-items-center"
                role="alert"
              >
                <div>{errors.address} *</div>
              </div>
            ) : null}
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              Address 2
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
              name="address2"
              value={values.address2}
              onChange={handleChange}
            />
            {errors.address2 && touched.address2 ? (
              <div
                style={{
                  padding: "0px",
                  backgroundColor: "transparent",
                  border: "none",
                }}
                className="alert alert-danger d-flex align-items-center"
                role="alert"
              >
                <div>{errors.address2} *</div>
              </div>
            ) : null}
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input
              type="text"
              name="city"
              className="form-control"
              value={values.city}
              onChange={handleChange}
              id="inputCity"
            />
            {errors.city && touched.city ? (
              <div
                style={{
                  padding: "0px",
                  backgroundColor: "transparent",
                  border: "none",
                }}
                className="alert alert-danger d-flex align-items-center"
                role="alert"
              >
                <div>{errors.city} *</div>
              </div>
            ) : null}
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <select
              id="inputState"
              name="state"
              onChange={handleChange}
              className="form-select"
            >
              <option>Choose...</option>
              <option value="ap">Andhra Pradesh</option>
              <option value="ar">Arunachal Pradesh</option>
              <option value="as">Assam</option>
              <option value="br">Bihar</option>
              <option value="cg">Chhattisgarh</option>
              <option value="ga">Goa</option>
              <option value="gj">Gujarat</option>
              <option value="hr">Haryana</option>
              <option value="hp">Himachal Pradesh</option>
              <option value="jh">Jharkhand</option>
              <option value="ka">Karnataka</option>
              <option value="kl">Kerala</option>
              <option value="mp">Madhya Pradesh</option>
              <option value="mh">Maharashtra</option>
              <option value="mn">Manipur</option>
              <option value="ml">Meghalaya</option>
              <option value="mz">Mizoram</option>
              <option value="nl">Nagaland</option>
              <option value="od">Odisha</option>
              <option value="pb">Punjab</option>
              <option value="rj">Rajasthan</option>
              <option value="sk">Sikkim</option>
              <option value="tn">Tamil Nadu</option>
              <option value="tg">Telangana</option>
              <option value="tr">Tripura</option>
              <option value="up">Uttar Pradesh</option>
              <option value="uk">Uttarakhand</option>
              <option value="wb">West Bengal</option>
              <option value="an">Andaman and Nicobar Islands</option>
              <option value="ch">Chandigarh</option>
              <option value="dn">
                Dadra and Nagar Haveli and Daman and Diu
              </option>
              <option value="ld">Lakshadweep</option>
              <option value="dl">Delhi</option>
              <option value="py">Puducherry</option>
            </select>
            {errors.state && touched.state ? (
              <div
                style={{
                  padding: "0px",
                  backgroundColor: "transparent",
                  border: "none",
                }}
                className="alert alert-danger d-flex align-items-center"
                role="alert"
              >
                <div>{errors.state} *</div>
              </div>
            ) : null}
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input
              type="tel"
              name="zip"
              placeholder="pin code"
              className="form-control"
              maxLength={6}
              value={values.zip}
              onChange={handleChange}
              id="inputZip"
            />
            {errors.zip && touched.zip ? (
              <div
                style={{
                  padding: "0px",
                  backgroundColor: "transparent",
                  border: "none",
                }}
                className="alert alert-danger d-flex align-items-center"
                role="alert"
              >
                <div>{errors.zip} *</div>
              </div>
            ) : null}
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
                name="check"
                value={values.check}
                onChange={handleChange}
              />
              {errors.check && touched.check ? (
                <div
                  style={{
                    padding: "0px",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                  className="alert alert-danger d-flex align-items-center"
                  role="alert"
                >
                  <div>{errors.check} *</div>
                </div>
              ) : null}
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Index;
