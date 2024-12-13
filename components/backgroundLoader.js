import React, { useRef, useState } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OBJLoader, MTLLoader, GLTFLoader } from "three-stdlib";
import { motion } from "framer-motion";
import { MeshStandardMaterial } from "three";
import { useGLTF } from "@react-three/drei";

function CustomModel(props) {
  const group = useRef();

  const materials = useLoader(MTLLoader, "/American_Football_ball.mtl");
  const obj = useLoader(OBJLoader, "/American_Football_ball.obj", loader => {
    materials.preload();
    loader.setMaterials(materials);
  });

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={group} {...props}>
      <primitive object={obj}/>
    </mesh>
  );
}

export default function backgroundLoader() {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full z-0"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 1 }}
    >
      <Canvas
        className="w-full h-full"
        dpr={[1, 2]}
        shadows
        camera={{ fov: 45 }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight position={[10, 5, 10]} />
        <CustomModel scale={8} position={[0, -0.5, 0]} />
      </Canvas>
    </motion.div>
  );
}
