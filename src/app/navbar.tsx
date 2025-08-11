export default function Navbar(){
    return(
        <div className="w-full h-auto blackdrop-blur-sm bg-white rounded-2xl text-3xl">
            <div className="flex gap-3 text-black font-thin items-start justify-start
            p-3 ">
                <a href="/page.tsx" className="">Home</a>
            <a href="" className="">About</a>
            <a href="" className="">Contact</a>
            <a href="" className="">Login</a>
            <a href="" className="">Register</a>
            </div>
        </div>
    )
}
