import Image from "next/image";

export default function HomeScreen() {
  return (
    <div className=" flex flex-row mx-auto">
      <div className="w-2/5 mx-auto flex flex-col justify-center ">
        <div className="text-3xl mb-5 ">Home Screen</div>
        <div>
          The home screen of the app provides an overview of all the available
          patient data. The user can:
        </div>
        <br />
        <div className="pl-10 ">
          <ol style={{ listStyleType: "disc" }}>
            <li>Scroll through the list of patient names </li>
            <br />

            <li>
              Check the status of the insights generation process (whether the
              3D bone models have been successfully generated, are being
              processed, have encountered an error, or have not yet started){" "}
            </li>
            <br />

            <li>Search for a specific name </li>
            <br />

            <li>Refresh the screen for updated information</li>
            <br />

            <li>Sign out of the app</li>
          </ol>
        </div>
      </div>
      <div className="mx-auto w-2/5 flex rounded-3xl ">
        <Image
          className="mx-auto"
          priority
          src="/images/homescreen.png"
          height={400}
          width={400}
          alt=""
        />
      </div>
    </div>
  );
}
