import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const group = useRef();
  /* @ts-ignore */
  const { nodes, materials } = useGLTF("/models/craft_racer.glb");
  // useFrame(() => {
  //   group.current.rotation.y += 0.003;
  // });
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, 0]}>
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

useGLTF.preload("/craft_racer.glb");
