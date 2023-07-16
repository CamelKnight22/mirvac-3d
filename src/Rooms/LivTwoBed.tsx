import { Canvas } from "@react-three/fiber"
import { Environment, FirstPersonControls } from "@react-three/drei"
import { Suspense } from "react"
import { Room } from "../gltfjsx/Room 1"
import RoomNavbar from "../Components/Navbar/Room-top-Navbar"

const LivTwoBed = () => {
  return (
    <div className='w-screen h-screen bg-gradient-to-r from-sky-300 to-blue-400'>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50, position: [0, 0, 0] }}>
        <Environment preset="city" />
        <spotLight position={[-1,0,0]} angle={Math.PI / 1} intensity={0.1} />
        <Suspense fallback={null}>
          <Room position={[-2.7,-1,0]} rotation={[0,Math.PI/2,0]} />
        </Suspense>
        <FirstPersonControls 
          lookSpeed={0.07}
          lookVertical={false}
          movementSpeed={2.5}
        />
      </Canvas>
      <RoomNavbar/>
    </div>
  );
}
  
export default LivTwoBed