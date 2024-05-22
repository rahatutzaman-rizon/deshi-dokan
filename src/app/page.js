
import Carousel from "./Components/Carousel";
import Advertisement from "./Components/Sponser";
import Testimonials from "./Components/testimonal";

import Contact from "./contact/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   
   <Carousel></Carousel>
 <Testimonials></Testimonials>
   <Contact className="mt-12"></Contact>
   <Advertisement></Advertisement>
    </main>
  );
}
