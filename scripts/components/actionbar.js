import { Helper } from "../utils/helper.js";

const themeButton = document.querySelector(".action-mode");
const focusButton = document.querySelector(".action-focus");
const focusGlyph = document.querySelector(".focus-glyph");
const perfectDiv = document.querySelector(".perfect");
const play = document.querySelector(".perfect-play");
const pause = document.querySelector(".perfect-pause");
const focuS = document.getElementById("focus");
const colors = document.querySelectorAll(".color");
const colorCircles = document.querySelectorAll(".color > div");
const sound = document.getElementById("sound");
const helper = new Helper();
const perfect = new Audio("./../../assets/music/radheshyam.mp3");

// const notchButton = document.querySelector('.action-notch');
// const notchGlyph = document.querySelector('.notch-glyph');
// const notch = document.querySelector('.notch');

export class ActionBar {
  constructor() {
    // this.notch = false;
    this.focus = false;
    this.playing = false;
    this.manageTheme();
    // this.manageNotch();
    this.manageFocus();
    this.manageSystemColors();
    this.manageSong();
    this.manageSound();
  }
  manageTheme() {
    themeButton.addEventListener("click", helper.switchTheme);
  }
  // manageNotch() {
  // 	notchButton.addEventListener('click', (e) => {
  // 		notch.classList.toggle('toggle-notch');
  // 		if (this.notch) notchGlyph.style.background = 'var(--system-transparent-color-primary-op)';
  // 		else notchGlyph.style.background = 'var(--system-color)';
  // 		this.notch = !this.notch;
  // 	});
  // }
  manageFocus() {
    focusButton.addEventListener("click", (e) => {
      if (this.focus) {
        focusGlyph.style.background =
          "var(--system-transparent-color-primary-op)";
        focuS.style.display = "none";
      } else {
        focusGlyph.style.background = "var(--system-color)";
        focuS.style.display = "block";
      }
      this.focus = !this.focus;
    });
  }
  manageSystemColors() {
    colors.forEach((color) => {
      color.addEventListener("click", (e) => {
        const newColor = getComputedStyle(color).getPropertyValue("background");
        document.documentElement.style.setProperty("--system-color", newColor);
        colorCircles.forEach((circle) => {
          circle.style.display = "none";
        });
        color.querySelector("div").style.display = "block";
      });
    });
  }
  manageSong() {
    perfectDiv.addEventListener("click", (e) => {
      if (this.playing) {
        pause.style.display = "none";
        play.style.display = "flex";
        perfectDiv.style.background =
          "var(--system-transparent-color-primary-op)";
        perfect.pause();
      } else {
        play.style.display = "none";
        pause.style.display = "flex";
        perfectDiv.style.background = "var(--system-color)";
        perfect.play();
      }
      this.playing = !this.playing;
    });
  }
  manageSound() {
    sound.addEventListener("input", (e) => {
      perfect.volume = e.target.value / 100;
    });
  }
}
