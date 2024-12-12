



export default async function Home() {


  return (
    <main>
      <section className="h-16 splitbg"></section>
      <section >
        <div className="container mx-auto pt-20">

          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-mainaccent-700 text-slate">
            Authentication
          </h1>

            <div className="flex justify-center">
                <div className="w-1/2">
                    <div className="flex justify-center">
                    <a className="w-1/2 bg-mainaccent-700 text-white text-center py-2 rounded-lg">You are going to be redirected once the code is valid. </a>
                    </div>
                </div>
            </div>

        </div>

      </section>


    </main>
  );
}

