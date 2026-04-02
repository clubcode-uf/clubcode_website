//This is the events page where we store cards of upcoming and past events.
//Will use the sanity studio to manage. ("localhost:3000/studio")
import Navbar from "../../components/Navbar";

const page = () => {
  return (
    <div>
      <Navbar/>
      <div className="min-h-screen flex justify-center items-center -mt-60">
        <div className="text-6xl">
          Upcoming Events
        </div>
      </div>
    </div>
  )
}

export default page