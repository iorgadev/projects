import React, { useRef, Suspense, useState, useEffect } from "react";
import * as THREE from "three";
import useMouse from "@react-hook/mouse-position";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Stars } from "@react-three/drei";
import Racer from "../../../components/threeships/racer";
import Head from "next/head";

export function CustomCursor() {
  const cursorRef = useRef(null);
  useEffect(() => {
    if (cursorRef.current == null || cursorRef == null) return;
    document.addEventListener("mousemove", (e) => {
      if (cursorRef.current == null) return;
      cursorRef.current.setAttribute(
        "style",
        "top: " + e.pageY + "px; left: " + e.pageX + "px;"
      );
    });
    document.addEventListener("click", () => {
      if (cursorRef.current == null) return;
      cursorRef.current.classList.add("expand");
      setTimeout(() => {
        if (cursorRef.current == null) return;
        cursorRef.current.classList.remove("expand");
      }, 500);
    });
  }, []);
  return (
    <div className="cursor" ref={cursorRef}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
}

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  return useFrame(() =>
    camera.position.lerp(
      vec.set(mouse.x * 25, mouse.y * 10, camera.position.z),
      0.02
    )
  );
}
interface PerspectiveButtonProps {
  text: string;
  turnY: number;
  children?: React.ReactChild;
}
function PerspectiveButton({ text, turnY, children }: PerspectiveButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="perspective__menu__button"
      onMouseOver={() => setIsHovered((p) => true)}
      onMouseLeave={() => setIsHovered((p) => false)}
    >
      {children}
      <span>{text}</span>
      {isHovered ? (
        <>
          <div
            className="perspective__menu__button__holo"
            style={{
              transform: `rotateX(${0}deg) translateZ(30px)`,
              top: `${turnY < 0 ? -Math.abs(turnY) : -Math.abs(turnY)}px`,
              left: `${turnY < 0 ? turnY * 0.2 - 20 : turnY * 0.2 - 20}px`,
            }}
          ></div>
          <div
            className="perspective__menu__button__holo border-hacker-300"
            style={{
              transform: `rotateX(${0}deg) translateZ(50px)`,
              top: `${-Math.abs(turnY) - 5}px`,
              left: `${turnY - 20}px`,
            }}
          ></div>
        </>
      ) : null}
    </div>
  );
}

function Perspective() {
  const ref = useRef(null);
  const mouse = useMouse(ref);

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const turnYDegree = () => {
    let maxWidth = ref.current ? ref.current.offsetWidth : 0;
    let middlePoint = maxWidth / 2;
    let deg = 0;

    if (mouse.x < middlePoint) {
      deg = -lerp(10, 0, mouse.x / middlePoint);
    } else if (mouse.x > middlePoint) {
      deg = lerp(0, 10, (mouse.x - middlePoint) / middlePoint);
    } else {
      deg = 0;
    }

    return deg;
  };

  return (
    <div
      ref={ref}
      className="project perspective"
      // onClick={() => console.log(turnYDegree())}
    >
      <Head>
        <title>CSS Perspective with ThreeJS Elements</title>
      </Head>
      <CustomCursor />
      <div className="perspective__bg"></div>
      <div
        className="perspective__menu"
        style={{
          transform: `rotateY(${turnYDegree()}deg) rotateX(${5}deg)`,
        }}
      >
        <PerspectiveButton text={"start"} turnY={turnYDegree()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </PerspectiveButton>
        <PerspectiveButton text={"settings"} turnY={turnYDegree()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        </PerspectiveButton>
        <PerspectiveButton text={"quit"} turnY={turnYDegree()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </PerspectiveButton>
      </div>

      <div className="perspective__canvas">
        <Canvas camera={{ position: [0, 0, 0] }}>
          <Suspense fallback={null}>
            <Stars />
            <spotLight position={[-25, 0, -50]} scale={10} />
            <Environment preset="sunset" />
            <Racer />
          </Suspense>
          <Rig />
        </Canvas>
      </div>
    </div>
  );
}

export default Perspective;
