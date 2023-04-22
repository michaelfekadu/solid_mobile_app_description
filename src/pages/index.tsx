import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Challenge from "@/components/Challenge";
import Authentication from "@/components/Authentication";
import HomeScreen from "@/components/HomeScreen";
import DataScreen from "@/components/DataScreen";
import InsightsScreen from "@/components/InsightsScreen";
import TryModel from "@/components/TryModel";
import ProjectRecap from "@/components/ProjectRecap";

export default function index() {
  return (
    <div>
      <Header />
      <div className="font-serif sm:text-xl">
        <div>
          <Introduction />
          <div className="bg-gray-200 sm:h-40 h-20" />
          <div className="flex flex-col mx-auto">
            <Challenge />
            <div className="bg-gray-50 ">
              <div className="sm:pt-36 pt-20 sm:text-5xl text-3xl text-gray-300 mx-auto flex justify-center">
                The Functionalities
              </div>
              <Authentication />
              <HomeScreen />
              <DataScreen />
              <InsightsScreen />
            </div>
            <TryModel />
            <ProjectRecap />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
