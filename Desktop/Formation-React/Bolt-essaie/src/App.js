import Hearder from "./Views/Hearder/Hearder";
import "./App.css";

const data = document.getElementById("id");

function App() {
  return (
    <div>
      <Hearder />
      {/* <div className="custom-bg relative h-fit ">
        <div className="bg-black/50 absolute w-full h-full"> </div>
        <div className="relative w-10/12 max-w-6xl mx-auto z-50 py-7">
          <div className="w-1/2">
            <h1 className="text-6xl font-bold leading-tight text-white">
              Allez n’importe <br /> où en France,à n’importe quelle heure
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

            <button className="mt-10 h-10 w-36 text-sm bg-green-600 rounded-full text-white">
              Télécharger l'appli
            </button>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
