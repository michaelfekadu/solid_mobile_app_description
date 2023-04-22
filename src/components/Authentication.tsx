import Image from "next/image";

export default function Authentication() {
  return (
    <div className=" flex sm:flex-row flex-col sm:py-72 py-28 mx-auto px-5 sm:px-0">
      <div className="sm:w-2/5 mx-auto  mb-20 sm:mb-0">
        <div className="sm:text-3xl text-2xl mb-5 ">Authentication</div>
        <div>
          The authentication process for the app is done through the use of the
          Expo AuthSession. This feature enables web browser-based
          authentication utilizing Azure Active Directory.
        </div>
        <br />
        <br />
        <div>
          Upon successful authentication, the app receives an access token as
          proof of authentication. If the user&apos;s account has been granted
          access to view confidential medical information, they will be
          redirected to the app&apos;s home screen. The access token is then
          utilized to securely retrieve the necessary data from the server. If
          the user&apos;s account is not authorized, they will not be able to
          leave the sign-up screen and access the data.
        </div>
      </div>
      <div className="mx-auto sm:w-2/5 flex flex-col">
        <Image
          className="mx-auto"
          priority
          src="/images/datascheme.png"
          height={700}
          width={700}
          alt=""
        />
        <div className="mx-auto mt-5 sm:text-base text-xs font-bold">
          Simplified Authentication & Data Retrieval Flow
        </div>
      </div>
    </div>
  );
}
