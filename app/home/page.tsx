import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
 

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Example dashboard app built using the components.",
}

export default function Page() {
    return (
      <>
      <div className="flex flex-col relative">
         <Image
            src="/front.jpg"
            width={1500}
            height={300}
            alt="Picture of the author"
          />
          
      </div>
      <div className="bg-slate-300">
          <Carousel className="ml-20 mr-20">
            <CarouselContent className="w-full">
               <CarouselItem className="basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                           
                           1
                        </span>
                      </CardContent>
                    </Card>
                  </div>
               </CarouselItem>
                <CarouselItem className="basis-1/3">
                   <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">2</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                   <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">3</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                   <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">4</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/3">
                   <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">5</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
      </div>
      <div className="flex flex-col bg-slate-300">
         <p className="font-bold mt-6 text-xl ml-6">Who We Are</p>
         <p className="font-medium mt-6 mb-6 ml-6">
           Founded on the principles of trust, integrity, and a commitment to excellence, A&H WealthAdvisor is a leading wealth advisory firm specializing in comprehensive financial planning and investment management. With 5 years of experience serving clients nationwide, we have built a reputation for delivering strategic financial guidance that evolves with your life stages and changing market conditions.
          </p>
      </div>
      <div className="flex flex-col bg-slate-300">
         <p className="font-bold mt-6 text-xl ml-6">Our Approach</p>
         <p className="font-medium mt-6 mb-6 ml-6">
At the heart of our approach is a deep-seated belief in the power of personalized service. We take the time to get to know you—your values, your ambitions, and your concerns—so that we can craft a customized financial strategy designed to maximize your wealth and safeguard your future. Whether you're planning for retirement, saving for your children's education, or navigating complex financial decisions, we are here to provide clarity and confidence every step of the way.

          </p>
      </div>
      <div className="flex flex-col bg-slate-300">
         <p className="font-bold mt-6 text-xl ml-6">Why Choose Us?</p>
         <p className="font-medium mt-1 mb-1 ml-6">
            Choosing a wealth advisor is one of the most important financial decisions you will make. At A&H WealthAdvisor, we differentiate ourselves through:
         </p>
         <p className="font-medium mt-1 mb-1 ml-6">
          Expertise: Our team of seasoned professionals brings a wealth of knowledge and expertise to every client relationship.
         </p>
         <p className="font-medium mt-1 mb-1 ml-6">
          Client-Centric Approach: Your goals are our top priority. We are committed to delivering solutions that are tailored to your unique needs and objectives.
         </p>
         <p className="font-medium mt-1 mb-1 ml-6">
          Integrity and Transparency: We believe in building long-term relationships based on trust, transparency, and open communication.
         </p>
         <p className="font-medium mt-1 mb-1 ml-6">
          Comprehensive Services: From investment management to retirement planning, estate planning, and beyond, we offer a full spectrum of services designed to address all aspects of your financial life.
         </p>
      </div>
       
      </>
    );
}