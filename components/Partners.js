import Container from './Container';
import Image from 'next/image';
import Button from '../components/Button';

export default function Partners() {
    return (
        <>
            <Container className="w-full text-center">
                <div className="text-center px-40 pt-28 pb-20">
                    <h1 className="text-5xl uppercase">Partners</h1>
                    <p className="w-8/12 mt-7 text-lg mx-auto">We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.</p>
                </div>

                <div className="flex flex-row items-center justify-between gap-8 mb-12">
                    <Image src="/partners1.png" alt="partners" width={65} height={60} />
                    <Image src="/partners2.png" alt="partners" width={65} height={60} />
                    <Image src="/partners3.png" alt="partners" width={65} height={60} />
                    <Image src="/partners4.png" alt="partners" width={65} height={60} />
                    <Image src="/partners5.png" alt="partners" width={65} height={60} />
                    <Image src="/partners6.png" alt="partners" width={65} height={60} />
                </div>

                <Button variant="stroke">All Partners</Button>
            </Container>
        </>
    );
}