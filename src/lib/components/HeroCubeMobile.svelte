<script lang="ts">
  import {
    Canvas,
    Scene,
    PerspectiveCamera,
    DirectionalLight,
    AmbientLight,
    BoxBufferGeometry,
    Mesh,
    MeshStandardMaterial,
    WebGLRenderer,
  } from "svelthree";

  let cubeGeometry = new BoxBufferGeometry(1, 1, 1);
  let cubeMaterial = new MeshStandardMaterial();

  /**
   * When animating via 'animation'-prop you have to provide a "special" function:
   * const ani = (obj):{
   *								onStart:() => void,
   *								onDestroy:() => void,
   *								onSceneDeactivated?:() => void,
   *								onSceneReactivated?:() => void
   *							}
   *							=> {
   *								...
   *								// obligatory
   *								const foo = ():void => {}
   *								const bar = ():void => {}
   *
   *								// optional
   *								const optFoo = ():void => {}
   *								const optBar = ():void => {}
   *
   *								return {
   *									onStart: foo
   *									onDestroy: bar
   *									onSceneDeactivated: optFoo
   *									onSceneReactivated: optBar
   *								}
   *							}
   */

  const rotateCube = (obj: any) => {
    let rAF = 0;
    let doRotate = false;

    function onStart() {
      startRotating();
    }

    function startRotating() {
      doRotate = true;
      rAF = requestAnimationFrame(rotate);
    }

    function rotate() {
      if (doRotate) {
        obj.rotation.x += 0.01;
        obj.rotation.y += 0.01;
        obj.rotation.z += 0.01;
        rAF = requestAnimationFrame(rotate);
      }
    }

    function onDestroy() {
      doRotate = false;
      cancelAnimationFrame(rAF);
    }

    return {
      onStart: onStart,
      onDestroy: onDestroy,
    };
  };
</script>

<Canvas let:sti w={400} h={400} class="mb-20">

  <Scene {sti} let:scene id="scene1">

    <PerspectiveCamera {scene} id="cam1" pos={[0, 0, 3]} lookAt={[0, 0, 0]} />
    <AmbientLight {scene} intensity={1.25} />
    <DirectionalLight {scene} pos={[3, 3, 3]} />

    <Mesh
      {scene}
      geometry={cubeGeometry}
      material={cubeMaterial}
      mat={{ roughness: 0.5, metalness: 0.5, color: 0x98A8F8 }}
      pos={[0, 0, 0]}
      scale={[1, 1, 1]}
      animation={rotateCube}
      aniauto />

  </Scene>

  <WebGLRenderer
    {sti}
    sceneId="scene1"
    camId="cam1"
    config={{ antialias: true, alpha: true }} />

</Canvas>