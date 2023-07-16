import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { Suspense } from "react"
import AisomethingNavbar from "../../Components/Navbar/Aisomething-Navbar";
import BackhomeNavbar from "../../Components/Navbar/Backhome-Navbar";
import { Blandscape } from "../../gltfjsx/Big-landscape";
import { Building1 } from "../../gltfjsx/Building 1";
import { Building2 } from "../../gltfjsx/Building 2";
import { Building3 } from "../../gltfjsx/Building 3";
import { Tree } from "../../gltfjsx/Tree 1";
const Aisomething = () => {
    return(
      <div className='w-screen h-screen bg-gradient-to-r from-sky-300 to-blue-400'>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50, position: [-20, 12, 25] }}>
       <Suspense fallback={null}>
       <Environment preset="city" />
         <spotLight position={[-10, 10, -10]} angle={Math.PI / 1} intensity={2} />
   
             <Blandscape position={[0,-1,0]}/>
             <Building1 position={[-16.7,0.38,-10]} rotation={[0, Math.PI/2, 0]} scale={0.14}/>
             <Building1 position={[-16,0.4,10]} rotation={[0, Math.PI/2, 0]} scale={0.11}/>
             <Building1 position={[12,0.4,0]} rotation={[0, -Math.PI/2, 0]} scale={0.115}/>
             <Building1 position={[4,0.4,15.5]} rotation={[0, 0, 0]} scale={0.11}/>
   
             <Building2 position={[-16.5,0.4, -0.1]} rotation={[0, Math.PI/2, 0]} scale={3.9}/>
             <Building2 position={[12.4,0.42,-10]} rotation={[0, -Math.PI/2, 0]} scale={3.6}/>
             <Building2 position={[12.4,0.42,10]} rotation={[0, -Math.PI/2, 0]} scale={3.5}/>
             <Building2 position={[-5.4,0.42,10]} rotation={[0, Math.PI/2, 0]} scale={3.6}/>
   
             <Building3 position={[-6,0.35,-8]} rotation={[0, Math.PI/2, 0]} scale={2.5}/>
   
             <Tree position={[17,0.49,10]} rotation={[0, -Math.PI/2, 0]} scale={0.9}/>
             <Tree position={[19,0.49,-10]} rotation={[0, -Math.PI/6, 0]} scale={0.9}/>
             <Tree position={[16,0.49,-2]} rotation={[0, -Math.PI/3, 0]} scale={0.9}/>
             <Tree position={[18,0.49,4]} rotation={[0, -Math.PI/1, 0]} scale={0.9}/>
   
             <Tree position={[1,0.49,0]} rotation={[0, -Math.PI/9, 0]} scale={0.9}/>
             <Tree position={[7,0.49,-2]} rotation={[0, -Math.PI/3, 0]} scale={0.9}/>
             <Tree position={[6,0.49,-10]} rotation={[0, -Math.PI/6, 0]} scale={0.9}/>
             <Tree position={[0,0.49,3]} rotation={[0, -Math.PI/5, 0]} scale={0.9}/>
             <Tree position={[5,0.49,7]} rotation={[0, -Math.PI/1, 0]} scale={0.9}/>
             <Tree position={[1,0.49,-11]} rotation={[0, -Math.PI/11, 0]} scale={0.9}/>
             <Tree position={[3,0.49,-7]} rotation={[0, -Math.PI/13, 0]} scale={0.9}/>
   
             <Tree position={[-22,0.49,-9]} rotation={[0, -Math.PI/3, 0]} scale={0.9}/>
             <Tree position={[-21,0.49,9]} rotation={[0, -Math.PI/6, 0]} scale={0.9}/>
             <Tree position={[-20.6,0.49,-4]} rotation={[0, -Math.PI/2, 0]} scale={0.9}/>
             <Tree position={[-21.3,0.49,3]} rotation={[0, -Math.PI/10, 0]} scale={0.9}/>
   
             <Tree position={[-5,0.49,0]} rotation={[0, -Math.PI/2, 0]} scale={0.9}/>
             <Tree position={[-9,0.49,4]} rotation={[0, -Math.PI/6, 0]} scale={0.9}/>
             <Tree position={[-9,0.49,16]} rotation={[0, -Math.PI/4, 0]} scale={0.9}/>
             <Tree position={[-11,0.49,-14]} rotation={[0, -Math.PI/4, 0]} scale={0.9}/>
   
             <Tree position={[9,0.49,20]} rotation={[0, -Math.PI/1, 0]} scale={0.9}/>
             <Tree position={[-9,0.49,22]} rotation={[0, -Math.PI/3, 0]} scale={0.9}/>
   
             <Tree position={[5,0.49,-20]} rotation={[0, -Math.PI/1, 0]} scale={0.9}/>
             <Tree position={[-9,0.49,-22]} rotation={[0, -Math.PI/3, 0]} scale={0.9}/>
         </Suspense>
      <OrbitControls  autoRotate autoRotateSpeed={1.2} enableZoom={false} enablePan={false}  maxPolarAngle={Math.PI/2.6} />
       </Canvas>
    <AisomethingNavbar/>
    <BackhomeNavbar/>
  </div>
    )
    
    }
    
export default Aisomething