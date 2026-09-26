import Image from "next/image"

const Footer = () => {
    return(
        <>
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 border-t-1  bg-black border-zinc-500 px-13">
  <aside className="grid-flow-col items-center">
    <Image src="/logo.png" alt="" width={30} height={30}/>
    <p className="font-bold text-3xl font-sans">FITLOG</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </nav>
</footer>
        </>
    )
}

export default Footer