import React from "react";

function HeroSection() {
  return (
    <div className="flex flex-col mx-auto   ">
      \{/* image  logo div */}
      <section className="max-w-6xl mx-auto  text-center mb-40 px-10 pt-16">
        <img className="mx-auto my-16" src="../../public/logo.svg"></img>
        <h3 className=" text-3xl font-bold mb-8 md:text-5xl ">
          A histtory of everything you copy
        </h3>
        <p className="text-2xl text-gray-400">
          Clipboard allows you to track and organize everything you
          copy.instanly access your clipboard on all your devices.
        </p>
        <div className="flex my-10 flex-col md:flex-row md:space-y-0 md:space-x-4 space-y-4 w-full justify-center">
          <button className="bg-green-300 p-4 min-w-xs px-8 text-lg hover:scale-90  duration-700 text-white rounded-3xl">
            {" "}
            Download for iso
          </button>
          <button className="bg-blue-300 p-4 min-w-xs  px-8 text-lg hover:scale-90  duration-700 text-white rounded-3xl">
            {" "}
            Download for Window
          </button>
        </div>
      </section>
      
      
      <section className="max-w-6xl text-center flex flex-col mx-auto px-10 md:my-20 space-y-8">
        <div className="text-3xl font-bold md:text-5xl">
          Keep Track of your snippets
        </div>
        <p className="text-xl text-gray-400">
          Clipboard instanly stores any item you copy in the cloud meaning you
          can access yout snippets immediately on all your
           devices.Our Window
          and Iso apps will help you organize everything.
        </p>
      </section>

      {/* image section  */}
      <section className="flex flex-col" >
        <div className="my-10"> 
        <div className="relative p-8 flex flex-col md:flex-row md:space-x-32">
          <div className="md:w-1/2 " >
            <img className=" md:absolute top-0 right-[50%] " src="../../public/image-computer.png "></img>


         
          </div>
          <div className="flex flex-col mt-16 mb-24 space-y-12 text-center text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
            <div className="space-y-4 font-bold">
              <h5 className="text-4xl font-bold" > Quick Search </h5>
              <p className="text-2xl text-gray-400">Easily serach your snippets  lorem</p>
            </div>
            <div className="space-y-4 font-bold">
              <h5 className="text-4xl"> Quick Search </h5>
              <p className="text-2xl text-gray-400">Easily serach your snippets  lorem</p>
            </div>
            <div className="space-y-4 font-bold">
              <h5 className="text-4xl"> Quick Search </h5>
              <p className="text-2xl text-gray-400">Easily serach your snippets  lorem</p>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section>
        <div className="flex text-center flex-col mx-auto p-4 space-y-8 ">
        <div className="">
        <h5 className="text-4xl font-bold ">
          Access clipboard anywhere
        </h5>

        </div>
          <div className="">
            <img className="" src="../../public/image-devices.png"></img>
          </div>
          <div className="">
        <h5 className="text-4xl font-bold ">
          Supercharge your workflow
        </h5>

        </div>
        </div>
      </section>
      <section>
        <div className="mx-auto md:flex-row mt-10 md:mt-20 flex  md:justify-between flex-col text-center space-y-4">
          <div className="flex justify-center">
            <img className="mx-auto md:mx-auto " src="../../public/icon-blacklist.svg"></img>
          <div className="flex flex-col">
            <p className="text-2xl"> Create a blacklist</p>
          </div>
          </div>
          <div className="">
            <img className="mx-auto" src="../../public/icon-preview.svg"></img>
          <div className="flex flex-col">
            <p className="text-2xl"> Create a blacklist</p>
          </div>
          </div>
          <div className="">
            <img className="mx-auto" src="../../public//icon-text.svg"></img>
          <div className="flex flex-col">
            <p className="text-2xl"> Create a blacklist</p>
          </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" mt-20 space-y-10 md:space-y-0 md:mt-50 flex flex-col md:flex-row mx-auto p-10 justify-center md:justify-between">
          <div className="">
            <img className="mx-auto" src="../../public/logo-google.png"></img>
          </div>
          <div className="">
            <img className="mx-auto" src="../../public/logo-ibm.png"></img>
          </div>
          <div className="">
            <img className="mx-auto" src="../../public/logo-hp.png"></img>
          </div>
          <div className="">
            <img className="mx-auto" src="../../public/logo-microsoft.png"></img>
          </div>
        </div>

      </section>
      <section className="max-w-6xl mx-auto  text-center mb-40 px-10 pt-16">
        <img className="mx-auto my-16" src="../../public/logo.svg"></img>
        <h3 className=" text-3xl font-bold mb-8 md:text-5xl ">
Clipboard for iOS and Window
        </h3>
        <p className="text-2xl text-gray-400">
          Clipboard allows you to track and organize everything you
          copy.instanly access your clipboard on all your devices.
        </p>
        <div className="flex my-10 flex-col md:flex-row md:space-y-0 md:space-x-4 space-y-4 w-full justify-center">
          <button className="bg-green-300 p-4 min-w-xs px-8 text-lg hover:scale-90  duration-700 text-white rounded-3xl">
            {" "}
            Download for iso
          </button>
          <button className="bg-blue-300 p-4 min-w-xs  px-8 text-lg hover:scale-90  duration-700 text-white rounded-3xl">
            {" "}
            Download for Window
          </button>
        </div>
      </section>
    </div>

  )
}

export default HeroSection;
