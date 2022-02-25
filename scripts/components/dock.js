import { dockWindows } from "./window.js";

const dockIcons = document.querySelectorAll(".icon > div");
const mounts = [
  document.getElementById("database"),
  document.getElementById("sql"),
  document.getElementById("Harsha"),
  document.getElementById("Praveen"),
  document.getElementById("Ravindar"),
  document.getElementById("Vineeth"),
  document.getElementById("Nagasai"),
];

export class Dock {
  constructor() {
    dockIcons.forEach((icon, i) => {
      icon.addEventListener("click", (e) => {
        const index = e.target.dataset.icon;
        if (index == 8)
          return window.open("https://github.com/NSVEGUR/dbOS-web", "_blank");
        if (!dockWindows[index].isOpen) {
          if (index == 7) {
            dockWindows[index].open({
              url: "https://vscode.dev/",
            });
          } else {
            dockWindows[index].open({
              mount: mounts[index].cloneNode(true),
            });
          }
          icon.classList.add("active");
        } else {
          dockWindows[index].focus();
        }
      });
    });
  }
}
