import Container from "./Container";
import Button from "./Button";
import Image from 'next/image';

export default function Contents() {
    return (
        <>
            <Container className="w-full">
                <div className="text-center px-40 pt-28 pb-20">
                    <h1 className="text-5xl uppercase">Contents</h1>
                    <p className="w-8/12 mt-7 text-lg mx-auto">We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.</p>
                </div>
                <div className="flex flex-row items-center gap-10">
                    <div className="w-6/12 text-center">
                        <div className="bg-gray-200 rounded px-16 py-10">
                            <h5 className="text-gray-900 text-xl font-medium">Work</h5>
                            <p className="text-gray-800 text-base font-light px-10 mt-5">Ever wondered if you&apos;re too reliant on a client for work? Slate helps you identify.</p>
                            <Button variant="fill" className="my-14">Sign Up</Button>
                            <Image src="/Macbook Pro.png" alt="macbook" width={500} height={300} />
                        </div>
                    </div>
                    <div className="w-6/12 text-center">
                        <div className="bg-gray-200 rounded px-16 py-10">
                            <h5 className="text-gray-900 text-xl font-medium">Design with real data</h5>
                            <p className="text-gray-800 text-base font-light px-10 mt-5">Ever wondered if you&apos;re too reliant on a client for work? Slate helps you identify.</p>
                            <Button variant="fill" className="my-14">Try For Free</Button>
                            <Image src="/Boards Notifications.png" alt="macbook" width={500} height={300} />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}