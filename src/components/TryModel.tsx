import BoneModelCanvas from "./BoneModelCanvas";

export default function TryModel() {
  return (
    <div className="text-center">
      <div className="text-5xl pt-48 mx-auto">Try it yourself!</div>
      <br />
      <div className="text-2xl  mx-auto">
        To change the view of the 3D model, you can rotate it or zoom in or out.
      </div>
      <div className="text-2xl  mx-auto">
        To reset the model to its original position, simply double-click on it.
      </div>
      <div className="pt-20 ">
        <BoneModelCanvas />
      </div>
    </div>
  );
}
