
import klarna from "../assets/klarna.svg";
import coinbase from "../assets/coinbase.svg";
import instacart from "../assets/instacart.svg";

function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="">01</div>

      <div className="relative w-64 h-40 bg-gray-100 rounded-xl">
        <p>I am the parent.</p>
        <div className="absolute top-2 right-2 bg-teal-500 text-white px-3 py-1 rounded-lg text-sm">
          I float on top.
        </div>
      </div>

      <div className="flex flex-row gap-3 pl-12">
        <img src={klarna} alt="Klarna" className="img w-21" />
        <img src={coinbase} alt="coinbase" className="img w-35" />
        <img src={instacart} alt="instacart" className="img w-37" />
      </div>
    </div>
  )
}

export default Hero;
