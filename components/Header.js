import Container from "./Container";
import HeadPages from "./HeadPages";
import Button from "./Button";
import Navbar from "./Navbar";

export default function Header() {

    return (
        <>
            <Container className="w-full min-h-screen pt-5">
                <HeadPages>Home</HeadPages>
                <Navbar />
                <header className="mt-16 w-full text-center mx-auto">
                    <div className="w-7/12 mx-auto">
                        <h1 className="text-7xl text-center font-medium">Work at the speed of thought</h1>
                        <p className="w-9/12 mx-auto my-8 text-lg text-center font-light">Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
                    </div>

                    <div className="mt-16">
                        <Button variant="fill" className="mr-8">Try For Free</Button>
                        <Button variant="stroke">Learn More</Button>
                    </div>
                </header>
            </Container>

            <div className="w-full h-[785px] overflow-hidden mx-auto -mt-16 text-center bg-gray-900 relative left-0 top-0 bottom-0 z-0">
                <div className="w-full h-full scale-125 -ml-40 mt-24 inline-block bg-[url('/hero.png')] z-10 absolute left-0 top-0 bottom-0"></div>
            </div>
        </>
    );
}
