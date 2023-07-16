import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    mountains: THREE.Mesh;
    MainGround: THREE.Mesh;
    Cube: THREE.Mesh;
    mountains001: THREE.Mesh;
  };
  materials: {};
};

export function Blandscape(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("/big-landscape.glb") as GLTFResult;


  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mountains.geometry}
      >
       <meshStandardMaterial color={"#004d00"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MainGround.geometry}
        material={nodes.MainGround.material}
        >
        <meshStandardMaterial color={"#999999"} side={THREE.DoubleSide}/>
       </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        >
        <meshStandardMaterial color={"#4d4d4d"} side={THREE.DoubleSide}/>
       </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mountains001.geometry}
        material={nodes.mountains001.material}
        >
        <meshStandardMaterial color={"#006600"} side={THREE.DoubleSide}/>
       </mesh>
    </group>
  );
}

useGLTF.preload("/big-landscape.glb");