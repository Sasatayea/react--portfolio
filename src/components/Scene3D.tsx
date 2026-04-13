import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const ParticleField = () => {
  const count = 300;
  const mesh = useRef<THREE.Points>(null!);

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      sz[i] = Math.random() * 0.5 + 0.1;
    }
    return [pos, sz];
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#4f8ff7"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

const FloatingSphere = ({ position, color, speed, distort }: {
  position: [number, number, number];
  color: string;
  speed: number;
  distort: number;
}) => (
  <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.2}>
    <mesh position={position}>
      <icosahedronGeometry args={[1, 4]} />
      <MeshDistortMaterial
        color={color}
        transparent
        opacity={0.15}
        distort={distort}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  </Float>
);

const FloatingRing = () => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.3;
      ref.current.rotation.z = state.clock.elapsedTime * 0.15;
    }
  });
  return (
    <mesh ref={ref} position={[3, -1, -2]}>
      <torusGeometry args={[0.8, 0.02, 16, 100]} />
      <meshBasicMaterial color="#8b5cf6" transparent opacity={0.3} />
    </mesh>
  );
};

const Scene3D = () => (
  <div className="fixed inset-0 z-0">
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} />
      <pointLight position={[-5, -5, 5]} intensity={0.2} color="#4f8ff7" />
      <pointLight position={[5, 3, -3]} intensity={0.15} color="#8b5cf6" />
      
      <ParticleField />
      <FloatingSphere position={[-3, 2, -3]} color="#4f8ff7" speed={1.5} distort={0.3} />
      <FloatingSphere position={[4, -2, -4]} color="#8b5cf6" speed={1} distort={0.4} />
      <FloatingSphere position={[-1, -3, -2]} color="#2dd4bf" speed={2} distort={0.2} />
      <FloatingRing />
    </Canvas>
  </div>
);

export default Scene3D;
