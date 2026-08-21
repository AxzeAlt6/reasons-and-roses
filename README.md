# Our Love Story

Here is a comprehensive, highly detailed prompt designed to give to an AI code generator (like ChatGPT, Claude, or an HTML/CSS/JS generator). It incorporates the romantic context from your photos, ensures mobile-friendliness, specifies the yellow/floral aesthetic, and includes the exact technical instructions for the music button.



---



Copy and paste this prompt into your AI generator:



Objective: Create a single-page, fully responsive mobile-optimized HTML/CSS/JS website designed as a heartfelt digital love letter.



Visual Theme & Aesthetics:



· Color Palette: A warm, sunny yellow theme paired with creams and soft whites. Use a gradient of warm yellows (e.g., #FFF3CD, #FFE4A0, #D4AF37).

· Floral Elements: Incorporate beautiful, subtle floral illustrations (like daisies, sunflowers, and small vines) using CSS or SVG vectors. Use them as decorative corner borders, a subtle repeated watermark background, and tiny separators between sections. The overall design must feel soft, romantic, and handmade.

· Typography: Use a clean, elegant, handwritten-style font (like Pacifico or Caveat imported from Google Fonts) for the headers, and a modern sans-serif for the body text to maintain readability on mobile.



Main Content - "500 Reasons Why I Love You":



· Title: The main visible hero section should say "500 Reasons Why I Love You" in golden/bold lettering, followed by a floating counter (e.g., "1 / 500") that dynamically updates as the user scrolls down to indicate how many reasons they've read.

· The Reasons: Generate a scrollable list of 500 reasons. To personalize it based on the photos, generate the first 20 based on these descriptive examples, then bulk-generate the rest with similar romantic and playful vibes:

  · 1. Because you looked absolutely stunning in your blue graduation cap and gown.

  · 2. Because our photo booth sessions always turn into the best, silliest memories.

  · 3. Because you make cute duck faces even when trying to be serious.

  · 4. Because sharing food with you, like that chocolate pastry with the yellow custard, makes every meal taste better.

  · 5. Because I love seeing your reflection right beside mine in every mirror selfie we take.

  · 6. Because you wear glasses and make them look incredibly cool and cute.

  · 7. Because you get excited about green drinks and pastries.

  · 8. Because you know how to make silly faces that instantly cheer me up.

  · 9. Because our coffee dates are my favorite way to spend an afternoon.

  · 10. Because you always match my energy.

  · (Prompt continues to generate the remaining 490 to cover time, experiences, physical traits, and future dreams).

· Animation: Ensure that as the user scrolls down the mobile screen, each new reason number softly fades in from the bottom. Place a small, golden heart icon next to every number.



Music Button Functionality (Crucial):



· Design: Create a prominent, circular, gold-bordered button at the bottom center or top of the screen featuring a musical note icon.

· Label: The button should be labeled 🎵 Play Our Song - 'All I Need to Hear' by The 1975.

· Functionality: Use an HTML5 <audio> tag. Because the user will provide an MP3 file themselves, write JavaScript that initializes the audio player.

· The "Chorus" Loop: Since the request is to play specifically the chorus of the song, write a JavaScript function that, when the button is clicked, sets the audio.currentTime to 95 seconds (the start of the chorus). Once the audio reaches 130 seconds (the end of the chorus), program it to seamlessly loop back to 95 seconds, creating an endless chorus loop. The button must toggle between "Play" and "Pause" text states.



Technical Requirements:



· Responsiveness: Use CSS Media Queries to ensure it looks perfect on all mobile screens (max-width: 768px). Use flexible grids and paddings so the text never hits the edges of the screen.

· Performance: Use a lightweight structure.

· User Experience: The 500 reasons should be contained in a div that allows smooth vertical scrolling.

· Assets: Use https links for all fonts and icons so the user doesn't need to download anything. The audio file will be named our-song.mp3 and placed in the same folder as the html file.



Provide the complete code in one HTML file (embedded CSS and JS). At the top of the code, add a comment block explaining to the user where to drop their our-song.mp3 audio file for the music button to work.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/78e387cb-8bb9-4309-ac5b-743cc3713242).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
