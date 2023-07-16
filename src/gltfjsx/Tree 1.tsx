import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Trunks: THREE.Mesh;
    leaves: THREE.Mesh;
  };
  materials: {};
};

export function Tree(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("/Tree1.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Trunks.geometry}
        material={nodes.Trunks.material}
      >
        <meshStandardMaterial color={"brown"}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.leaves.geometry}
        material={nodes.leaves.material}
      >
           <meshStandardMaterial color={"green"}/>
      </mesh>
    </group>
  );
}

useGLTF.preload("/Tree1.glb");
