// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

// type Props = {
//   model: string;
// };

// function CarModel({ model }: Props) {
//   const { scene } = useGLTF(model);

//   return (
//    <primitive
//   object={scene}
//   scale={2}
//   position={[0, 0, 0]}
//   rotation={[0, Math.PI, 0]}
// />
//   );
// }

// export default function CarViewer({ model }: Props) {
//   return (
//    <div style={{ width: "100%", height: "100%" }}>
//       <Canvas camera={{ position: [4, 2, 6], fov: 45 }}>
//         <ambientLight intensity={2} />

//         <directionalLight
//           position={[5, 5, 5]}
//           intensity={3}
//         />

//         <Environment preset="city" />

//         <CarModel model={model} />

//         <OrbitControls
//           enablePan={false}
//           minDistance={3}
//           maxDistance={8}
//         />
//       </Canvas>
//     </div>
//   );
// }
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls, Environment, ContactShadows, Stage, useGLTF,
} from "@react-three/drei";

type Props = {
  model: string;
};

function CarModel({ model }: Props) {
  const { scene } = useGLTF(model);

  return (
    <primitive
      object={scene}
      scale={1}
      position={[0, 0.5, 0]}
      rotation={[0, Math.PI, 0]}
    />
  );
}

export default function CarViewer({ model }: Props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >

      <Canvas camera={{ position: [0, 2, 7], fov: 40 }}>
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[5, 8, 5]}
          intensity={3}
        />

        <Environment preset="city" />

        <Stage
          environment={null}
          intensity={1}
          shadows
          adjustCamera={false}
        >
          <CarModel model={model} />
        </Stage>

        <ContactShadows
          opacity={0.5}
          scale={10}
          blur={2}
          far={5}
        />

        <OrbitControls
          autoRotate
          autoRotateSpeed={1}
          enablePan={false}
          minDistance={3}
          maxDistance={6}
        />
      </Canvas>
    </div>
  );
}