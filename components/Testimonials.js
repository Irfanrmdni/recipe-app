import Container from "./Container";
import Image from 'next/image';

export default function Testimonials() {
    return (
        <>
            <Container className="w-full">
                <div className="text-center px-40 pt-28 pb-20">
                    <h1 className="text-5xl uppercase">Testimonials</h1>
                </div>

                <div className="w-full flex flex-wrap justify-around items-center gap-y-6">
                    <div className="w-5/12 border border-gray-100 rounded p-8">
                        <div className="flex flex-row items-center">
                            <Image src="/avatar1.png" alt="avatar" width={60} height={60} />
                            <div className="ml-4">
                                <h5 className="text-base font-medium">Claire Bell</h5>
                                <p className="text-base font-normal">Designer</p>
                            </div>
                        </div>
                        <p className="text-base mt-7 font-light">Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.</p>
                    </div>
                    <div className="w-5/12 border border-gray-100 rounded p-8">
                        <div className="flex flex-row items-center">
                            <Image src="/avatar2.png" alt="avatar" width={60} height={60} />
                            <div className="ml-4">
                                <h5 className="text-base font-medium">Francisco Lane</h5>
                                <p className="text-base font-normal">Designer</p>
                            </div>
                        </div>
                        <p className="text-base mt-7 font-light">Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.</p>
                    </div>
                    <div className="w-5/12 border border-gray-100 rounded p-8">
                        <div className="flex flex-row items-center">
                            <Image src="/avatar3.png" alt="avatar" width={60} height={60} />
                            <div className="ml-4">
                                <h5 className="text-base font-medium">Ralph Fisher</h5>
                                <p className="text-base font-normal">Designer</p>
                            </div>
                        </div>
                        <p className="text-base mt-7 font-light">Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.</p>
                    </div>
                    <div className="w-5/12 border border-gray-100 rounded p-8">
                        <div className="flex flex-row items-center">
                            <Image src="/avatar4.png" alt="avatar" width={60} height={60} />
                            <div className="ml-4">
                                <h5 className="text-base font-medium">Jorge Murphy</h5>
                                <p className="text-base font-normal">Designer</p>
                            </div>
                        </div>
                        <p className="text-base mt-7 font-light">Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.</p>
                    </div>
                </div>
            </Container>
        </>
    );
}