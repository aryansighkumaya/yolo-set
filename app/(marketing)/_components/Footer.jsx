import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube} from "react-icons/fa";
import Link from "next/link"

const Footer = () => {
  return (
<div className=" flex flex-col dark:bg-[#111418] bg-gray-100 dark:text-white text-black gap-5 z-50">
<FooterTop />
<hr className="border bg-gray-300 h-[3px] m-auto w-[87%] dark:bg-gray-500"/>
<FooterMid />
<hr className="border bg-gray-300 h-[3px] m-auto w-[87%] dark:bg-gray-500"/>
<FooterBottom />
<hr className="border bg-gray-300 h-[1px] m-auto w-[90%] dark:bg-gray-500"/>
</div>
  )
}

export default Footer



 const FooterTop = () => {
  return (
    <div id="top" className=" flex w-full justify-center">
      
    <div  className="flex sm:justify-evenly lg:justify-start w-[87%]">
    
    <div className=" flex flex-col gap-2 lg:ml-20 ml-2">
     <span>Legal</span>
     <div className=" flex flex-col gap-2">
<Link href={'#'}>
Privacy
</Link>
<Link href={'#'}>
Terms
</Link>
<Link href={'#'}>
Cookie Policy
</Link>
<Link href={'#'}>
Intellectual Property
</Link>
     </div>
    </div>
    
    <div className=" flex flex-col gap-2 lg:ml-20 ml-2">
     <span>Careers</span>
     <div className="flex flex-col gap-2">
     <Link href={'#'}>
Privacy
</Link>
<Link href={'#'}>
Terms
</Link>
<Link href={'#'}>
Cookie Policy
</Link>
     </div>
    </div>

    <div className=" flex flex-col gap-2 lg:ml-20 ml-2">
     <span>Social</span>
     <div className=" flex gap-2">
 <Link href={'#'}>
 <FaFacebookF size={28}/>
 </Link>

 <Link href={"#"}>
<FaInstagram  size={28}/>
 </Link>

 <Link href={"#"}>
 <FaYoutube size={28} />
 </Link>
 <Link href={"#"}>
 <FaTwitter size={28} />
 </Link>
     </div>
    </div>
    
 </div>
    </div>
  )
}


 const FooterMid = () => {
  return (
    <div id="mid" className="flex w-full justify-center">
<span className=" w-[85%] flex flex-col gap-3 text-sm">
<p className=" text-left break-words">
  Single people, listen up: If you’re looking for love, want to start dating, or just keep it casual, you need to be on Tinder. With over 55 billion matches made, it’s the place to be to meet your next best match. Let’s be real, the dating landscape looks very different today, as most people are meeting online. With Tinder, the world’s most popular free dating app, you have millions of other single people at your fingertips and they’re all ready to meet someone like you. Whether you’re straight or in the LGBTQIA community, Tinder’s here to bring you all the sparks.
</p>
<p className="text-left break-words">
There really is something for everyone on Tinder. Want to get into a relationship? You got it. Trying to find some new friends? Say no more. New kid on campus and looking to make the most of your college experience? Tinder U’s got you covered. Tinder isn’t your average dating site — it’s the most diverse dating app, where adults of all backgrounds and experiences are invited to make connections, memories, and everything in between.
</p>
</span>
    </div>
  )
}


 const FooterBottom = () => {
  return (
    <div id="bottom" className=" flex text-sm justify-center">
<div className=" flex justify-between w-[85%]">
<div className=" flex gap-2 flex-col lg:flex-row">
<span>FAQ /</span><span>Safety Tips /</span><span>Terms /</span> <span>Cookie Policy /</span> <span>Privacy Settings</span>
</div>
<p>© 2024 Match Group, LLC, All Rights Reserved.</p>
</div>
    </div>
  )
}
