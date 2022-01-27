import React, { useRef, Suspense } from "react";
import * as THREE from "three";
import useMouse from "@react-hook/mouse-position";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

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
      onClick={() => console.log(turnYDegree())}
    >
      <div
        className="perspective__menu"
        style={{
          transform: `rotateY(${turnYDegree()}deg) rotateX(${5}deg)`,
        }}
      >
        <div className="perspective__menu__button">
          <span>new game</span>
          <div
            className="perspective__menu__button__holo"
            style={{
              transform: `rotateX(${0}deg) translateZ(15px)`,
              top: `${
                turnYDegree() < 0
                  ? -Math.abs(turnYDegree()) + 10
                  : -Math.abs(turnYDegree()) + 10
              }px`,
              left: `${
                turnYDegree() < 0 ? turnYDegree() * 0.5 : turnYDegree() * 0.45
              }px`,
            }}
          ></div>
          <div
            className="perspective__menu__button__holo"
            style={{
              transform: `rotateX(${0}deg) translateZ(30px)`,
              top: `${-Math.abs(turnYDegree())}px`,
              left: `${turnYDegree()}px`,
              // border: `4px solid blue`,
            }}
          ></div>
        </div>
        <div className="perspective__menu__button">settings</div>
        <div className="perspective__menu__button">quit</div>
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
