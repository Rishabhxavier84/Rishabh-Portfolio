import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Timeline } from "gsap/gsap-core";
import { skills } from "../Constants";
// import * as TiIcons from "react-icons/ti";

const Skills = () => {
  const skillsRef = useRef(null);
  const skillsNameRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const skillsTl = gsap.timeline({
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
        // markers: true,
      },
    });

    skillsTl
      .fromTo(
        skillsNameRef.current,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.5,
          ease: "expo.out",
          stagger: 0.1,
          delay: 0.9,
        }
      )
      .fromTo(
        carouselRef.current,
        { yPercent: 50, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.5,
          ease: "expo.out",
          stagger: 0.1,
          delay: 0.9,
        }
      );

    // return () => {
    //   skillsTl.scrollTrigger?.kill();
    //   skillsTl.kill();
    // };
  }, []);
  return (
    <main
      ref={skillsRef}
      id="skills"
      className=" overflow-hidden "
    >
      <div className="lg:mx-50 md:m-30 logo mt-20">
        <p ref={skillsNameRef} className="text-2xl">
          Skills & Tools:
        </p>
      </div>
      <div ref={carouselRef} className="carousel1">
        <div className="logos">
          {skills.map((item) => (
            <div key={item.id} className="card">
              <item.icon size={40} />
              <p className="max-md:hidden">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="logos">
          {skills.map((item) => (
            <div key={item.id} className="card">
              <item.icon size={40} />
              <p className="max-md:hidden">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Skills;
