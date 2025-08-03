"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Importing JSON datasets
(() => __awaiter(void 0, void 0, void 0, function* () {
    const themeBox = yield fetch('components/themeBox.json').then(res => res.json());
    const mediumBox = yield fetch('components/mediumBox.json').then(res => res.json());
    const emotionBox = yield fetch('components/emotionBox.json').then(res => res.json());
    // Random helper
    function pickRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    // Prompt generator function
    function generateArtFizzPrompt() {
        const theme = pickRandom(themeBox);
        const medium = pickRandom(mediumBox);
        const emotion = pickRandom(emotionBox);
        return `Create a ${medium} piece based on "${theme}", inspired by ${emotion}.`;
    }
    // DOM elements
    const button = document.getElementById('generate-btn');
    const output = document.getElementById('prompt-output');
    function showPrompt() {
        const prompt = generateArtFizzPrompt();
        if (output)
            output.textContent = prompt;
    }
    // Event binding
    if (button) {
        button.addEventListener('click', showPrompt);
    }
}))();
