import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls, Environment } from "@react-three/drei";
import Racer from "../../../components/threeships/racer";
import Header from "../../../components/threeships/Header";

// function Box() {
//   const boxRef = useRef();
//   useFrame(() => {
//     boxRef.current.rotation.y += 0.001;
//   });
//   return (
//     <mesh ref={boxRef}>
//       <boxBufferGeometry attach="geometry" />
//       <meshLambertMaterial attach="material" color="hotpink" />
//     </mesh>
//   );
// }

// function Ship() {
//   const model = useLoader(GLTFLoader, "./models/craft_racer.glb");
//   return (
//     <Suspense fallback={null}>
//       <primitive object={model.scene} />
//     </Suspense>
//   );
// }

function ThreeShips() {
  return (
    <div className="three">
      <div className="ui">
        <Header />
        <div className="stats">
          <div className="stats__content">
            <h1>ACRacer</h1>
          </div>
        </div>
      </div>
      <div className="canvas">
        <Canvas>
          <Suspense fallback={null}>
            {/* @ts-ignore */}
            <OrbitControls />
            <Stars />
            {/* <ambientLight intensity={3.9} /> */}
            {/* <spotLight position={[3, 3, 3]} angle={0.5} />
          <spotLight position={[-5, -5, -5]} angle={0.5} /> */}
            <spotLight position={[0, 5, 0]} />
            <Environment preset="sunset" />
            <Racer />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default ThreeShips;
