import Navbar from "../../components/Navbar";
import DottedSurface from "../../components/DottedSurface/DottedSurface";

const Page = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <DottedSurface />
      </div>
      <Navbar />
      <div className="min-h-screen px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold font-mono mb-6 text-white">Our Story</h1>
          <p className="font-mono text-lg text-zinc-200 mb-4">
            Club C.O.D.E. was founded by a group of students who believed that the best way to learn
            technology is by building things together. What started as a small study group has grown
            into a thriving community of developers, designers, and tech enthusiasts.
          </p>
          <p className="font-mono text-lg text-zinc-200 mb-4">
            Our mission is simple: Collaborate, Organize, Divide, and Execute. We bring students
            together to work on real projects, learn new skills, and support each other along the way.
            Whether you are a complete beginner or an experienced developer, there is a place for you here.
          </p>
          <p className="font-mono text-lg text-zinc-200 mb-4">
            Through hands-on workshops, team projects, and community events, we aim to bridge the gap
            between classroom learning and real-world experience.
          </p>
        </div>
      </div>
    </>
  )
}

export default Page
