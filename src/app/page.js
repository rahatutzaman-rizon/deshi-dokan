
import BasicDataTable from "./Components/BasicDataTable";
import Carousel from "./Components/Carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   <BasicDataTable></BasicDataTable>
   <Carousel></Carousel>
    </main>
  );
}
