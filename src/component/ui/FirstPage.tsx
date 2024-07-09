import Intro from "./Intro.tsx";
import {HeroScrollDemo} from "./HeroScrollDemo.tsx";
import {InfiniteMovingCardsDemo} from "./InfiniteMovingCardsDemo.tsx";
import SimulationCapteurInfrarouge from "./SimulationCapteurInfrarouge.tsx";
import SecondPage from "./Secondpage.tsx";



export default function FirstPage() {


        return (
            <div id={`first`} className={`bg-black flex flex-col w-screen`}>

                <Intro />
                <HeroScrollDemo/>
                <InfiniteMovingCardsDemo/>
                <SimulationCapteurInfrarouge/>
                    <SecondPage />
            </div>

        )
}
