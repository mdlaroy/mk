
function Page3() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <h2 className="text-3xl font-bold text-center mb-8">some of what i learned !</h2>
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-full flex-col justify-between p-6">
              <div>
                <h3 className="text-xl font-semibold">aws</h3>
                <p className="mt-2 text-muted-foreground">
                  i had the opportunity to learn more about what services we use from amazon as well as how they function together. i worked on aws lambda functions to authenticate between a microsoft entra app and make api calls to pull from our sharepoint files!
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-full flex-col justify-between p-6">
              <div>
                <h3 className="text-xl font-semibold">something</h3>
                <p className="mt-2 text-muted-foreground">
                  something.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-full flex-col justify-between p-6">
              <div>
                <h3 className="text-xl font-semibold">something</h3>
                <p className="mt-2 text-muted-foreground">
                  something.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-center my-12">some favorite moments !</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-full flex-col justify-between p-6">
              <div>
                <h3 className="text-xl font-semibold">testing the new gaming chair for the carbon team</h3>
                <p className="mt-2 text-muted-foreground">
                  i had the opportunity to test out the carbon chair, a new gaming chair in development. it was so fun to test out the different features and provide my insights!
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-full flex-col justify-between p-6">
              <div>
                <h3 className="text-xl font-semibold">buying my first herman miller piece</h3>
                <p className="mt-2 text-muted-foreground">
                  i was able to take a visit to the office outlet and take home my very own embody chair! super excited to have it throughout my school year and career :D
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-full flex-col justify-between p-6">
              <div>
                <h3 className="text-xl font-semibold">participating in west michigan intern connect </h3>
                <p className="mt-2 text-muted-foreground">
                  millerknoll interns were sent to the west michigan intern connect; the largest intern convention on the west side of the state! it was a great opportunity to hear from speakers and connect with other interns across various industries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page3;