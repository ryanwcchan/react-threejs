import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import HackerRoom from "../components/HackerRoom"
import CanvasLoader from "../components/CanvasLoader"
import { PerspectiveCamera } from '@react-three/drei';

export default function Hero() {
  return (
    <section className='min-h-screen w-full flex flex-col relative border-2 border-blue-500'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm:text-3xl text-xl font-medium 
            text-center font-generalsans text-white'>Hi, I am Ryan <span className='waving-hand'>👋</span></p>
            <p className='hero_tag text-gray_gradient'>A Junior Web Developer</p>
        </div>

        <div className="w-full h-full absolute inset-0">
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
                    <HackerRoom scale={0.07} position={[0, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </HackerRoom>
                </Suspense>
            </Canvas>
        </div>
    </section>
  )
}
