
function Page3() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <h2 className="text-3xl font-bold text-center mb-8">Some of What I Did!</h2>
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-full flex-col justify-between p-6">
              <div>
                <h3 className="text-xl font-semibold">AWS</h3>
                <p className="mt-2 text-muted-foreground">
                  I had the opportunity to learn more about what services we use from Amazon as well as how they function together. I worked on AWS lambda functions to authenticate between a Microsoft Entra app and make API calls to pull from our SharePoint files!
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-full flex-col justify-between p-6">
              <div>
                <h3 className="text-xl font-semibold">Authentication</h3>
                <p className="mt-2 text-muted-foreground">
                  I worked with the OAuth 2.0 authentication flow to implement delegated authority between registered app and Microsoft 365 based resources!
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-full flex-col justify-between p-6">
              <div>
                <h3 className="text-xl font-semibold">Agile</h3>
                <p className="mt-2 text-muted-foreground">
                I engaged in all agile ceremonies including daily scrum meetings, backlog refinement, and sprint planning within the
                Atlassian suite.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-center my-12">Some Favorite Moments!</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-full flex-col justify-between p-6">
              <div>
                <h3 className="text-xl font-semibold">Testing the new gaming chair for the Carbon Team</h3>
                <p className="mt-2 text-muted-foreground">
                  I had the opportunity to test out the carbon chair, a new gaming chair in development. It was so fun to test out the different features and provide my insights!
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-full flex-col justify-between p-6">
              <div>
                <h3 className="text-xl font-semibold">Buying my first Herman Miller piece</h3>
                <p className="mt-2 text-muted-foreground">
                  I was able to take a visit to the office outlet and take home my very own embody chair! Super excited to have it throughout my school year and career :D
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-full flex-col justify-between p-6">
              <div>
                <h3 className="text-xl font-semibold">Participating in West Michigan Intern Connect </h3>
                <p className="mt-2 text-muted-foreground">
                  MillerKnoll interns were sent to the West Michigan Intern Connect; the largest intern convention on the West side of the state! It was a great opportunity to hear from speakers and connect with other interns across various industries!
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