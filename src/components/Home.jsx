const Home = () => { 
    return(
<div className="bg-[url('./assets/Recurso1.png')] bg-cover bg-no-repeat bg-white-100 min-h-screen" >
        <header className="container mx-auto px-4">
          <div className="flex justify-center gap-20 justify-items-center px-20">
            <div> <button className="grow text-gray-200 text-sm py-4">
              Home
            </button>
            </div>
            <div>
              <button className="grow text-gray-200 text-sm py-4">
                About
              </button>
            </div>
            <div>
              <button className="grow text-gray-200 text-sm py-4
            ">
                Catalogue
              </button>
            </div>
            <div>
              <button className="grow text-gray-200 text-sm py-4 ">
                Promo
              </button>
            </div>
            <div>
              <button className="grow text-gray-200 text-sm py-4 ">
                Contact
              </button>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 mt-8">
          <div className="py-40">
            <h1 className=" text-6xl text-center font-semibold text-white">Fashion</h1>
            <br />
            <h2 className=" text-6xl  text-center font-semibold text-white">Trending</h2>
            <p className="text-4xl text-center font-semibold text-white">Special Offer</p>
            <p className="text-4xl text-center font-semibold text-white">Only For You</p>
          </div>
          
          <div className="text-center">
            <p>Lorem Ipsum is simply </p>
            <p>dummy text of the printing</p>
            <p>and typesetting industry.</p>
            <p>Lorem Ipsum has been the</p>
            <p>industry's standard dummy</p>
            <p>text ever since the 1500s,</p>
            <p> when an unknown printer </p>
            <p >took a galley of type and</p>
            <br />
            <h2 className="text-3xl text-black">Buy now</h2>
          


          </div>
        </main>

      </div>
    )
 }
 export default Home;