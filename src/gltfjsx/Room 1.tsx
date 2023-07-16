import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    wall: THREE.Mesh;
    balc_1: THREE.Mesh;
    kit_2: THREE.Mesh;
    kit_1: THREE.Mesh;
    floor_1: THREE.Mesh;
    floor_2: THREE.Mesh;
    bed: THREE.Mesh;
    mattress: THREE.Mesh;
    pillow: THREE.Mesh;
    table: THREE.Mesh;
    chair: THREE.Mesh;
    couch: THREE.Mesh;
    tv_table: THREE.Mesh;
    tv: THREE.Mesh;
    glass: THREE.Mesh;
    side_door_window: THREE.Mesh;
    sinkbox: THREE.Mesh;
    sink: THREE.Mesh;
    toilet: THREE.Mesh;
    bathtub: THREE.Mesh;
    balc_glass: THREE.Mesh;
    photocover: THREE.Mesh;
    mirvac_pic: THREE.Mesh;
    doorhandles: THREE.Mesh;
    doors: THREE.Mesh;
    roof: THREE.Mesh;
  };
  materials: {};
};

export function Room(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("/room 1.glb") as GLTFResult;
  const texture1 = new THREE.TextureLoader().load('/mirvac_logo.jpg');
  const materialWithTexture = new THREE.MeshStandardMaterial({map: texture1, side: THREE.DoubleSide});
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall.geometry}
        material={nodes.wall.material}
      >
       <meshStandardMaterial color={"#ffe6e6"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.balc_1.geometry}
        material={nodes.balc_1.material}
      >
       <meshStandardMaterial color={"#000000"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kit_2.geometry}
        material={nodes.kit_2.material}
      >
       <meshStandardMaterial color={"#ffd9b3"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kit_1.geometry}
        material={nodes.kit_1.material}
      >
       <meshStandardMaterial color={"#cccccc"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_1.geometry}
        material={nodes.floor_1.material}
      >
       <meshStandardMaterial color={"#dfbf9f"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor_2.geometry}
        material={nodes.floor_2.material}
      >
       <meshStandardMaterial roughness={0.5} metalness={1} color={"#d9d9d9"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bed.geometry}
        material={nodes.bed.material}
      >
       <meshStandardMaterial color={"#000000"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mattress.geometry}
        material={nodes.mattress.material}
      >
       <meshStandardMaterial color={"#ffffff"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pillow.geometry}
        material={nodes.pillow.material}
      >
       <meshStandardMaterial color={"#ffffff"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table.geometry}
        material={nodes.table.material}
      >
       <meshStandardMaterial color={"#86592d"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chair.geometry}
        material={nodes.chair.material}
      >
       <meshStandardMaterial color={"#d9b38c"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.couch.geometry}
        material={nodes.couch.material}
      >
       <meshStandardMaterial color={"#666666"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tv_table.geometry}
        material={nodes.tv_table.material}
      >
       <meshStandardMaterial color={"#86592d"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tv.geometry}
        material={nodes.tv.material}
      >
       <meshStandardMaterial roughness={0} color={"#000000"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glass.geometry}
        material={nodes.glass.material}
      >
         <meshStandardMaterial  transparent opacity={0.5} roughness={0} color={"#000000"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.side_door_window.geometry}
        material={nodes.side_door_window.material}
      >
       <meshStandardMaterial color={"#bfbfbf"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sinkbox.geometry}
        material={nodes.sinkbox.material}
      >
       <meshStandardMaterial color={"#666666"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sink.geometry}
        material={nodes.sink.material}
      >
       <meshStandardMaterial metalness={1} roughness={0.4} color={"#b3b3b3"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.toilet.geometry}
        material={nodes.toilet.material}
      >
       <meshStandardMaterial roughness={0.6} metalness={0.9} color={"#ffffff"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bathtub.geometry}
        material={nodes.bathtub.material}
      >
       <meshStandardMaterial metalness={1} roughness={0.4} color={"#ffffff"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.balc_glass.geometry}
        material={nodes.balc_glass.material}
      >
       <meshStandardMaterial  roughness={0.5} color={"#000000"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.photocover.geometry}
        material={nodes.photocover.material}
      >
       <meshStandardMaterial roughness={1} color={"#663300"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mirvac_pic.geometry}
        material={materialWithTexture}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.doorhandles.geometry}
        material={nodes.doorhandles.material}
      >
       <meshStandardMaterial metalness={1} roughness={0.4} color={"#666666"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.doors.geometry}
        material={nodes.doors.material}
      >
       <meshStandardMaterial color={"#ffffff"} side={THREE.DoubleSide}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.roof.geometry}
        material={nodes.roof.material}
      >
       <meshStandardMaterial color={"#ffffff"} side={THREE.DoubleSide}/>
      </mesh>
    </group>
  );
}

useGLTF.preload("/room 1.glb");