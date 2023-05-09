import { useState, useEffect } from "react";

function App() {
  const [excuse, setExcuse] = useState(null);
  const [dat, setData] = useState("");

  const FetchData = () => {
    fetch(`https://excuser-three.vercel.app/v1/excuse/${excuse}`)
      .then((res) => res.json())
      .then((data) => setData(data[0].excuse));
  };

  useEffect(() => {
    FetchData();
  }, [excuse]);

  return (
    <main className="bg-gray-100 text-gray-900 h-screen flex-col items-center  text-center">
      <div>
        <header className="bg-gray-800 w-full mb-5">
          <h1 className=" text-gray-100 py-5 text-3xl font-bold">
            Make Up An Excuse
          </h1>
        </header>

        <section>

          <p className="text-xl font-bold mb-10">on </p>
          <button
            type="button"
            onClick={() => setExcuse("office")}
            className="px-4 py-2 border-gray-900 bg-gray-700 text-gray-200 hover:bg-gray-900
             hover:text-gray-200 hover:px-6 hover:py-3 cursor m-4 uppercase rounded-lg hover:font-semibold"
          >
            Office
          </button>
          <button
            type="button"
            onClick={() => setExcuse("party")}
            className="px-4 py-2 border-gray-900 bg-gray-700 text-gray-200 hover:bg-gray-900
             hover:text-gray-200 hover:px-6 hover:py-3 cursor m-4 uppercase rounded-lg hover:font-semibold"
          >
            Party
          </button>
          <button
            type="button"
            onClick={() => setExcuse("family")}
            className="px-4 py-2 border-gray-900 bg-gray-700 text-gray-200 hover:bg-gray-900
             hover:text-gray-200 hover:px-6 hover:py-3 cursor m-4 uppercase rounded-lg hover:font-semibold"
          >
            Family
          </button>
          <button
            type="button"
            onClick={() => setExcuse("college")}
            className="px-4 py-2 border-gray-900 bg-gray-700 text-gray-200 hover:bg-gray-900
             hover:text-gray-200 hover:px-6 hover:py-3 cursor m-4 uppercase rounded-lg hover:font-semibold"
          >
            College
          </button>
        </section>

        <p className="text-gray-900 italic semi-bold text-2xl m-8">{dat}</p>
      </div>
    </main>
  );
}

export default App;
