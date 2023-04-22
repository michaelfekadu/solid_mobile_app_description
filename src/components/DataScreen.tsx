import Image from "next/image";

export default function DataScreen() {
  return (
    <div className=" flex sm:flex-row flex-col pt-48 mx-auto px-5 sm:px-0">
      <div className="sm:w-2/5 mx-auto flex flex-col justify-center mb-20 sm:mb-0">
        <div className="sm:text-3xl text-2xl mb-5 ">Data Screen</div>
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
      <div className="mx-auto sm:w-2/5 flex rounded-3xl ">
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
