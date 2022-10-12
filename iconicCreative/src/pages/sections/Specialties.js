import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import SpecCard from "../../components/SpecCard";
import glyph from "../../images/graphics/glyph.svg";

function Specialties({ pageWidth }) {
  // Parallax Effect
  const [offset, setOffset] = useState(0);
  const parallaxScroll = () => {
    setOffset(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", parallaxScroll);
    return () => window.removeEventListener("scroll", parallaxScroll);
  }, [offset]);
  const parallaxStyle = {
    // transform: `translate(-50%, ${offset * 0.4}px)`,
    transform:
      pageWidth > 768
        ? `translate(-50%, ${offset * 0.4}px)`
        : `translate(-50%, ${offset * 0.54}px)`,
  };
  // End Parallax

  const [ref, inView] = useInView({
    threshold: pageWidth > 520 ? 0.075 : 0,
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [ref4, inView4] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <ScSpecialties ref={ref}>
      <img src={glyph} alt="" className="glyph" style={parallaxStyle} />
      <header className="specialtiesHeader">
        {inView && <h2>| Specialties</h2>}
        {inView && (
          <p>
            We elevate brands to new heights <br /> and create jaw dropping
            websites.
          </p>
        )}
      </header>

      <div className="ref ref1" ref={ref2} />
      {inView2 && <SpecCard title={"UI / UX"} order={1} />}

      <div className="ref ref2" ref={ref3} />
      {inView3 && <SpecCard title={"Branding"} order={2} />}

      <div className="ref ref3" ref={ref4} />
      {inView4 && <SpecCard title={"Social Media"} order={3} />}

      <button className="servicesBtn">
        <a href="">View All Services</a>
        <FontAwesomeIcon icon={faChevronRight} className="faIcon" />
      </button>
    </ScSpecialties>
  );
}

const ScSpecialties = styled("section")`
  height: 260vh;
  min-height: 164rem;
  background: var(--dark);
  > * {
    position: absolute;
  }

  .glyph {
    top: 8%;
    left: 50%;
    transform: translate(-50%, 0);
    opacity: 0.04;
    width: 24vw;
  }
  .specialtiesHeader {
    top: 10%;
    left: 6%;
    > * {
      color: var(--light);
    }
    h2 {
      font-size: calc(1.2rem + 6vw);
      margin-bottom: 4vw;
      opacity: 0;
      transform: skew(-16deg, 1.2deg);
      animation: skewIn 0.6s ease 0.2s forwards;
    }
    p {
      font-size: calc(1rem + 1.2vw);
      margin-left: 4vw;
      opacity: 0;
      transform: skew(-16deg, 1.2deg);
      animation: skewIn 0.8s ease 0.3s forwards;
    }
  }

  .ref {
    padding: 1rem;
    left: 50%;
  }
  .ref1 {
    top: 26%;
  }
  .ref2 {
    top: 43%;
  }
  .ref3 {
    top: 65%;
  }

  #spec1 {
    right: 8%;
    transform: translate(0, -90%);
  }
  #spec2 {
    left: 8%;
    transform: translate(0, -32%);
  }
  #spec3 {
    right: 8%;
    transform: translate(0, 40%);
  }

  .servicesBtn {
    position: relative;
    top: 84%;
    left: 10%;
    transform: translate(0, 0);
    z-index: 2;
    a {
      color: var(--light);
      font-size: calc(0.8rem + 0.8vw);
      font-weight: 400;
      transition: color 0.4s ease 0.2s;
    }
    .faIcon {
      position: absolute;
      top: 50%;
      right: -6%;
      transform: translate(100%, -40%);
      color: var(--light);
      font-size: calc(0.6rem + 0.6vw);
      transition: transform 0.4s cubic-bezier(0.54, -0.85, 0.45, 1.67);
    }
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: -12%;
      transform: translate(0%, -50%);
      width: 4rem;
      height: 4rem;
      border-radius: 12rem;
      background: #3a3a3a;
      z-index: -1;
      pointer-events: none;
      transition: 0.4s cubic-bezier(0.42, -0.49, 0.64, 1.24);
    }
    &:hover {
      .faIcon {
        transform: translate(250%, -40%);
        transition-delay: 0.16s;
      }
      &::before {
        width: 124%;
        background: var(--offDark);
      }
    }
  }

  @media (max-width: 1440px) {
    min-height: 140rem;

    .servicesBtn {
      top: 82%;
    }
  }

  @media (max-width: 1224px) {
    min-height: 128rem;

    .specialtiesHeader {
      top: 8%;
    }
  }

  @media (max-width: 768px) {
    .glyph {
      top: 0;
      width: 48vw;
    }
    #spec1 {
      transform: translate(0, -150%);
    }
    #spec2 {
      transform: translate(0, -25%);
    }
    #spec3 {
      transform: translate(0, 100%);
    }

    .servicesBtn {
      top: 94%;
      &::before {
        width: 3.2rem;
        height: 3.2rem;
      }
    }
  }

  @media (max-width: 520px) {
    height: 220vh;
    min-height: 116rem;

    .glyph {
      top: 3%;
      width: 48vw;
    }

    #spec1 {
      right: 50%;
      transform: translate(50%, -150%);
    }
    #spec2 {
      left: auto;
      right: 50%;
      transform: translate(50%, -25%);
    }
    #spec3 {
      right: 50%;
      transform: translate(50%, 100%);
    }

    .servicesBtn {
      top: 94%;
    }
  }
`;

export default Specialties;