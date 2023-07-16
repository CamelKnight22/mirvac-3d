
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    ground: THREE.Mesh;
  };
  materials: {};
};

export function Sland(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("/small-land.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ground.geometry}
        material={nodes.ground.material}
        >
        <meshStandardMaterial color={"#a0a092"} side={THREE.DoubleSide}/>
       </mesh>
    </group>
  );
}

useGLTF.preload("/small-land.glb");
