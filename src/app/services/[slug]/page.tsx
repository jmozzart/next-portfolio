import BackButton from "@/components/BackButton";

export default function ServicesSection() {


  return (
    <main>
      <section className="h-16 splitbg"></section>
      <section className="">
    <div className="container mx-auto m-10 p-4 flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl mb-4">Coming Soon</h1>
        <p className="text-xl">We are currently working on this page. Please check back later.</p>
        <div>
        <BackButton buttonText="Back" className="secondary-btn"/>
        </div>
      </div>
      
    </div>
    </section>
    </main>
  );
}