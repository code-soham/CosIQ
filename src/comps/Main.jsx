import Tabs from "./Tabs";

export default function Main() {
  return (
    <div className="min-h-screen max-w-6xl m-auto">
      <div id="head" className="w-full h-24 flex justify-between">
        <div id="branding" className="flex items-center justify-center">
          <img
            src="./CosIq.png"
            className="h-20 flex items-center"
            alt="CosIQ Logo"
          />
          <div className="flex flex-col text-left justify-center">
            <div className="font-black text-2xl">CosIQ</div>
            <div className="font-thin">Delhi,</div>
          </div>
        </div>
        <div
          id="btns"
          className="flex items-center mx-4 justify-between min-w-[160px]"
        >
          <button className="text-blue-600 h-fit border border-blue-600 px-4 py-2">
            Save
          </button>
          <button className="text-blue-600 h-fit border border-blue-600 px-4 py-2">
            Share
          </button>
        </div>
      </div>
      <hr />
      <div id="chips" className="flex font-thin font-mono text-[12px] p-2">
        <div className="p-1 bg-purple-200">#BEAUTY & PERSONAL CARE</div>
        <div className="p-1 bg-yellow-100 text-purple-400">#SHARK TANK</div>
        <div className="p-1 ">#FMCG</div>
      </div>
      <div id="title" className="text-xl font-bold px-2 text-left">
        Molecular skincare brand focussed on safe & visible results
      </div>
      <div className="flex justify-start text-gray-500 text-sm px-2">
        <div>
          <i className="bx bx-globe" />
          <span className="mx-2">https://mycosiq.com</span>
        </div>
        <div>
          <i className="bx bx-card" />
          <span className="mx-2">AAGCI5003E</span>
        </div>
      </div>
      <div
        id="body"
        className="flex flex-col lg:flex-row justify-evenly items-center"
      >
        <img
          src="./cosiq_large.png"
          className="m-10 mb-0 max-w-[80vw] w-[600px]"
          alt="COSIQ LARGE"
        />
        <div className="flex flex-col w-3/4 items-center justify-start text-left lg:w-full m-10">
          <hr />
          <div className="w-full">
            <div className="text-lg font-medium">₹855000</div>
            <div className="text-[10px]">
              33.13953488372093 % of minimum goal raised
            </div>
            <hr className="my-4" />
          </div>

          <div className="w-full">
            <div className="text-lg font-medium">51</div>
            <div className="text-[10px]">Total Investors</div>
            <hr className="my-4" />
          </div>

          <div className="w-full">
            <div className="text-lg font-medium">15 Days</div>
            <div className="text-[10px]">Left to Invest</div>
            <hr className="my-4" />
          </div>
          <button className="bg-black text-white w-full p-2 text-sm">
            Login to Invest
          </button>
          <span className="font-extralight text-[10px]">
            ₹ 1000 Minimum Investment
          </span>
        </div>
      </div>
      <hr />
      <span className="font-extralight text-[12px]">
        Unable to view video ? Click here
      </span>
      <Tabs />
    </div>
  );
}
