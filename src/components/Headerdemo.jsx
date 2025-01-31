import Link from "next/link";


export default function Header() {

    return (
        <>
            <div className="container max-w-full px-10 flex items-center sticky top-0 z-50 justify-between bg-[#4A90E2]  ">
            <div className='flex'>
            <h1 className='text-2xl font-bold text-[#FF6F61] pt-5   '>WEBBRO</h1>
            <img className = "h-[70px] w-[80px] " alt="Logo Icon" title="Logo Icon" src="https://static.vecteezy.com/system/resources/thumbnails/038/516/357/small_2x/ai-generated-eagle-logo-design-in-black-style-on-transparant-background-png.png" />
            
            
            </div>
            <div className="flex justify-between items-center w-[40%] ">
                
            <Link href={"/home"}><div className="hover:text-[#FF6F61] transition-colors cursor-pointer text-[#E0E0E0] text-lg duration-300">Home</div></Link>
            <Link href={"/about"}><div className="hover:text-[#FF6F61] transition-colors cursor-pointer text-[#E0E0E0] text-lg duration-300">About</div></Link>
            <Link href={"/"}><div className="hover:text-[#FF6F61] transition-colors cursor-pointer text-[#E0E0E0] text-lg duration-300">Contact</div></Link>
            <Link href={"/services"}>  <div className="hover:text-[#FF6F61] transition-colors cursor-pointer text-[#E0E0E0] text-lg duration-300">Service</div></Link>
                <Link href={"/"}><div type="button" className="text-white hover:bg-[#4A90E2] hover:border-2 border-[#50E3C2]  bg-[#FF6F61] cursor-pointer rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Logout</div></Link>
            </div>
            

        </div>
        </>
    )
}