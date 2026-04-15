//create containers for execs and teams to store the information and use within differnet files
export type Team = {
  id: string;
  name: string;
  leads:string[];
  members: string[];
};

export type Exec = {
  id: string;
  name: string;
  role: string;
  image:string;
};

export const execs: Exec[] = [
  { id: "e1", name: "Dylan Cygul", role: "President", image: "/images/dylan.jpg" },
  { id: "e2", name: "Madison Howland", role: "Vice President", image: "/images/madison.jpg" },
  { id: "e3", name: "Jahnavi Kompella", role: "Treasurer", image: "/images/jahnavi.jpg" },
  { id: "e4", name:"Weedchenska Jeanbaptiste", role: "Secretary", image: "/images/weedchenska.jpg" },
  {id: "e5", name: "Remi Klein", role: "Outrach Coordinator", image: "/images/remi.jpg" },
  {id: "e6", name: "Robert Howland", role: "Fundraing Coordinator", image: "/images/robert.jpg" },
  {id: "e7", name: "Grecia Perazzo", role: "Digital Communications Coordinator", image: "/images/grecia.jpg" },
  { id: "e8", name: "Elise Ralph", role: "Social Media Coordinator", image: "/images/elise.jpg" },

];
//the images are placeholders,i will get actual files and use those, but these r in the meantime
export const teams: Team[] = [
  {
    id: "t1",
    name: "Web Development",
    leads: ["William Chi"],
    members: ["m1", "m2", "m3"],
  },
  {
    id: "t2",
    name: "Python",
    leads: ["Abigail Hepburn", "Weedchenska Jeanbaptiste"],
    members: ["m1", "m2", "m3"],
  },
  {
    id: "t3",
    name: "Game Design",
    leads: ["Dylan Cygul"],
    members: ["m1", "m2", "m3"],
  },
];
