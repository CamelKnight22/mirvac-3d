
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: THREE.Mesh;
    Cone: THREE.Mesh;
    Torus: THREE.Mesh;
  };
  materials: {};
};

export function SomethingOb(props: JSX.IntrinsicElements["group"]) {
  const { nodes} = useGLTF("/something.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
      >
       <meshStandardMaterial roughness={0.3} metalness={1} color={"#867979"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone.geometry}
        material={nodes.Cone.material}
      >
       <meshStandardMaterial roughness={0.3} metalness={1} color={"#867979"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus.geometry}
        material={nodes.Torus.material}
      >
       <meshStandardMaterial roughness={0.3} metalness={1} color={"#867979"} side={THREE.DoubleSide}/>
      </mesh>
    </group>
  );
}

useGLTF.preload("/something.glb");