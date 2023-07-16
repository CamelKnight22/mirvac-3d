
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    door: THREE.Mesh;
    between: THREE.Mesh;
    metal: THREE.Mesh;
    glass: THREE.Mesh;
    roof: THREE.Mesh;
    Cylinder: THREE.Mesh;
  };
  materials: {};
};

export function Building3(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("/building 3.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.door.geometry}
        material={nodes.door.material}
      >
       <meshStandardMaterial color={"#8c8c8c"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.between.geometry}
        material={nodes.between.material}
      >
       <meshStandardMaterial color={"#333333"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.metal.geometry}
        material={nodes.metal.material}
      >
       <meshStandardMaterial roughness={0.5} metalness={1} color={"#4d4d4d"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glass.geometry}
        material={nodes.glass.material}
      >
       <meshStandardMaterial roughness={0.2} metalness={1} color={"#8c8c8c"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.roof.geometry}
        material={nodes.roof.material}
      >
       <meshStandardMaterial color={"#808080"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        scale={3.592}
      >
       <meshStandardMaterial color={"#666666"} side={THREE.DoubleSide}/>
      </mesh>
    </group>
  );
}

useGLTF.preload("/building 3.glb");