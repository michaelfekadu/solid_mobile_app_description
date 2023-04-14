import Image from "next/image";

export default function DataScreen() {
  return (
    <div className=" flex flex-row pt-48 mx-auto">
      <div className="w-2/5 mx-auto flex flex-col justify-center ">
        <div className="text-3xl mb-5 ">Data Screen</div>
        <div>
          By selecting a patient&apos;s name, the user is taken to the patient
          data screen. On this screen, they can view comprehensive information
          about the patient, including information about their surgical
          procedure and current status.
        </div>
        <br />
        <div>
          If insights are available for the patient, the user can access the
          insights screen by clicking on a designated button.
        </div>
      </div>
      <div className="mx-auto w-2/5 flex rounded-3xl ">
        <Image
          className="mx-auto"
          priority
          src="/images/datascreen.png"
          height={400}
          width={400}
          alt=""
        />
      </div>
    </div>
  );
}
