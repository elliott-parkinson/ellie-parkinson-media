import { asset } from "$fresh/runtime.ts";

export default function DroppyBlockProject() {
  return <>
    <section>
      <h2>Droppy Blocky</h2>
    </section>
    <section class="project-hero">
      <carousel-list pagination navigation mouse-dragging loop>
        <carousel-item>
          <img
            alt="Arcade mode"
            src={asset("../images/projects/droppy-blocky/arcade.png")}
          />
        </carousel-item>
        <carousel-item>
          <img
            alt="Main menu"
            src={asset("../images/projects/droppy-blocky/menu.png")}
          />
        </carousel-item>
        <carousel-item>
          <img
            alt="Level complete"
            src={asset("../images/projects/droppy-blocky/level-complete.png")}
          />
        </carousel-item>
        <carousel-item>
          <img
            alt="Loading"
            src={asset("../images/projects/droppy-blocky/loading.png")}
          />
        </carousel-item>
        <carousel-item>
          <img
            alt="Paused"
            src={asset("../images/projects/droppy-blocky/paused.png")}
          />
        </carousel-item>
        <carousel-item>
          <img
            alt="High Score"
            src={asset("../images/projects/droppy-blocky/high-score.png")}
          />
        </carousel-item>
      </carousel-list>


      <div>
        <p>Do you miss when simple puzzle games didn't have lootboxes, paying for more lives, and were just games you played for as long as you liked when you were bored? So did I. Every game is on Facebook, wants you to share with friends for extra lives, or spin a wheel for a chance to play. Not Droppy Blocky.</p>
        <p>Started in October 2025 as a passion project. Droppy Blocky is a 2000's style puzzle game (similar to Popcap games of the era) with simple, clean mechanics and a focus on rewarding gameplay through the use of sounds and visual effects.</p>
        <p>Built in workers, indexeddb, web components, 2dcanvas, webgpu, typescript and sass.</p>
        <a href="https://block-sinvl.netlify.app/" target="_blank" rel="noopener noreferrer">Play</a>
      </div>
    </section>


    <section>
      <div>
        <h3>Multiple Game Modes</h3>
      </div>
      <div>
        <h3>Puzzzle</h3>
      </div>
      <div>
        <h3>Progression</h3>
      </div>
      <div>
        <h3>Cross Platform</h3>
        <p>Works with and plays smoothly on iOS, Android, and desktop PC's. Full support for Firefox, Chrome and Edge.</p>
      </div>
      <div>
        <h3>Reddit Games Integration</h3>
        <p>Play a smaller demo version on Reddit games. Currently in the approval process.</p>
      </div>
    </section>
  </>
}
