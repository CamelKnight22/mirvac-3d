import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { Suspense } from "react"
import BackhomeNavbar from "../../../Components/Navbar/Backhome-Navbar"
import LivBuildingNavbar from "../../../Components/Navbar/Liv-Building-Navbar"
import { Building1 } from "../../../gltfjsx/Building 1"


const LivIndigo = () => {
    return(
      <div className='w-screen h-screen bg-gradient-to-r from-indigo-300 to-indigo-600'>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50, position: [19, 19, 10] }}>
       <Suspense fallback={null}>
       <Environment preset="city" />
         <spotLight position={[-10, 10, -10]} angle={Math.PI / 1} intensity={2} />
   
            
             <Building1 position={[0,0,0]} rotation={[0, Math.PI/2, 0]} scale={0.14}/>
    
         </Suspense>
      <OrbitControls  autoRotate autoRotateSpeed={2} enableZoom={false}  enablePan={false} maxPolarAngle={Math.PI/2.6} />
       </Canvas>
    <LivBuildingNavbar/>
    <BackhomeNavbar/>
  </div>
    )
    }
    
export default LivIndigo