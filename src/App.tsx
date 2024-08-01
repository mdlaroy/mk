
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Page1 from "./Page1"
import Page2 from "./Page2"
import Page3 from "./Page3"



  function CarouselDemo() {
    const cardContent = [
      "Special thank you to Chris, Ron, & Ken for being a sounding board throughout my entire internship. For being patient, for helping me grow, and for being a constant force to support me!",
      "The entire Omni Team who were a joy to work with, learn from, and hear from everyday!",
      "My recruiter Kameelah for being an incredible resource and guide during my experience! She did an incredible job with everyone and I am grateful for her efforts!",
      "All of my intern cohort for the incredible memories and friendships I've gained over the Summer! Special thanks to my roommate Zoe too who is in this call :)",
      "Thank you MillerKnoll!"
    ]
  
    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          Special Thanks
        </h2>
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {cardContent.map((text, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-center text-xl font-semibold">{text}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    )
  }
function App() {
  return (
    <div className="App">
      <section className="min-h-screen flex items-center justify-center p-4 border border-gray-200 m-4 rounded-lg shadow-sm">
        <Page1 />
      </section>
      
      <section className="min-h-screen flex items-center justify-center p-4 border border-gray-200 m-4 rounded-lg shadow-sm">
        <Page2 />
      </section>
      
      <section className="min-h-screen flex items-center justify-center p-4 border border-gray-200 m-4 rounded-lg shadow-sm">
        <Page3 />
      </section>
      
      <section className="min-h-screen flex items-center justify-center p-4 border border-gray-200 m-4 rounded-lg shadow-sm">
        <CarouselDemo />
      </section>
    </div>
  );
}


export default App;