import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { Suspense } from "react"
import BackhomeNavbar from "../../Components/Navbar/Backhome-Navbar"

import { SomethingOb } from "../../gltfjsx/something"
const Something = () => {
    return(
      <div className='w-screen h-screen bg-gradient-to-r from-sky-300 to-blue-400'>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50, position: [5, 7, 5] }}>
       <Suspense fallback={null}>
       <Environment preset="city" />
         <spotLight position={[-10, 10, -10]} angle={Math.PI / 1} intensity={2} />
          <SomethingOb/>

         </Suspense>
      <OrbitControls  autoRotate autoRotateSpeed={2} enableZoom={false} enablePan={false} maxPolarAngle={Math.PI/2.6} />
       </Canvas>
    <BackhomeNavbar/>
  </div>
    )
    
    }
    
export default Something