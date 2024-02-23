import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



export default function Hero(){
    const container = useRef();

    useGSAP(() => {
    // gsap code here...
    gsap.to(".scroll-dw", {y: 40,repeat:-1,yoyo:true,duration:0.7}); // <-- automatically reverted

    }, { scope: container });

    return(
        <section>
            <div ref={container} className="container w-full align-center flex flex-col gap-y-8 mx-auto px-4 lg:px-0">               
                    <h1 className="mx-10 my-10 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                        <span className="block my-5">Welcome to</span> 
                        <span id="main-h1" className="block my-5 text-8xl sm:4xl">Siwa.Agency</span>
                        <span className="block my-5">your one-stop shop for crafting a stunning and impactful online presence.</span>
                    </h1>
                    <p className="mx-10 text-2xl font-bold leading-tight text-gray-900 ">
                        We're a passionate team of web developers and designers dedicated to turning your vision into a reality. 
                        Whether you're a budding entrepreneur, a seasoned business, or an individual seeking a personal platform, 
                        we have the expertise and creativity to bring your digital dreams to life.
                    </p>
                    <h3 className="scroll-dw mx-10 my-10 text-2xl font-bold leading-tight text-gray-900 ">Scroll  ↓</h3>
            </div>
        </section>
    );
}