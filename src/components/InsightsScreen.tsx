import Image from "next/image";

export default function InsightsScreen() {
  return (
    <div className=" flex flex-col sm:pb-80 pb-48 mx-auto px-5 sm:px-0">
      <div className="sm:w-2/5 mx-auto sm:pt-80 pt-48">
        <div className="sm:text-3xl text-2xl mb-5 ">Insights Screen</div>
        <div>
          The insights screen presents an interactive 3D model of the
          patient&apos;s knee, allowing the user to explore the model by
          rotating or zooming in.
        </div>
        <br />
        <div>The screen also provides additional features such as:</div>
        <br />
        <div className="pl-10 ">
          <ol style={{ listStyleType: "disc" }}>
            <li>Hide the upper and/or lower knee bone (Femur, Tibia)</li>
            <br />

            <li>
              Hide the upper and/or lower osteophytes (represented as blue
              colored areas on the bones)
            </li>
            <br />

            <li>Adjust the opacity of the osteophytes </li>
            <br />

            <li>
              Access more information, including the estimated procedure time,
              b-score, and the probability of cartilage loss
            </li>
          </ol>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col mx-auto sm:space-x-16 mt-32">
        <div className="mx-auto sm:w-2/5 flex rounded-3xl ">
          <Image
            className="mx-auto"
            priority
            src="/images/insightsscreen.png"
            height={400}
            width={400}
            alt=""
          />
        </div>
        <div className="mx-auto sm:w-2/5 flex rounded-3xl ">
          <Image
            className="mx-auto"
            priority
            src="/images/insightsscreen2.png"
            height={400}
            width={400}
            alt=""
          />
        </div>
        <div className="mx-auto sm:w-2/5 flex rounded-3xl ">
          <Image
            className="mx-auto"
            priority
            src="/images/insightsscreen3.png"
            height={400}
            width={400}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
