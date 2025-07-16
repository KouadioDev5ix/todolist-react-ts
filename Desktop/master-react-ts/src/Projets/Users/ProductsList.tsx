import React, { useState } from "react";
import type {
  IByProduct,
  IGlobalFormInputsData,
  IProduct,
} from "../INTERFACES/IProduct";

export default function ProductsList() {
  const [globalFormInputsData, setGlobalFormInputsData] = useState<IProduct[]>(
    []
  );
  const [globalFormInputsValue, setGlobalFormInputsValue] =
    useState<IGlobalFormInputsData>({
      categories: "",
      hasStock: false,
      name: "",
      model: "",
      price: "",
      quantity: 0,
      descript: "",
      hasReduction: false,
    });

  const [numberOfProductToAdd, setNumberOfProductToAdd] = useState<
    string | number
  >("");

  const globalFormInputsChange = (e: React.FormEvent): void => {
    const { name, value, check } = e.target;
  };

  const handleSaveProduct = (e: React.FormEvent): void => {
    e.preventDefault();
  };

  /**
   *
   * @param e
   * @returns
   */
  const handleSetNomberOfProductInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;
    setNumberOfProductToAdd(value === "" ? "" : Number(value));
  };

  return (
    <div className="h-screen w-full flex flex-col items-center overflow-hidden">
      <div>
        <h1 className="text-xl font-extrabold my-2">This is ProductsList</h1>
      </div>

      {/* FIXED CONTAINER + SCROLLABLE */}

      <div className="w-full max-w-xl flex flex-col flex-grow mb-4">
        {/*  BOXE CATEGORIES*/}
        <div className="sticky z-10 bg-white w-full rounded-md border border-gray-300 shadow-lg p-4">
          <div className="relative form-control w-full max-w-full">
            <label className="label">
              <span className="label-text">Categories</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Choisissez une categories
              </option>
              <option>Techonologies</option>
              <option>Appliances</option>
              <option>Accessesories</option>
            </select>
          </div>

          {/* Prodcut qty for this categorie */}
          <div className="form-control w-full max-w-full my-2">
            <label className="label">
              <span className="label-text -mb-1">
                Quantité de produit pour cette categorie
              </span>
            </label>
            <input
              value={numberOfProductToAdd}
              onChange={handleSetNomberOfProductInputChange}
              type="text"
              placeholder="5"
              className="input h-10 input-bordered  w-full max-w-full"
            />
          </div>

          <div className="flex justify-end mb-1">
            <button className="w-20 bg-orange-100 border border-orange-400 text-center text-sm font-semibold inline-block text-orange-600 cursor-pointer  transition duration-200 ease-in-out rounded-md hover:bg-orange-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 active:scale-95">
              Ajouter
            </button>
          </div>
          {/* FIRST DIVIDER */}
          {/* <div className=" w-full my-3">
            <hr className="flex-grow border-t border-gray-400" />
          </div> */}
          {/* PRODUCTC BOXE */}
        </div>
      </div>

      {/* BY PRODUCTS */}

      <div className="w-full max-w-xl flex-grow overflow-y-auto p-3 border border-gray-300 rounded-md flex flex-col gap-y-5 mb-7">
        <div className="bg-gray-50 w-full p-3 border border-gray-200 rounded-md">
          <div className="flex items-center justify-center ">
            <h1 className="text-lg font-bold text-gray-700">
              Ajout de produits
            </h1>
          </div>

          {/* PRODUITS */}

          <div className="flex items-start gap-2">
            <div className="form-control w-full max-w-full">
              <label className="label">
                <span className="label-text -mb-1">Nom</span>
              </label>
              <input
                type="text"
                placeholder="Samsaung"
                className="input h-10 input-bordered  w-full max-w-full
              "
              />
            </div>

            <div className="form-control w-full max-w-full">
              <label className="label">
                <span className="label-text -mb-1">Model</span>
              </label>
              <input
                type="text"
                placeholder="Galaxy S24 Ultra"
                className="input h-10 input-bordered  w-full max-w-full
              "
              />
            </div>
          </div>
          {/* Prices */}
          <div className="form-control w-full max-w-full">
            <label className="label">
              <span className="label-text -mb-1">Prix</span>
            </label>
            <input
              type="text"
              placeholder="460 000"
              className="input h-10 input-bordered  w-full max-w-full
              "
            />
          </div>
          {/* QUantity */}
          <div className="form-control w-full max-w-full">
            <label className="label">
              <span className="label-text -mb-1">Quantité</span>
            </label>
            <input
              type="text"
              placeholder="40"
              className="input h-10 input-bordered  w-full max-w-full
              "
            />
          </div>

          {/* Description */}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Le Galaxy S24 Ultra est doté d'un système de caméra Quad Tele qui permet de prendre des photos haute résolution, zoomées, plus nettes et plus claires que le ..."
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">En reduction ? </span>
              <input type="checkbox" className="checkbox" />
            </label>
          </div>
        </div>

        <div className=" w-full my-3">
          <hr className="flex-grow border-t border-gray-400" />
        </div>
        {/* ADD PRODUCT BOXE */}
        <div className="bg-gray-50 w-full h-fit p-3 border border-gray-200 rounded-md">
          <div className="flex items-center justify-center ">
            <h1 className="text-lg font-bold text-gray-700">
              Ajout de produits
            </h1>
          </div>

          {/* PRODUITS */}

          <div className="flex items-start gap-2">
            <div className="form-control w-full max-w-full">
              <label className="label">
                <span className="label-text -mb-1">Nom</span>
              </label>
              <input
                type="text"
                placeholder="Samsaung"
                className="input h-10 input-bordered  w-full max-w-full
              "
              />
            </div>

            <div className="form-control w-full max-w-full">
              <label className="label">
                <span className="label-text -mb-1">Model</span>
              </label>
              <input
                type="text"
                placeholder="Galaxy S24 Ultra"
                className="input h-10 input-bordered  w-full max-w-full
              "
              />
            </div>
          </div>
          {/* Prices */}
          <div className="form-control w-full max-w-full">
            <label className="label">
              <span className="label-text -mb-1">Prix</span>
            </label>
            <input
              type="text"
              placeholder="460 000"
              className="input h-10 input-bordered  w-full max-w-full
              "
            />
          </div>
          {/* QUantity */}
          <div className="form-control w-full max-w-full">
            <label className="label">
              <span className="label-text -mb-1">Quantité</span>
            </label>
            <input
              type="text"
              placeholder="40"
              className="input h-10 input-bordered  w-full max-w-full
              "
            />
          </div>

          {/* Description */}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Le Galaxy S24 Ultra est doté d'un système de caméra Quad Tele qui permet de prendre des photos haute résolution, zoomées, plus nettes et plus claires que le ..."
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">En reduction ? </span>
              <input type="checkbox" className="checkbox" />
            </label>
          </div>
        </div>
      </div>

      <div className="pb-5 w-full max-w-xl flex items-center justify-center ">
        <button className="bg-orange-600 w-full h-10 rounded-md text-white ">
          Enregistrer
        </button>
      </div>
    </div>
  );
}
