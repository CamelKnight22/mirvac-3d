import { Canvas } from "@react-three/fiber"
import {OrbitControls, Environment } from "@react-three/drei"
import { Suspense } from "react"
import AssetNavbar from "../../Components/Navbar/Asset-Navbar"
import BackhomeNavbar from "../../Components/Navbar/Backhome-Navbar"
import { Building1 } from "../../gltfjsx/Building 1"
import { Building2 } from "../../gltfjsx/Building 2"
import { Building3 } from "../../gltfjsx/Building 3"
const Assets = () => {
    return(
   <div className='w-screen h-screen bg-gradient-to-r from-emerald-200 to-emerald-600'>
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50, position: [-20, 12, 25] }}>
    <Suspense fallback={null}>
    <Environment preset="city" />
      <spotLight position={[-10, 10, -10]} angle={Math.PI / 1} intensity={2} />

         
          <Building1 position={[11,0.32,11]} rotation={[0, -Math.PI/3, 0]} scale={0.14}/>

          <Building2 position={[-10,0.4, -10]} rotation={[0, -Math.PI/3, 0]} scale={3.9}/>

          <Building3 position={[2,0.35,0]} rotation={[0, -Math.PI/3, 0]} scale={2.5}/>

      </Suspense>
   <OrbitControls  autoRotate autoRotateSpeed={2} enableZoom={false} enablePan={false}  maxPolarAngle={Math.PI/2.6} />
    </Canvas>
    <AssetNavbar/>
    <BackhomeNavbar/>
  </div>
    )
    }
    
export default Assets