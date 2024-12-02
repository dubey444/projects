import React from "react";
import photo from "../assets/img/photo.jpg"; // Local fallback image

const people = [
  {
    name: "Rohit Sharma",
    profile_photo: "https://example.com/photos/alice.jpg",
    age: 28,
    city: "New York",
    profession: "Software Engineer",
  },
  {
    name: "Yasasvi Jiswl",
    profile_photo: "https://example.com/photos/michael.jpg",
    age: 34,
    city: "Los Angeles",
    profession: "Graphic Designer",
  },
  {
    name: " K L rhul",
    profile_photo: "https://example.com/photos/emily.jpg",
    age: 22,
    city: "Chicago",
    profession: "Content Writer",
  },
  {
    name: "Rishabh pant ",
    profile_photo: "https://example.com/photos/daniel.jpg",
    age: 40,
    city: "Houston",
    profession: "Architect",
  },
  {
    name: "Hardik pandya",
    profile_photo: "https://example.com/photos/sophia.jpg",
    age: 29,
    city: "Bcci",
    profession: "Marketing Manager",
  },
  {
    name: "akash deep",
    profile_photo: "https://example.com/photos/james.jpg",
    age: 31,
    city: "Philadelphia",
    profession: "Civil Engineer",
  },
  {
    name: "Mohmad Siraj",
    profile_photo: "https://example.com/photos/olivia.jpg",
    age: 25,
    city: "DSSO",
    profession: "Data Analyst",
  },
  {
    name: "Rvindra jadeja ",
    profile_photo: "https://example.com/photos/benjamin.jpg",
    age: 38,
    city: "icc",
    profession: "Financial Advisor",
  },
  {
    name: "Jasprit Bumrah",
    profile_photo: "https://example.com/photos/charlotte.jpg",
    age: 27,
    city: "Dallas",
    profession: "UI/UX Designer",
  },
  {
    name: "Umran malik",
    profile_photo: "https://example.com/photos/william.jpg",
    age: 35,
    city: "San Jose",
    profession: "Mechanical Engineer",
  },
];

const Card = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {people.map((person, index) => (
        <div
          key={index}
          className="bg-blue-300 inline-block p-4 m-4 rounded-md shadow-lg text-center"
        >
          <img
            className="mx-auto rounded-full w-32 h-32"
            src={person.profile_photo || photo}
            alt={`${person.name}'s profile`}
          />
          <h1 className="text-lg font-semibold mt-2">{person.name}</h1>
          <h4 className="text-sm text-gray-700">{person.profession}</h4>
          <h2 className="text-sm text-gray-600">
            {`{person.city},  {person.age}`}
          </h2>
          <button className="mt-4 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition duration-200">
            Add Friend
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;


{/*

import React from "react";

const people = [
  {
    name: "Alice Johnson",
    profile_photo: "https://example.com/photos/alice.jpg",
    age: 28,
    city: "New York",
    profession: "Software Engineer",
  },
  {
    name: "Michael Smith",
    profile_photo: "https://example.com/photos/michael.jpg",
    age: 34,
    city: "Los Angeles",
    profession: "Graphic Designer",
  },
  {
    name: "Emily Davis",
    profile_photo: "https://example.com/photos/emily.jpg",
    age: 22,
    city: "Chicago",
    profession: "Content Writer",
  },
  {
    name: "Daniel Brown",
    profile_photo: "https://example.com/photos/daniel.jpg",
    age: 40,
    city: "Houston",
    profession: "Architect",
  },
  {
    name: "Sophia Wilson",
    profile_photo: "https://example.com/photos/sophia.jpg",
    age: 29,
    city: "Phoenix",
    profession: "Marketing Manager",
  },
  {
    name: "James Miller",
    profile_photo: "https://example.com/photos/james.jpg",
    age: 31,
    city: "Philadelphia",
    profession: "Civil Engineer",
  },
  {
    name: "Olivia Martinez",
    profile_photo: "https://example.com/photos/olivia.jpg",
    age: 25,
    city: "San Antonio",
    profession: "Data Analyst",
  },
  {
    name: "Benjamin Taylor",
    profile_photo: "https://example.com/photos/benjamin.jpg",
    age: 38,
    city: "San Diego",
    profession: "Financial Advisor",
  },
  {
    name: "Charlotte Anderson",
    profile_photo: "https://example.com/photos/charlotte.jpg",
    age: 27,
    city: "Dallas",
    profession: "UI/UX Designer",
  },
  {
    name: "William Harris",
    profile_photo: "https://example.com/photos/william.jpg",
    age: 35,
    city: "San Jose",
    profession: "Mechanical Engineer",
  },
  // Add the rest of the data...
];

const Card = () => {
  return (
    <div className="flex flex-wrap">
      {people.map((person, index) => (
        <div
          key={index}
          className="bg-slate-400 m-4 p-4 rounded-md shadow-lg text-center"
        >
          <img
            className="mx-auto rounded-full w-32 h-32"
            src={person.profile_photo}
            alt={`${person.name}'s profile`}
          />
          <h1 className="text-lg font-semibold mt-2">{person.name}</h1>
          <h4 className="text-sm text-gray-700">{person.profession}</h4>
          <h2 className="text-sm text-gray-600">{`${person.city}, Age: ${person.age}`}</h2>
        </div>
      ))}
    </div>
  );
};

export default Card;


*/}
