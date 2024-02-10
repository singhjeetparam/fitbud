// import Hero from "@/components/Home/index";
import {Feature, Hero, HowItWorks, Testimonials, CTA} from '../../components/Home'

export default function Home(){
    return(
        <div>
            <Hero />
            <Feature />
            <HowItWorks />
            <Testimonials />
            <CTA />
        </div>
    )
}