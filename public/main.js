// button generator

const buttonLinks = document.getElementById("button-links");
const linksArray = [
  "Github",
  "Frontend Mentor",
  "LinkedIn",
  "Twitter",
  "Instagram",
];

linksArray.forEach((linkArray, index) => {
  const button = document.createElement("button");

  button.id = `${index + 1}`;

  button.className =
    "bg-[#333333] py-3 rounded-md font-bold hover:text-[#1f1f1f] hover:bg-[#c5f82a] duration-200";
  button.textContent = linkArray;

  buttonLinks.appendChild(button);
});
