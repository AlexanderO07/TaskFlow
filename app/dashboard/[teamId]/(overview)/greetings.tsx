import React from 'react';


const greetingsByTime = {
  morning: ["Good morning", "Hope you slept well", "Nice to see you"],
  afternoon: ["Good afternoon", "Welcome", "Good seeing you again"],
  evening: [
    "Good evening",
    "Hope you're having a great day",
    "Nice to see you",
  ],
  night: ["Good night", "Sleep well", "Sweet dreams"],
  other: ["Hey there", "Hi", "Howdy"],
};

function getRandomGreeting() {
  const hour = new Date().getHours(); // Gets the current hour
  let greetingList;

  if (hour >= 5 && hour < 12) {
    greetingList = greetingsByTime.morning; // Morning (5 AM - 12 PM)
  } else if (hour >= 12 && hour < 18) {
    greetingList = greetingsByTime.afternoon; // Afternoon (12 PM - 6 PM)
  } else if (hour >= 18 && hour < 22) {
    greetingList = greetingsByTime.evening; // Evening (6 PM - 10 PM)
  } else {
    greetingList = greetingsByTime.night; // Night (10 PM - 5 AM)
  }

  // Selecting a random greeting from the chosen list
  const randomGreeting =
    greetingList[Math.floor(Math.random() * greetingList.length)];
  return randomGreeting;
}
export function Greetings() {
    const greeting = getRandomGreeting();

  // Check if user exists and fallback to 'User' if null

  return (
    <h2 className="text-2xl font-bold tracking-tight">
      <span
        className="ogreeting"
        style={{ position: "relative", display: "flex", flexWrap: "wrap" }}
      >
        {greeting}, &thinsp; admin !
      </span>
    </h2>
  );
}