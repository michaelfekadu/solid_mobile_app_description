import Image from "next/image";

export default function InsightsScreen() {
  return (
    <div className=" flex flex-col pb-80 mx-auto">
      <div className="w-2/5 mx-auto pt-80">
        <div className="text-3xl mb-5 ">Insights Screen</div>
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
      <div className="flex flex-row mx-auto space-x-16 mt-32">
        <div className="mx-auto w-2/5 flex rounded-3xl ">
          <Image
            className="mx-auto"
            priority
            src="/images/insightsscreen.png"
            height={400}
            width={400}
            alt=""
          />
        </div>
        <div className="mx-auto w-2/5 flex rounded-3xl ">
          <Image
            className="mx-auto"
            priority
            src="/images/insightsscreen2.png"
            height={400}
            width={400}
            alt=""
          />
        </div>
        <div className="mx-auto w-2/5 flex rounded-3xl ">
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
