import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Timeline } from "gsap/gsap-core";
import { skills } from "../Constants";
import Button from "./Button";
import { journey } from "../Constants";

const AboutTemp = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const journeyRef = useRef(null);

  useEffect(() => {
    const aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        end: "center 80%",
        scrub: 1,
        // markers: true
      },
    });

    // aboutTl.fromTo(
    //   "#app",
    //   { background: "#000000" },
    //   { background: "#999999", delay: 0, stagger: 0.06, ease: "power1.inOut" }
    // );

    aboutTl.fromTo(
      leftRef.current,
      { yPercent: 100 },
      { yPercent: 0, stagger: 0.06, ease: "power1.inOut" }
    );

    aboutTl.fromTo(
      rightRef.current,
      { yPercent: 100 },
      {
        yPercent: 0,
        stagger: 0.06,
        duration: 5,
        delay: 2,
        ease: "power1.inOut",
      },
      "+=1"
    );
  });
  return (
    <main id="about" className=" text-gray-900 py-24 overflow-hidden">
      {/* button */}
      <div className=" my-9 mx-auto h-[10%] w-screen flex justify-center items-center">
        <button className="bg-[#000] w-[320px] border-[1px] border-[#00c9c8] z-40 h-[50px] no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full  text-xs font-semibold leading-6  text-white inline-block">
          <span className="md:text-2xl text-base inline-block bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 via-neutral-600 to-neutral-300">
            About Me
          </span>
        </button>
      </div>

      {/* content */}
      <div
        ref={rightRef}
        className="flex max-md:flex-col max-sm:text-sm items-start justify-center w-[90%] m-auto gap-15"
      >
        {/* left side  */}
        <div
          ref={leftRef}
          className=" bg-[#f9f9f9]  p-10 border-[5px] shadow-2xl rounded-4xl w-full flex flex-col gap-10"
        >
          <p className=" text-center ">
            I’m a passionate <span className="spam">frontend developer</span>{" "}
            with a strong focus on crafting clean, responsive, and accessible
            websites. I graduated with a B.Tech in{" "}
            <span className="spam">Electronics and Communication</span> and have
            worked on multiple personal projects using{" "}
            <span className="spam">ReactJS</span> and{" "}
            <span className="spam">Tailwind CSS</span>.
          </p>

          <hr />

          <p className=" text-center rounded-4xl">
            I love transforming design ideas into{" "}
            <span className="spam">engaging</span>,{" "}
            <span className="spam">interactive experiences</span>. When I’m not
            coding, I channel my creativity through{" "}
            <span className="spam">drawing</span>,{" "}
            <span className="spam">photography</span>, and{" "}
            <span className="spam">video editing</span>.
          </p>
        </div>

        {/* right side  */}
        <div className=" w-full">
          <div className="w-full text-white font-bold text-2xl text-center lg:hidden">
            My <span>Journey</span>
          </div>
          {journey.map((item) => (
            <div
              key={item.id}
              ref={journeyRef}
              className="flex max-md:block mt-5 mb-5 gap-5 max-sm:gap-1 items-center"
            >
              <div className="w-20 m-auto max-md:mb-3 bg-[#00c9c8] py-2 border rounded-4xl shadow-2xl">
                <item.icon
                  // size={40}
                  color="#000"
                  className="text-4xl max-sm:text-2xl w-full m-auto max-sm:p-1 p-2"
                />
              </div>
              <div className="bg-[#f9f9f9] border w-full rounded-2xl shadow-2xl">
                <div className="flex justify-between gap-2 items-center w-full px-5 pt-3">
                  <div className="text-xl max-md:text-sm font-bold">
                    {item.heading}
                  </div>
                  <div className="bg-accent text-[12px] py-1 px-3 rounded-2xl">
                    {item.year}
                  </div>
                </div>
                <p className="px-5 my-3 text-[#999999]">{item.institute}</p>
                <div className="px-5 pb-5 text-sm">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutTemp;
