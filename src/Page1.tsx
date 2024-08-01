

function Page1() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4 py-12 sm:px-6 lg:px-8">
      {/* Add the image here */}
      <div className="w-full max-w-md mb-8">
      <img
  src={`${import.meta.env.BASE_URL}millerknolllogo.jpg`}
  alt="Megan LaRoy"
  className="w-full max-w-md rounded-full mx-auto"
/>
      </div>
      
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-center space-y-1">
            <h1 className="text-3xl font-bold">Megan LaRoy</h1>
            <p className="text-muted-foreground">Software Engineering Intern</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-muted/20 p-4 rounded-md">
            <h2 className="text-lg font-semibold">About</h2>
            <p className="text-muted-foreground">
              - Senior @ EMU <br></br>
              - Pursuing a BS in CS<br></br>
              - VP of WiCS<br></br>
              - Volunteer
            </p>
          </div>
          <div className="bg-muted/20 p-4 rounded-md">
            <h2 className="text-lg font-semibold">Interests</h2>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="bg-muted/20 px-3 py-1 rounded-md text-sm font-medium">Video Games</div>
              <div className="bg-muted/20 px-3 py-1 rounded-md text-sm font-medium">Music</div>
              <div className="bg-muted/20 px-3 py-1 rounded-md text-sm font-medium">Dance</div>
              <div className="bg-muted/20 px-3 py-1 rounded-md text-sm font-medium">Detroit Pistons</div>
              <div className="bg-muted/20 px-3 py-1 rounded-md text-sm font-medium">Tennis</div>
              <div className="bg-muted/20 px-3 py-1 rounded-md text-sm font-medium">Coffee + Baking</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;