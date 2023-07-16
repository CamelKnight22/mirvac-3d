import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    balc_2: THREE.Mesh;
    balc: THREE.Mesh;
    middle: THREE.Mesh;
    levels: THREE.Mesh;
    windows: THREE.Mesh;
    roof: THREE.Mesh;
    window_rim: THREE.Mesh;
    Ground: THREE.Mesh;
  };
  materials: {};
};

export function Building1(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("/Building 1.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.balc_2.geometry}
        material={nodes.balc_2.material}
      >
       <meshStandardMaterial color={"#b3b3b3"} side={THREE.DoubleSide}/>
      </mesh>
      
 
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.balc.geometry}
        material={nodes.balc.material}
      >
       <meshStandardMaterial roughness={0.6} metalness={0.4} color={"#b3b3b3"} side={THREE.DoubleSide}/>
      </mesh>
       
  
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.middle.geometry}
        material={nodes.middle.material}
        >
        <meshStandardMaterial color={"#808080"} side={THREE.DoubleSide}/>
       </mesh>
    
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.levels.geometry}
        material={nodes.levels.material}
      >
       <meshStandardMaterial roughness={1} color={"#bfbfbf"} side={THREE.DoubleSide}/>
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.windows.geometry}
        material={nodes.windows.material}
      >
       <meshStandardMaterial roughness={0.1} metalness={0.9} color={"#e6e6e6"} side={THREE.DoubleSide}/>
      </mesh>
  
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.roof.geometry}
        material={nodes.roof.material}
      >
       <meshStandardMaterial color={"#867979"} side={THREE.DoubleSide}/>
      </mesh>
     
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.window_rim.geometry}
        material={nodes.window_rim.material}
      >
       <meshStandardMaterial color={"#f3f1f1"} side={THREE.DoubleSide}/>
      </mesh>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground.geometry}
        material={nodes.Ground.material}
      >
       <meshStandardMaterial color={"#666666"} side={THREE.DoubleSide}/>
      </mesh>
 
    </group>
  );
}

useGLTF.preload("/Building 1.glb");
