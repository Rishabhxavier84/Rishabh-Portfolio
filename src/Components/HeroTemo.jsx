import React from "react";
import { DotScreenShader } from "@/components/ui/dot-shader-background";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useEffect } from "react";

const HeroTemo = () => {
  useEffect(() => {
    const heroSplit = new SplitText(".hero:not(.span)", {
      type: "chars, words",
    });
    const spanSplit = new SplitText(".span", {
      type: "chars, words",
    });
    const paraSplit = new SplitText("#subHeading", { type: "lines" });
    const buttonSplit = new SplitText(".button", { type: "elements" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    spanSplit.chars.forEach((char) => char.classList.add("span-gradient"));

    // gsap.set(".mainButton, .mutedButton", { yPercent: 100, opacity: 0 });

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1.6,
      ease: "expo.out",
      stagger: 0.04,
      // delay: 0.3,
    });
    gsap.from(spanSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1.3,
      ease: "power4.out",
      stagger: 0.05,
      delay: 0.2,
    });

    gsap.from(paraSplit.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 2,
      ease: "expo.out",
      stagger: 1,
      delay: 0.8,
    });

    gsap.fromTo(
      ".button",
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.5,
        ease: "expo.out",
        stagger: 0.1,
        delay: 0.9,
      }
    );
  }, []);
  return (
    <main id="home" className="h-fit">
      <div className="bg-dot-pattern z-10 absolute top-0 bg-[#1a1a1a] left-0 w-screen md:h-screen h-full ">
        {/* <video
            src="../../public/2.mp4"
            type="video/mp4"
            className="w-full h-full object-fill"
            autoPlay
            loop
          ></video> */}
        <div className="absolute inset-0">
          <DotScreenShader />
        </div>
      </div>
      <div className="absolute inset-0 bg-[#000000ff] opacity-40"></div>

      <div className="  w-full h-fit py-30 md:h-screen flex flex-col md:justify-center items-center overflow-hidden">
        {/* heading */}
        <div className="hero logo px-15 py-5">
          Hello, <br />
          I'm <span className="span">Rishabh</span>
        </div>
        {/* sub-heading */}
        <div
          id="subHeading"
          className="flex flex-col justify-center items-center"
        >
          <p className="subhero">
            <span>Frontend</span> Developer & <span>UI/UX</span> Enthusiast
          </p>
          <p className="max-md:text-center md:text-xs text-xs bg-transparent backdrop-blur-3xl w-fit px-7 rounded-4xl border-2 border-transparent">
            I design and build <span>beautiful</span>, user-friendly{" "}
            <span>web experiences.</span>
          </p>
        </div>

        {/* Button */}
        <div className="my-5 flex justify-center items-center gap-10">
          <button className="mainButton button">View my work</button>
          <button className="mutedButton button">Contact me</button>
        </div>
      </div>
    </main>
  );
};

export default HeroTemo;
