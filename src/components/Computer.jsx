import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import computerScene from '../assets/3d/old_computer.glb'
import { Suspense } from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'
import CanvasLoader from './Loader'

const Computer = ({ isMobile }) => {
  const meshRef = useRef()

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= delta * 0.5
    }
  })

  const { scene } = useGLTF(computerScene)
  return (
    <mesh ref={meshRef}>
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 1}
        position={isMobile ? [0, -3, -2.2] : [0, -1, 0.5]}
        rotation={[0.1, -0.4, 0]}
      />
    </mesh>
  )
}

const ComputerCanvas = () => {
  return (
    <Canvas>
      <directionalLight position={[1, 1, 1]} intensity={1} />
      <hemisphereLight intensity={0.15} />
      {/* <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} /> */}
      <pointLight intensity={1} />
      <ambientLight intensity={0.05} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Computer isMobile={false} />
      </Suspense>
    </Canvas>
  )
}

export default ComputerCanvas
