import BoneModelCanvas from "./BoneModelCanvas";

export default function TryModel() {
  return (
    <div className="text-center px-5 sm:px-0">
      <div className="sm:text-5xl text-4xl sm:pt-48 pt-28 mx-auto">
        Try it yourself!
      </div>
      <br />
      <div className="sm:text-2xl text-lg ">
        To change the view of the 3D model, you can rotate it or zoom in or out.
      </div>
      <div className="sm:text-2xl text-lg ">
        To reset the model to its original position, simply double-click on it.
      </div>
      <div className="sm:pt-20 pt-10">
        <BoneModelCanvas />
      </div>
    </div>
  );
}
