import * as THREE from "three";
import  { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Beta_Joints: THREE.SkinnedMesh;
    Beta_Surface: THREE.SkinnedMesh;
    mixamorigHips: THREE.Bone;
  };
  materials: {
    Beta_Joints_MAT1: THREE.MeshPhysicalMaterial;
    Beta_HighLimbsGeoSG3: THREE.MeshPhysicalMaterial;
  };
  animations: GLTFAction[];
};

type ActionName = "waiting";
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;}
    

export function AiModel(props: JSX.IntrinsicElements["group"]) {
    const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF("/Ai.glb") as GLTFResult;
  const { actions } = useAnimations(animations, group);
  actions?.waiting?.play();
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="Beta_Joints"
            geometry={nodes.Beta_Joints.geometry}
            material={materials.Beta_Joints_MAT1}
            skeleton={nodes.Beta_Joints.skeleton}
          />
          <skinnedMesh
            name="Beta_Surface"
            geometry={nodes.Beta_Surface.geometry}
            material={materials.Beta_HighLimbsGeoSG3}
            skeleton={nodes.Beta_Surface.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Ai.glb");
