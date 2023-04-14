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
      <div className="font-serif text-xl mx-auto ">
        <div>
          <Introduction />
          <div className="bg-gray-200 h-40" />
          <div className="flex flex-col mx-auto">
            <Challenge />
            <div className="bg-gray-50 ">
              <div className="pt-36 text-5xl text-gray-300 mx-auto flex justify-center">
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
