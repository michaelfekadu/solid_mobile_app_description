import { useLoader } from "@react-three/fiber";
import { FrontSide } from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

const showTibia = true;
const showFemur = true;
const showFemurOsteophytes = true;
const showTibiaOsteophytes = true;
const osteophytesOpacity = 1;

const boneColor = "#f4efaf";
const osteophytesColor = "#0c7bdc";

const baseMeshProps = {
  emissive: 0x000000,
  roughness: 0.5,
  metalness: 0,
  flatShading: false,
  wireframe: false,
  vertexColors: false,
  fog: false,
  depthTest: true,
  depthWrite: true,
  alphaTest: 0,
  visible: true,
  side: FrontSide,
  transparent: true,
};

function BoneModels() {
  const url = "/stlfiles/femur.stl";
  const femurGeom = useLoader(STLLoader, "/stlfiles/femur.stl");
  const tibiaGeom = useLoader(STLLoader, "/stlfiles/tibia.stl");
  const femurOsteophiteGeom = useLoader(STLLoader, "/stlfiles/femurosteo.stl");
  const tibiaOsteophiteGeom = useLoader(STLLoader, "/stlfiles/tibiaosteo.stl");

  return (
    <>
      <mesh key={tibiaGeom.uuid} rotation-x={-(Math.PI / 2)}>
        <primitive object={tibiaGeom} attach="geometry" />
        <meshStandardMaterial
          color={boneColor}
          {...baseMeshProps}
          visible={showTibia}
        />
      </mesh>

      <mesh key={femurGeom.uuid} rotation-x={-(Math.PI / 2)}>
        <primitive object={femurGeom} attach="geometry" />
        <meshStandardMaterial
          color={boneColor}
          {...baseMeshProps}
          visible={showFemur}
        />
      </mesh>

      <mesh key={femurOsteophiteGeom.uuid} rotation-x={-(Math.PI / 2)}>
        <primitive object={femurOsteophiteGeom} attach="geometry" />

        <meshStandardMaterial
          color={osteophytesColor}
          {...baseMeshProps}
          opacity={osteophytesOpacity}
          visible={showFemurOsteophytes}
        />
      </mesh>

      <mesh key={tibiaOsteophiteGeom.uuid} rotation-x={-(Math.PI / 2)}>
        <primitive object={tibiaOsteophiteGeom} attach="geometry" />

        <meshStandardMaterial
          color={osteophytesColor}
          {...baseMeshProps}
          opacity={osteophytesOpacity}
          visible={showTibiaOsteophytes}
        />
      </mesh>
    </>
  );
}

export default BoneModels;
