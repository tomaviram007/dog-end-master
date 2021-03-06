import React, { useState } from "react";
import { Formik } from "formik";
import Meets from "../clockMeet/Meets";
import cardService from "../../services/dogWalker/cardServiceDogWalker";
import commonService from "../../services/commonService";
import { toast } from "react-toastify";

function CreateCardWalker() {
  const [days, setDays] = useState({
    sun: { start: "", end: "", closed: true },
    mon: { start: "", end: "", closed: true },
    tues: { start: "", end: "", closed: true },
    wen: { start: "", end: "", closed: true },
    turs: { start: "", end: "", closed: true },
    fri: { start: "", end: "", closed: true },
    sat: { start: "", end: "", closed: true },
  });

  const [errorDay, setErrorDay] = useState("");

  const tagsToArray = (myTags) => {
    let myArr = [];
    if (!myTags) {
      return [];
    }

    let arr = myTags.split(",");

    for (let val of arr) {
      if (val !== "" && val != null) {
        myArr.push(val);
      }
    }
    return myArr;
  };

  return (
    <Formik
      initialValues={{
        experience: "",
        timeWalker: "",
        cost: "",
        tags: "",
      }}
      validate={(values) => {
        const errors = {};

        if (!values.experience) {
          errors.experience = "Required";
        } else if (values.experience < 0 || values.experience > 100) {
          errors.experience = "Invalid experience";
        }
        if (!values.cost) {
          errors.cost = "Required";
        }
        // validation for timeWalker
        if (!values.timeWalker) {
          errors.timeWalker = "Required";
        }

        return errors;
      }}
      //pic validation
      onSubmit={async (values) => {
        try {
          setErrorDay("");
          let err = commonService.validateDays(days);

          if (err) {
            setErrorDay(err);
            return;
          }
          await cardService.createCard({
            experience: values.experience,
            timeWalker: values.timeWalker,
            cost: values.cost,
            tags: tagsToArray(values.tags),
            meets: days,
          });
          window.location = "/profile";
        } catch ({ response }) {
          // ToastContainer
          toast.error(response.data, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        // form inputs
        <div className="container ">
          <form onSubmit={handleSubmit} className="form-container">
            <label htmlFor="experience" className="experience">
              ???????????? ??????????
            </label>
            <br />
            <input
              className="textSizeSelect"
              type="number"
              name="experience"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.experience}
              placeholder="???????????? ??????????"
            />
            {errors.experience && touched.experience ? (
              <div>{errors.experience}</div>
            ) : null}
            <br />
            <br />
            <label htmlFor="timeWalker">?????? ?????? ????????</label>
            <br />
            <select
              className="textSizeSelect"
              name="timeWalker"
              id="timeWalker"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.timeWalker}
            >
              <option value="">??????/??</option>
              <option value="15">15 ????</option>
              <option value="20">20 ????</option>
              <option value="25">25 ????</option>
              <option value="30">30 ????</option>
              <option value="35">35 ????</option>
              <option value="40">40 ????</option>
              <option value="45">45 ????</option>
              <option value="50">50 ????</option>
              <option value="55">55 ????</option>
              <option value="60">60 ????</option>
            </select>
            {errors.timeWalker && touched.timeWalker ? (
              <div>{errors.timeWalker}</div>
            ) : null}
            <br />
            <br />

            <label htmlFor="cost">???????? ????????:</label>
            <br />
            <select
              name="cost"
              id="cost"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cost}
            >
              <option value="">??????/??</option>
              <option value="150 - 250">150 - 250</option>
              <option value="250 - 350">250 - 350</option>
              <option value="450+">450+</option>
            </select>
            {errors.cost && touched.cost ? <div>{errors.cost}</div> : null}
            <br />
            <br />

            <label className="Tags">?????????? ??????????:</label>
            <br />
            <input
              className="tagsInput"
              type="text"
              name="tags"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tags}
            />
            {errors.tags && touched.tags ? <div>{errors.tags}</div> : null}

            <br />
            <br />
            <Meets setDays={setDays} days={days} />
            <br />
            {errorDay && <div className="text-danger">{errorDay}</div>}

            <br />
            <br />
            <button
              className="submit"
              type="submit"
              id="regButton"
              disabled={isSubmitting}
            >
              ?????????? ??????????
            </button>
          </form>
          <button
            className="mt-3 col-12 btn btn-danger "
            onClick={() => (window.location = "/profile")}
          >
            ??????????
          </button>
        </div>
      )}
    </Formik>
  );
}

export default CreateCardWalker;
