import Image from "next/image";
import Navbar from "./navbar";
import img1 from "./img1.jpg";



export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Navbar />
  <div className="w-full flex h-screen  bg-[url('https://images.unsplash.com/photo-1501962973019-d980bc576111?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGFpbG9yJTIwYmd8ZW58MHwwfDB8fHww')] bg-cover bg-center">
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
 <button className=""></button>
     </div>
     <div className="img w-1/2 p-2 hover:cursor-zoom-in ">
  <Image
    src={img1}
    alt="Your image"
    className="rounded-xl w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
    priority
  />
</div>

    </div>
    
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
