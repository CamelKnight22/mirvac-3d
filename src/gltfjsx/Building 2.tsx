
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    level: THREE.Mesh;
    balc: THREE.Mesh;
    Glass: THREE.Mesh;
    between: THREE.Mesh;
    windows: THREE.Mesh;
    roof: THREE.Mesh;
    window_part: THREE.Mesh;
    ground: THREE.Mesh;
  };
  materials: {};
};

export function Building2(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("/building 2.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.level.geometry}
        material={nodes.level.material}
        position={[0, 0.023, 0]}
      >
       <meshStandardMaterial roughness={1} color={"#ffe6e6"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.balc.geometry}
        material={nodes.balc.material}
        position={[0, 0.023, 0]}
      >
       <meshStandardMaterial color={"#808080"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Glass.geometry}
        material={nodes.Glass.material}
        position={[0, 0.023, 0]}
      >
       <meshStandardMaterial  transparent opacity={0.5} roughness={0} color={"#000000"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.between.geometry}
        material={nodes.between.material}
        position={[0, 0.023, 0]}
      >
       <meshStandardMaterial color={"#cdb1b1"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windows.geometry}
        material={nodes.windows.material}
        position={[0, 0.023, 0]}
      >
     <meshStandardMaterial roughness={0.1} metalness={0.9} color={"#e6e6e6"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.roof.geometry}
        material={nodes.roof.material}
        position={[0, 0.023, 0]}
      >
       <meshStandardMaterial metalness={0.5} roughness={0.2} color={"#a6a6a6"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.window_part.geometry}
        material={nodes.window_part.material}
        position={[0, 0.023, 0]}
      >
       <meshStandardMaterial color={"#808080"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ground.geometry}
        material={nodes.ground.material}
      >
       <meshStandardMaterial color={"#666666"} side={THREE.DoubleSide}/>
      </mesh>
    </group>
  );
}

useGLTF.preload("/building 2.glb");
