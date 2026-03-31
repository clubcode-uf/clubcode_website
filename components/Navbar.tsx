"use client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  function onClick() {
    router.push("/about");
  }
  return (
    <div className="flex justify-between p-4 ">
      <div>Navbar goes here</div>
      <button onClick={onClick} className="btn btn-primary">
        Go to About
      </button>
    </div>
  );
};

export default Navbar;
