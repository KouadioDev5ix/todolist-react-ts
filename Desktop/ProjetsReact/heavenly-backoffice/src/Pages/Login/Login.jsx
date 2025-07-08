import React, { useState } from "react";
import mainBg from "../../assets/Thumbails/shopping-venture-4536066_1280.jpg";
import forIcon from "../../assets/Thumbails/ce5699233cbc0f142250b520d967dff7 (1).png";
import { access } from "../../Acces";
import toast from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [globalFormData, setGloblaFormData] = useState({
    userName: "",
    passWord: "",
  });
  const [error, setError] = useState({
    userName: "",
    passWord: "",
  });

  const [globalLoading, setGlobalLoading] = useState({
    logingLoding: false,
    inputContaintsError: false,
  });

  const navigateTo = useNavigate();
  // console.log(navigateTo);
  /**
   *
   * @param {*} field
   * @returns
   */

  const formateField = (field) => {
    const mapping = {
      userName: "Nom d'utilisateur",
      passWord: "Mot de pass",
    };

    return mapping[field] || field;
  };

  /**
   *
   * @param {*} e
   */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGloblaFormData((previouState) => ({
      ...previouState,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    const newErrorOccured = {};
    Object.entries(globalFormData).forEach(([key, value]) => {
      if (value.trim() === "") {
        newErrorOccured[key] = `${formateField(key)} est réquis`;
        return;
      }
    });
    setError(newErrorOccured);
    const inputHasError = Object.values(newErrorOccured).some(
      (error) => error !== ""
    );

    if (inputHasError) {
      setGlobalLoading((previouState) => ({
        ...previouState,
        logingLoding: false,
      }));
      setGlobalLoading((previouState) => ({
        ...previouState,
        inputContaintsError: true,
      }));
      return;
    }

    setGlobalLoading((previouState) => ({
      ...previouState,
      logingLoding: true,
    }));

    setTimeout(() => {
      setGlobalLoading((previouState) => ({
        ...previouState,
        logingLoding: false,
      }));
      if (
        globalFormData.userName === access.username &&
        globalFormData.passWord === access.psw
      ) {
        localStorage.setItem("isConnected", "true");
        navigateTo("/");
      } else {
        toast.error("Oups, veuillez vérifier vos identifiants");
      }
    }, 1000);
  };

  return (
    <div className="relative w-full h-screen">
      {/* Image de fond */}
      <img
        src={mainBg}
        alt="image de couverture"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay*/}
      {/* <div className="absolute w-full h-full bg-black/55"></div> */}

      {/* Formulaire centré */}
      <div className="relative flex items-center justify-center w-full h-full p-3">
        <div className="bg-gray-100 p-2  md:p-5 rounded-xl shadow-md w-full max-w-md md:max-w-lg h-fit">
          <div className="flex items-center justify-center">
            <img
              src={forIcon}
              alt="image du logo"
              className="w-14 h-14 rounded-full text-center"
            />
          </div>
          <h2 className="text-sm font-medium mb-3 text-gray-600 text-center">
            Me connecter à mon compte
          </h2>

          <div className="form-control w-full max-w-full">
            <label className="label mb-0">
              <span className="label-text font-bold -mb-1 text-gray-600 text-xs  ">
                Nom utilisateur
              </span>
            </label>
            <input
              value={globalFormData.userName}
              onChange={handleChange}
              name="userName"
              type="text"
              placeholder="Ex: Fredo@"
              className={`input input-bordered text-xs w-full h-5 md:h-10 max-w-full rounded-md ${
                error.userName && globalLoading.inputContaintsError
                  ? "input-error"
                  : ""
              } `}
            />
          </div>

          <div className="form-control w-full max-w-full">
            <label className="label mb-0">
              <span className="label-text font-bold text-gray-600 -mb-1 text-xs  ">
                Mot de pass
              </span>
            </label>
            <input
              value={globalFormData.passWord}
              onChange={handleChange}
              name="passWord"
              type="password"
              placeholder="***************"
              className={`input input-bordered text-xs w-full h-5 md:h-10 max-w-full rounded-md ${
                error.passWord && globalLoading.inputContaintsError
                  ? "input-error"
                  : ""
              } `}
            />
          </div>
          <div className="pt-5 md:pt-7" onClick={handleLogin}>
            <button className="w-full flex items-center justify-center  bg-[#FC7033] text-white p-0 md:p-2 rounded hover:bg-orange-600 font-normal md:font-medium transition">
              {globalLoading.logingLoding ? (
                <>
                  <RotatingLines
                    visible={true}
                    height="24"
                    width="24"
                    strokeColor="#fff"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                </>
              ) : (
                "Se connecter"
              )}
            </button>
          </div>

          <div className="flex items-center gap-4 my-6">
            <hr className="flex-grow border-t border-gray-400" />
            <span className="text-gray-500 text-sm">OU</span>
            <hr className="flex-grow border-t border-gray-400" />
          </div>

          <div className="flex items-center justify-center">
            <p className="underline font-medium md:font-semibold text-gray-500 cursor-pointer">
              Mot de pass oublie ?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
