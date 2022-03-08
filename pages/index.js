import Container from '../components/Container'
import Header from '../components/Header'
import Image from 'next/image'
import Features from '../components/Features'
import Button from '../components/Button'
import Contents from '../components/Contents'
import Gallery from '../components/Gallery'
import Partners from '../components/Partners'
import Testimonials from '../components/Testimonials'

export default function Home() {

   return (
      <>
         <Header />
         <Features />
         <Contents />
         <Gallery />
         <Partners />
         <Testimonials />
         <Container className="w-full px-40 pt-28 pb-20">
            <div className="w-full p-12 overflow-hidden relative bg-gray-700 rounded">
               <h1 className="w-6/12 leading-tight text-5xl font-normal capitalize mb-10">OpenType features and Variable fonts</h1>
               <Button variant="fill">Try For Free</Button>
               <div className="absolute top-8 right-0 bottom-0">
                  <Image src="/opentype.png" alt="opentype" width={500} height={320} />
               </div>
            </div>

            <div className="flex flex-row items-start justify-between mt-32 px-16" id="contact">
               <div className="w-3/12">
                  <h5 className="text-xl font-medium mb-8">Fingertipe</h5>
                  <ul>
                     <li><a href="#" className="text-base font-light my-2 inline-block hover:font-medium transition-all">Home</a></li>
                     <li><a href="#" className="text-base font-light my-2 inline-block hover:font-medium transition-all">Examples</a></li>
                     <li><a href="#" className="text-base font-light my-2 inline-block hover:font-medium transition-all">Pricing</a></li>
                     <li><a href="#" className="text-base font-light my-2 inline-block hover:font-medium transition-all">Updates</a></li>
                  </ul>
               </div>
               <div className="w-3/12">
                  <h5 className="text-xl font-medium mb-8">Resources</h5>
                  <ul>
                     <li><a href="#" className="text-base font-light my-2 inline-block hover:font-medium transition-all">Home</a></li>
                     <li><a href="#" className="text-base font-light my-2 inline-block hover:font-medium transition-all">Examples</a></li>
                     <li><a href="#" className="text-base font-light my-2 inline-block hover:font-medium transition-all">Pricing</a></li>
                     <li><a href="#" className="text-base font-light my-2 inline-block hover:font-medium transition-all">Updates</a></li>
                  </ul>
               </div>
               <div className="w-3/12">
                  <h5 className="text-xl font-medium mb-8">About</h5>
                  <ul>
                     <li><a href="#" className="text-base font-light my-2 inline-block hover:font-medium transition-all">Home</a></li>
                     <li><a href="#" className="text-base font-light my-2 inline-block hover:font-medium transition-all">Examples</a></li>
                     <li><a href="#" className="text-base font-light my-2 inline-block hover:font-medium transition-all">Pricing</a></li>
                     <li><a href="#" className="text-base font-light my-2 inline-block hover:font-medium transition-all">Updates</a></li>
                  </ul>
               </div>
               <div className="w-3/12">
                  <div className="flex flex-row items-center">
                     <Image src="/icon-footer1.svg" alt="footer" width={40} height={40} />
                     <p className="text-base font-medium ml-3">7480 Mockingbird Hill undefined</p>
                  </div>
                  <div className="flex flex-row items-center my-11">
                     <Image src="/icon-footer2.svg" alt="footer" width={40} height={40} />
                     <p className="text-base font-medium ml-3">(239) 555-0108</p>
                  </div>
                  <div className="flex flex-row">
                     <div className="cursor-pointer hover:scale-125 transition-transform">
                        <Image src="/twitter.svg" alt="footer" width={32} height={32} />
                     </div>
                     <div className="cursor-pointer hover:scale-125 transition-transform mx-10">
                        <Image src="/facebook.svg" alt="footer" width={32} height={32} />
                     </div>
                     <div className="cursor-pointer hover:scale-125 transition-transform">
                        <Image src="/linkedin.svg" alt="footer" width={32} height={32} />
                     </div>
                  </div>
               </div>
            </div>
         </Container>

      </>
   )
}
