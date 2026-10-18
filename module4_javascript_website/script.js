// Module 4 Coding Assignment
// Names beginning with J or j receive a goodbye; all others receive a hello.

const names = [
  "Yaakov",
  "John",
  "Jen",
  "Jason",
  "Paul",
  "Frank",
  "Larry",
  "Paula",
  "Laura",
  "Jim"
];

function createGreeting(name) {
  // Check the first character without considering letter case.
  if (name.charAt(0).toLowerCase() === "j") {
    return `Goodbye ${name}`;
  }
  return `Hello ${name}`;
}

function runGreetings() {
  const resultsList = document.getElementById("results");
  resultsList.innerHTML = "";

  names.forEach((name) => {
    const greeting = createGreeting(name);

    // Required assignment output: print each greeting to the browser console.
    console.log(greeting);

    // Also show the same output on the page for easy viewing.
    const item = document.createElement("li");
    const badge = document.createElement("span");
    badge.className = "badge " + (greeting.startsWith("Goodbye") ? "goodbye" : "hello");
    badge.textContent = greeting.startsWith("Goodbye") ? "GOODBYE" : "HELLO";

    const message = document.createElement("span");
    message.className = "message";
    message.textContent = greeting;

    item.append(badge, message);
    resultsList.appendChild(item);
  });
}

document.getElementById("runButton").addEventListener("click", runGreetings);

// Run once when the page loads.
runGreetings();
