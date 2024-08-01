
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

function Page2() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto p-4">
      <div className="bg-background rounded-lg overflow-hidden shadow-lg col-span-1 sm:col-span-1 lg:col-span-1">
        <div className="flex items-center gap-4 p-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/mk/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <h3 className="text-lg font-semibold">Chris Clum</h3>
            <p className="text-sm text-muted-foreground">IT Developer Architect</p>
          </div>
        </div>
        <p className="p-4 text-sm text-muted-foreground">
          My mentor for the Summer and the architect for the Omni Team. Chris worked with me closely to help develop the PE site and build out my tasks; lending his technical experience and veteran insight!
        </p>
      </div>
      <div className="bg-background rounded-lg overflow-hidden shadow-lg col-span-1 sm:col-span-2 lg:col-span-1">
        <div className="flex items-center gap-4 p-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/mk/placeholder-user.jpg" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <h3 className="text-lg font-semibold">Ron King</h3>
            <p className="text-sm text-muted-foreground">IT Manager</p>
          </div>
        </div>
        <p className="p-4 text-sm text-muted-foreground">
          My manager and a consistent point of contact for advice, discernment, and comprehension. Ron was able to give me a breadth of vision into the interworkings of MK and the many teams under him!
        </p>
      </div>
      <div className="bg-background rounded-lg overflow-hidden shadow-lg col-span-1 sm:col-span-1 lg:col-span-2">
        <div className="flex items-center gap-4 p-4">
          <div className="grid gap-1">
            <h3 className="text-lg font-semibold">Performance Engineering Site</h3>
            <p className="text-sm text-muted-foreground">My Intern Project</p>
          </div>
        </div>
        <p className="p-4 text-sm text-muted-foreground">
          This Summer I had the opportunity to work with the Omni Team
        </p>
      </div>
      <div className="bg-background rounded-lg overflow-hidden shadow-lg col-span-1 sm:col-span-1 lg:col-span-1">
        <div className="flex items-center gap-4 p-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/mk/placeholder-user.jpg" />
            <AvatarFallback>ED</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <h3 className="text-lg font-semibold">Bronwyn & Colton</h3>
            <p className="text-sm text-muted-foreground">Performance Engineering Manager/Performance Engineer</p>
          </div>
        </div>
        <p className="p-4 text-sm text-muted-foreground">
          Bronwyn serves as the product owner for the PE site that I contributed to! Colton is an engineer within the Performance Engineering team with Bronwyn. Both served as guiding forces regarding the project!
        </p>
      </div>
      <div className="bg-background rounded-lg overflow-hidden shadow-lg col-span-1 sm:col-span-2 lg:col-span-1">
        <div className="flex items-center gap-4 p-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/mk/placeholder-user.jpg" />
            <AvatarFallback>DL</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <h3 className="text-lg font-semibold">Who I Worked With!</h3>
            <p className="text-sm text-muted-foreground">The Omni Team and Beyond!</p>
          </div>
        </div>
        <p className="p-4 text-sm text-muted-foreground">
          ff.
        </p>
      </div>
    </div>
  )
}

export default Page2;