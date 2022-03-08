import Container from "./Container";
import Image from 'next/image';
import Button from "./Button";

export default function Gallery() {

    return (
        <>
            <Container className="w-full text-center">
                <div className="text-center px-40 pt-28 pb-20">
                    <h1 className="text-5xl uppercase">Gallery</h1>
                    <p className="w-8/12 mt-7 text-lg mx-auto">We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.</p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-8 mb-12">
                    <Image src="/gallery1.png" alt="gallery" width={250} height={270} />
                    <Image src="/gallery2.png" alt="gallery" width={250} height={270} />
                    <Image src="/gallery3.png" alt="gallery" width={250} height={270} />
                    <Image src="/gallery4.png" alt="gallery" width={250} height={270} />
                    <Image src="/gallery5.png" alt="gallery" width={350} height={270} />
                    <Image src="/gallery6.png" alt="gallery" width={250} height={270} />
                    <Image src="/gallery7.png" alt="gallery" width={370} height={270} />
                </div>

                <Button variant="stroke">See more</Button>
            </Container>
        </>
    );
}