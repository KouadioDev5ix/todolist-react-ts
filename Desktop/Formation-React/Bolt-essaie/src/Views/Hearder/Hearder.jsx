import { AlignJustify, X } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Hearder() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  /**
   * Just toggle the menu
   */

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  /**
   * Perform action that displays the navbar when user scroll
   */

  useEffect(() => {
    const unableScrollYIfModalIsActive = () => {
      if (toggleMenu) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    };
    unableScrollYIfModalIsActive();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflowY = "auto";
    };
  }, [toggleMenu]);

  return (
    <div className="relative">
      {/* 
      BACK-GROUND SECTION */}
      <div className="relative custom-bg w-full h-fit">
        <div className="bg-black/50 absolute w-full h-full"></div>
        <div className="relative w-10/12 max-w-7xl mx-auto py-10">
          <div className="w-1/2">
            <h1 className="text-6xl mt-5 font-bold leading-tight text-white">
              Allez n’importe où en France, à n’importe quelle heure
            </h1>
            <p className="mt-5 text-base font-normal text-white ">
              Allez n’importe où en France, à n’importe quelle heure Bolt est
              l'application de mobilité tout-en-un. En quelques minutes, vous
              êtes pris en charge par un chauffeur offrant un service de
              transport de premier ordre et profitez d'un trajet confortable
              jusqu'à votre destination. Sinon, évitez complètement les
              embouteillages grâce à l'une de nos trottinettes leaders sur le
              marché.
            </p>
            <button className="mt-7 h-12 w-40 font-bold text-sm bg-custumGreen rounded-full text-white">
              Télécharger l'appli
            </button>
          </div>
        </div>
      </div>

      {/* NAV BAR SECTIONS */}
      <div
        className={`fixed z-[50] top-0 w-full transition-colors duration-300 ${
          isScrolled || toggleMenu
            ? "bg-gray-100 text-gray-900"
            : "text-white bg-transparent"
        }`}
      >
        <div className="w-10/12 max-w-7xl mx-auto flex items-center justify-between h-14">
          <div className="font-extrabold text-2xl">.Bolt</div>
          <div className="flex items-center gap-10">
            <h1
              className={`text-sm font-semibold ${
                isScrolled ? "text-gray-950" : ""
              }`}
            >
              FR
            </h1>
            <button
              className={`h-8 w-20 text-sm font-semibold ${
                isScrolled || toggleMenu
                  ? "hover:bg-gray-200 text-gray-950 rounded-full "
                  : ""
              }`}
            >
              Support
            </button>
            <button
              className={`h-9 w-24 text-sm font-bold ${
                isScrolled || toggleMenu
                  ? "bg-black rounded-full text-white"
                  : "bg-white rounded-full text-black"
              }`}
            >
              S'Inscrire
            </button>
            <div
              className={`h-10 w-10 flex items-center justify-center text-sm font-semibold cursor-pointer ${
                isScrolled || toggleMenu
                  ? "hover:bg-gray-200 text-gray-950 rounded-full "
                  : ""
              }`}
              onClick={() => handleToggleMenu()}
            >
              {toggleMenu ? <X /> : <AlignJustify />}
            </div>
          </div>
        </div>
      </div>

      {/* LOREM FOR TEST PURPOSE */}
      <div className="mt-10 ">
        itaque quia repudiandae saepe, blanditiis provident. Ipsum totam velit
        at dicta eum voluptate odio ratione. Aut provident molestiae sit dicta
        alias! Molestias rem alias laborum modi ea quasi nobis possimus
        voluptatum suscipit obcaecati. In illo expedita commodi unde
        necessitatibus debitis, libero ab perferendis magni illum!
        Necessitatibus fuga voluptatibus quaerat incidunt nam est possimus?
        Repellendus tempore voluptas delectus labore recusandae doloribus, nemo
        ullam quam quod inventore, fuga, velit hic excepturi vero obcaecati nisi
        debitis minima facilis. Nostrum repellat veritatis saepe vel, nam
        corrupti magni quos earum illum nihil incidunt. Officia quia nostrum rem
        quisquam! Architecto excepturi doloribus est aliquam sit. Aperiam optio
        fuga quidem officiis porro? Sit similique dolorum commodi porro?
        Reprehenderit impedit dolores consectetur aut recusandae error illo
        alias inventore cupiditate. Nulla vero laborum sequi praesentium facilis
        eveniet, odio accusamus dolorem consequuntur, dolor fugiat cumque. Autem
        in placeat beatae sed amet sint debitis nam molestiae maiores? Maiores
        voluptatum, nihil inventore quaerat aspernatur officiis laboriosam ex
        rem? Laudantium delectus eligendi perspiciatis itaque debitis adipisci
        quam alias. Aperiam maiores error quo beatae laboriosam repellendus
        delectus ut autem voluptatibus, voluptates sint facere cumque iusto
        rerum quisquam! Consequatur inventore nesciunt placeat est obcaecati
        molestias vel asperiores dignissimos nemo enim. Dolorum quam maxime
        veniam aliquid voluptatibus enim vitae unde quibusdam aperiam ipsa dolor
        blanditiis sapiente nostrum delectus hic magnam harum, deserunt officiis
        officia. Labore, autem deleniti maxime totam suscipit expedita? Officiis
        magni rerum fuga qui laboriosam, animi expedita ullam consequatur
        quisquam nemo saepe quam consequuntur voluptas porro corporis cum? Cum
        blanditiis corrupti quas ab unde iste amet consectetur iusto
      </div>

      {/* MODAL SECTIONS */}
      <div
        className={`fixed flex justify-center items-center gap-10 top-0 w-full h-full bg-gray-100 transition-transform duration-700 ease-in-out ${
          toggleMenu ? "translate-y-0" : "-translate-y-full"
        } overflow-y-auto`}
      >
        {/* MODAL CONTENT */}
        <div className="relative w-10/12 max-w-7xl flex items-stretch mt-20 pt-10 h-full gap-2">
          {/* LEFT SIDE ELEMENT */}
          <div className="w-[73.5%] p-4 flex flex-col h-full bg-[#061A370A] rounded-lg">
            {/* BUTTON SECTIONS */}
            <div className="flex items-center justify-bewteen gap-5 text-sm font-bold text-gray-900">
              <button className="bg-white h-10 w-fit px-2 rounded-md">
                Services
              </button>
              <button>Générez des revenus avec Bolt</button>
              <button>Entreprise</button>
              <button>Sécurité</button>
              <button>Support</button>
              <button>Villes</button>
            </div>
            {/* SERVICE FIRST ROW CONTENT  */}
            <div className="flex mt-5 items-start gap-10 text-sm ">
              {/* FIST COLUM */}
              <div className="space-y-3">
                <div className="text-gray-900 font-bold cursor-pointer hover:bg-gray-300 rounded-lg px-2 py-2 w-48">
                  Trajets
                </div>
                <div className="text-gray-600 cursor-pointer  hover:bg-gray-300 hover:text-gray-900 hover:font-bold rounded-lg px-2 py-2 w-48">
                  Sécurite des <br /> passagers
                </div>
                <div className="text-gray-600 cursor-pointer  hover:bg-gray-300 hover:text-gray-900 hover:font-bold rounded-lg px-2 py-2 w-48">
                  Devenir partenaire <br /> chauffeur
                </div>
              </div>

              {/* SECOND COLUM */}
              <div className=" space-y-3">
                <div className="text-gray-900 font-bold cursor-pointer hover:bg-gray-300 rounded-lg px-2 py-2 w-48">
                  Trottitette <br /> electique{" "}
                </div>
                <div className="text-gray-600 cursor-pointer  hover:bg-gray-300 hover:text-gray-900 hover:font-bold rounded-lg px-2 py-2 w-48">
                  Sécurite à Trottitette
                </div>
                <div className="text-gray-600 cursor-pointer  hover:bg-gray-300 hover:text-gray-900 hover:font-bold rounded-lg px-2 py-2 w-48">
                  Signaler un problème
                </div>
                <div className="text-gray-600 cursor-pointer  hover:bg-gray-300 hover:text-gray-900 hover:font-bold rounded-lg px-2 py-2 w-48">
                  Safety Lab
                </div>
              </div>

              {/* FIRD COLUM */}

              <div className="space-y-3">
                <div className="text-gray-900 font-bold cursor-pointer hover:bg-gray-300 rounded-lg px-2 py-2 w-48">
                  Bolt market
                </div>
                <div className="text-gray-600 cursor-pointer  hover:bg-gray-300 hover:text-gray-900 hover:font-bold rounded-lg px-2 py-2 w-48">
                  Devenir livreur
                </div>
                <div className="text-gray-600 cursor-pointer  hover:bg-gray-300 hover:text-gray-900 hover:font-bold rounded-lg px-2 py-2 w-48">
                  Ajouter un restaurant <br /> ou un magasin{" "}
                </div>
              </div>
            </div>

            {/* SERVICE SECOND ROW CONTENT  */}
            <div className="flex mt-5 items-start gap-10 text-sm ">
              {/* FIST COLUM */}
              <div className="space-y-3">
                <div className="text-gray-900 font-bold cursor-pointer hover:bg-gray-300 rounded-lg px-2 py-2 w-48">
                  Bolt food
                </div>
                <div className="text-gray-600 cursor-pointer  hover:bg-gray-300 hover:text-gray-900 hover:font-bold rounded-lg px-2 py-2 w-48">
                  Devenir livreur
                </div>
                <div className="text-gray-600 cursor-pointer  hover:bg-gray-300 hover:text-gray-900 hover:font-bold rounded-lg px-2 py-2 w-48">
                  Ajouter un restautant <br /> ou un magasin
                </div>
              </div>

              {/* SECOND COLUM */}
              <div className=" space-y-3">
                <div className="text-gray-900 font-bold cursor-pointer hover:bg-gray-300 rounded-lg px-2 py-2 w-48">
                  Bolt Drive
                </div>
                <div className="text-gray-600 cursor-pointer  hover:bg-gray-300 hover:text-gray-900 hover:font-bold rounded-lg px-2 py-2 w-48">
                  FAQ
                </div>
                <div className="text-gray-600 cursor-pointer  hover:bg-gray-300 hover:text-gray-900 hover:font-bold rounded-lg px-2 py-2 w-48">
                  Report a vehicule
                </div>
              </div>

              {/* FIRD COLUM */}

              <div className="space-y-3">
                <div className="text-gray-900 font-bold cursor-pointer hover:bg-gray-300 rounded-lg px-2 py-2 w-48">
                  Bolt business
                </div>
                <div className="text-gray-600 cursor-pointer  hover:bg-gray-300 hover:text-gray-900 hover:font-bold rounded-lg px-2 py-2 w-48">
                  Avantages
                </div>
                <div className="text-gray-600 cursor-pointer  hover:bg-gray-300 hover:text-gray-900 hover:font-bold rounded-lg px-2 py-2 w-48">
                  Profil professionnel
                </div>
                <div className="text-gray-600 cursor-pointer  hover:bg-gray-300 hover:text-gray-900 hover:font-bold rounded-lg px-2 py-2 w-48">
                  Services
                </div>
                <div className="text-gray-600 cursor-pointer  hover:bg-gray-300 hover:text-gray-900 hover:font-bold rounded-lg px-2 py-2 w-48">
                  Bolt for food business
                </div>
              </div>
            </div>

            {/* SERVICE THIRD ROW CONTENT  */}
            <div className="flex mt-5 items-start gap-10 text-sm ">
              {/* FIST COLUM */}
              <div className="space-y-3">
                <div className="text-gray-900 font-bold cursor-pointer hover:bg-gray-300 rounded-lg px-2 py-2 w-48">
                  Vélo électrique
                </div>
                <div className="text-gray-600 cursor-pointer  hover:bg-gray-300 hover:text-gray-900 hover:font-bold rounded-lg px-2 py-2 w-48">
                  Savety lab
                </div>
                <div className="text-gray-600 cursor-pointer  hover:bg-gray-300 hover:text-gray-900 hover:font-bold rounded-lg px-2 py-2 w-48">
                  Signaler un problème
                </div>
                <div className="text-gray-600 cursor-pointer  hover:bg-gray-300 hover:text-gray-900 hover:font-bold rounded-lg px-2 py-2 w-48">
                  FAQ
                </div>
              </div>

              {/* SECOND COLUM */}
              <div className=" space-y-3">
                <div className="text-gray-900 font-bold cursor-pointer hover:bg-gray-300 rounded-lg px-2 py-2 w-48">
                  Bolt plus
                </div>
                <div className="text-gray-600 cursor-pointer  hover:bg-gray-300 hover:text-gray-900 hover:font-bold rounded-lg px-2 py-2 w-48">
                  Avantages
                </div>
                <div className="text-gray-600 cursor-pointer  hover:bg-gray-300 hover:text-gray-900 hover:font-bold rounded-lg px-2 py-2 w-48">
                  How to join
                </div>
                <div className="text-gray-600 cursor-pointer  hover:bg-gray-300 hover:text-gray-900 hover:font-bold rounded-lg px-2 py-2 w-48">
                  FAQ
                </div>
              </div>

              {/* FIRD COLUM */}
            </div>
          </div>
          {/* RIGTH SIDE ELEMENT */}
          <div className="w-[27.8%] p-4 flex flex-col h-full bg-[#061A370A] rounded-lg">
            {/* ITEMS  */}
            {/* FIRST BOX */}
            <div className="flex items-center hover:bg-gray-300 p-2 justify-center gap-4 cursor-pointer rounded-lg">
              <div className="flex items-start gap-2 w-fit">
                <div>Icon</div>
                <div>
                  <h1 className="font-bold text-gray-900 text-sm">
                    Devenir partenaire chauffeur
                  </h1>
                  <p className="text-xs py-2 text-gray-500 font-bold">
                    Make money on your terms in the simplest way
                  </p>
                </div>
              </div>
            </div>
            {/* SECOND ITEM */}
            <div className="flex items-center hover:bg-gray-300 my-3 p-2 justify-center gap-4 cursor-pointer rounded-lg ">
              <div className="flex items-start gap-2 w-fit">
                <div>Icon</div>
                <div>
                  <h1 className="font-bold text-gray-900 text-sm">
                    Devenir livreur
                  </h1>
                  <p className="text-xs py-2 text-gray-500 font-bold">
                    Livrez des repas et générez des revenus chaque semaine
                  </p>
                </div>
              </div>
            </div>
            {/* THIRD ITEM */}
            <div className="flex items-center hover:bg-gray-300 my-3 p-2 justify-center gap-4 cursor-pointer rounded-lg ">
              <div className="flex items-start gap-2 w-fit">
                <div>Icon</div>
                <div>
                  <h1 className="font-bold text-gray-900 text-sm">
                    Ajouter un restaurant ou <br /> un magasin
                  </h1>
                  <p className="text-xs py-2 text-gray-500 font-bold">
                    Atteingnez plus de clients et augmentez vos revenus
                  </p>
                </div>
              </div>
            </div>
            {/* FOUTH ITEM */}
            <div className="flex items-center hover:bg-gray-300 my-3 p-2 justify-center gap-4 cursor-pointer rounded-lg ">
              <div className="flex items-start gap-2 w-fit">
                <div>Icon</div>
                <div>
                  <h1 className="font-bold text-gray-900 text-sm">
                    Inscrivez-vous comme partenaire flotte VTC
                  </h1>
                  <p className="text-xs py-2 text-gray-500 font-bold">
                    Add your fleet to Bolt and boost your income
                  </p>
                </div>
              </div>
            </div>
            {/* FITH ITEM */}
            <div className="flex items-center hover:bg-gray-300 my-3 p-2 justify-center gap-4 cursor-pointer rounded-lg ">
              <div className="flex items-start gap-2 w-fit">
                <div>Icon</div>
                <div>
                  <h1 className="font-bold text-gray-900 text-sm">
                    Bolt Business
                  </h1>
                  <p className="text-xs py-2 text-gray-500 font-bold">
                    Bolt products and services scaled-up for your business
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
