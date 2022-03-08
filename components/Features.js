import Container from "./Container";
import Image from 'next/image';

export default function Features() {
    return (
        <>
            <Container className="w-full">
                <div className="text-center px-40 pt-28 pb-20" id="about">
                    <h1 className="text-5xl">FEATURES</h1>
                    <p className="w-8/12 mt-7 text-lg mx-auto">Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
                </div>

                <div className="w-full flex flex-row justify-between items-center">
                    <div className="w-7/12">
                        <Image src="/features.png" alt="features" width={600} height={500} />
                    </div>
                    <div className="w-5/12 px-10">
                        <div className="my-10">
                            <div className="flex flex-row items-center">
                                <Image src="/icon1.svg" alt="icon1" width={40} height={35} />
                                <h5 className="text-xl font-medium ml-4">A single source of truth</h5>
                            </div>
                            <p className="text-base font-light mt-6">When you add work to your Slate calendar we automatically calculate useful insights</p>
                        </div>

                        <div className="my-10">
                            <div className="flex flex-row items-center">
                                <Image src="/icon2.svg" alt="icon1" width={40} height={35} />
                                <h5 className="text-xl font-medium ml-4">A single source of truth</h5>
                            </div>
                            <p className="text-base font-light mt-6">When you add work to your Slate calendar we automatically calculate useful insights</p>
                        </div>

                        <div className="my-10">
                            <div className="flex flex-row items-center">
                                <Image src="/icon3.svg" alt="icon1" width={40} height={35} />
                                <h5 className="text-xl font-medium ml-4">Intuitive interface</h5>
                            </div>
                            <p className="text-base font-light mt-6">When you add work to your Slate calendar we automatically calculate useful insights</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}