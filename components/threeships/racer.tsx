import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const group = useRef();
  /* @ts-ignore */
  const { nodes, materials } = useGLTF("/models/craft_racer.glb");
  // useFrame(() => {
  //   // group.current.rotation.y += 0.003;
  //   // let position = { x: group.current.position.x, y: group.current.position.y };
  //   let direction = "up";
  //   if (direction == "up") group.current.position.y += 0.005;
  //   else group.current.position.y -= 0.01;

  //   group.current.position.y += group.current.position.y < 2 ? 0.01 : -0.01;
  //   // console.log(group.current.position.y);
  // });
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-25, -10, -50]} scale={16} rotation={[0, -2.2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_craft_racer.geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_craft_racer_1.geometry}
          material={materials.metalDark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_craft_racer_2.geometry}
          material={materials.dark}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_craft_racer_3.geometry}
          material={materials.metalRed}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/craft_racer.glb");
