import React, { useRef, Suspense, useState, useEffect } from "react";
import * as THREE from "three";
import useMouse from "@react-hook/mouse-position";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

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
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
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
}
function PerspectiveButton({ text, turnY }: PerspectiveButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="perspective__menu__button"
      onMouseOver={() => setIsHovered((p) => true)}
      onMouseLeave={() => setIsHovered((p) => false)}
    >
      <span>{text}</span>
      {isHovered ? (
        <>
          <div
            className="perspective__menu__button__holo"
            style={{
              transform: `rotateX(${0}deg) translateZ(15px)`,
              top: `${turnY < 0 ? -Math.abs(turnY) : -Math.abs(turnY)}px`,
              left: `${turnY < 0 ? turnY * 0.5 : turnY * 0.45}px`,
            }}
          ></div>
          <div
            className="perspective__menu__button__holo"
            style={{
              transform: `rotateX(${0}deg) translateZ(30px)`,
              top: `${-Math.abs(turnY)}px`,
              left: `${turnY}px`,
              // border: `4px solid blue`,
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
      deg = -lerp(20, 0, mouse.x / middlePoint);
    } else if (mouse.x > middlePoint) {
      deg = lerp(0, 20, (mouse.x - middlePoint) / middlePoint);
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
      <CustomCursor />
      <div
        className="perspective__menu"
        style={{
          transform: `rotateY(${turnYDegree()}deg) rotateX(${5}deg)`,
        }}
      >
        <PerspectiveButton text={"start"} turnY={turnYDegree()} />
        <PerspectiveButton text={"settings"} turnY={turnYDegree()} />
        <PerspectiveButton text={"quit"} turnY={turnYDegree()} />
      </div>

      <div className="perspective__canvas">
        <Canvas camera={{ position: [0, 0, 0] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
          <Rig />
        </Canvas>
      </div>
    </div>
  );
}

export default Perspective;
