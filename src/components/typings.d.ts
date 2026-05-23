import * as THREE from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export type JordanGLTF = GLTF & {
  nodes: any;
  materials: any;


  materials: {
    shoe: THREE.MeshStandardMaterial;
    shoelace: THREE.MeshStandardMaterial;
  };
};