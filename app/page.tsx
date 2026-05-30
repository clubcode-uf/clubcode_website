import Navbar from "../components/Navbar";
import DottedSurface from "../components/DottedSurface/DottedSurface";

const page = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <DottedSurface />
      </div>
      <Navbar />
      <div className="min-h-screen flex justify-center items-center text-7xl">
        Home Page
      </div>
    </>
  )
}

export default page
