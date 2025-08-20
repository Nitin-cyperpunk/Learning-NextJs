
"use client";
import Image from "next/image";
import Navbar from "./navbar";
import img1 from "./img1.jpg";
import Cards from "./cards";
import Heading from "./heading";

const cardData = new Array(4).fill(null).map((_, idx) => idx + 1);

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen  gap-1 ">

  <div className="w-full flex flex-col h-screen   bg-[url('https://images.unsplash.com/photo-1501962973019-d980bc576111?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGFpbG9yJTIwYmd8ZW58MHwwfDB8fHww')] bg-cover bg-center">
      <div className="w-full">
         <Navbar />
      </div>
     <div className="w-full h-auto flex flex-row">
         <div className="text w-1/2 text-left p-4">
   
      <h1 className="text-6xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-light">Unlocking the AI-Powered Tailor Marketplace
</h1>
<h4 className="text-3xl text-amber-300 font-thin mt-4">Bridging
 Tradition with
 Technology for
 a New Era of
 Fashion Retail</h4>
 <p className="text-xl text-amber-100 font-thin mt-4 italic">Revolutionizing
 Custom
 Apparel in India
 and Beyond
</p>
 <button className="bg-amber-500 text-black p-2 mt-4 rounded-xl hover:bg-amber-600 transition-colors duration-200 text-2xl" onClick={() => alert("Welcome to the AI-Powered Tailor Marketplace!")}>Join now</button>
     </div>
     <div className="img w-1/2 p-2 mb-3 ">
  <Image
    src={img1}
    alt="Your image"
    className="rounded-xl w-[600px] h-[600px] object-cover transform transition-transform duration-300 ease-in-out hover:scale-90"
    priority
  />
</div>
     </div>
  

    </div>
    <div className="div mt-1 w-full h-auto flex items-center justify-center">
  <Heading h1="Welcome to ai powered Tailor Marketplace" />
</div>
<div className="w-full h-[500px] gap-2 flex flex-row  p-2  overflow-x-hidden sm:h-auto">
  {cardData.map((item, idx) => (
    <Cards key={idx} number={item} />
  ))}
</div>
<div className="page2">
  <Heading h1="Explore Our Services" />
  <p className="text-lg text-gray-700 ">
    Discover a wide range of tailoring services powered by AI technology.
  </p>
  <ul className="list-disc list-inside">
    <li>Personalized clothing recommendations</li>
    <li>Virtual fitting room experience</li>
    <li>AI-driven fabric selection</li>
    <li>Seamless online ordering process</li>
  </ul>
</div>

    </div>
    
    
  );
}
