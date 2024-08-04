import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import computerScene from '../assets/3d/old_computer.glb'
import { Suspense } from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'
import CanvasLoader from './Loader.tsx'
import * as THREE from 'three'

const Computer = ({ isMobile }: { isMobile: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= delta * 0.5
    }
  })

  const { scene } = useGLTF(computerScene)
  return (
    <mesh ref={meshRef}>
      <primitive
        object={scene}
        scale={isMobile ? 0.8 : 1}
        position={isMobile ? [0, 0, 0] : [0, -0.5, 0.5]}
        rotation={[0.1, 0, 0]}
      />
    </mesh>
  )
}

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches)

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: { matches: boolean | ((prevState: boolean) => boolean) }) => {
      setIsMobile(event.matches)
    }

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])
  return (
    <Canvas>
      <directionalLight position={[1, 1, 1]} intensity={1} />
      <hemisphereLight intensity={0.15} />
      {/* <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} /> */}
      <pointLight intensity={1} />
      <ambientLight intensity={0.05} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Computer isMobile={isMobile} />
      </Suspense>
    </Canvas>
  )
}

export default ComputerCanvas
