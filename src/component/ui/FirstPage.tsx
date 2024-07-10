import Intro from "./Intro.tsx";
import {HeroScrollDemo} from "./HeroScrollDemo.tsx";
import {InfiniteMovingCardsDemo} from "./InfiniteMovingCardsDemo.tsx";
import SimulationCapteurInfrarouge from "./SimulationCapteurInfrarouge.tsx";
import Simulation3Dmaison from "./Simulation3Dmaison.tsx";
import CapteurPir from "./CapteurPir.tsx";
import Prison from "./Prison.tsx";
import ESP32 from "./ESP32.tsx";



export default function FirstPage() {


        return (
            <div id={`first`} className={`bg-black flex flex-col w-screen`}>

                <Intro />
                <HeroScrollDemo/>
                <InfiniteMovingCardsDemo/>
                <SimulationCapteurInfrarouge/>
                <CapteurPir/><ESP32/>
                <Simulation3Dmaison />
                    <Prison/>

            </div>

        )
}
