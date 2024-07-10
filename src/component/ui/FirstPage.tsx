import Intro from "./Intro.tsx";
import {HeroScrollDemo} from "./HeroScrollDemo.tsx";
import {InfiniteMovingCardsDemo} from "./InfiniteMovingCardsDemo.tsx";
import SimulationCapteurInfrarouge from "./SimulationCapteurInfrarouge.tsx";
import SecondPage from "./Secondpage.tsx";
import ThirdPage from "./Thirdpage.tsx";
import FourthPage from "./Fourthpage.tsx";



export default function FirstPage() {


        return (
            <div id={`first`} className={`bg-black flex flex-col w-screen`}>

                <Intro />
                <HeroScrollDemo/>
                <InfiniteMovingCardsDemo/>
                <SimulationCapteurInfrarouge/>
                <ThirdPage/>
                <SecondPage /><FourthPage/>

            </div>

        )
}
