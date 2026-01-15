import { asset } from "$fresh/runtime.ts";
import { experience } from "../data/experience.ts";

export const TimelineItem = (props: any) => <timeline-item>
  <slot name="icon"></slot>
  <slot name="title">
    <h3>
      {props.title}
      {props.url && <span>(<a href={props.url}>{props.url}</a>)</span>}
      <span class="date">{props.date}</span>
    </h3>
  </slot>
  <div class="container">
    <div>
      {props.content.map((paragraph: any) => <p>{paragraph}</p>)}

      { props.skills &&
        <ul class="skills-list">
          {props.skills?.map((skill: string) => <li>{skill}</li>)}
        </ul>
      }
    </div>


    { props.pictureSrc &&
      <slot name="picture">
        <picture>
          <img src={props.pictureSrc} async loading="lazy"  />
        </picture>
      </slot>
    }
  </div>

</timeline-item>;


export default function Home() {
  return <>
    <section>
      <picture class="avatar">
        <img src={asset("images/avatar.jpg")} />
      </picture>
    </section>
    <section>
      <h2>Sociable, experienced and passionate!</h2>
      <p>I'm a Wessex based, sociable, full stack web developer with over a decade experience in the industry. I contract and freelance for a range of clients in my local area. </p>
      <p>I take a special interest in performance, modularity and re-usability. My goal is always to build high quality <a href="https://www.amazon.co.uk/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882">clean code</a>, using the coding standards of either the language or an existing codebase. This should be done without compromising on the time it should take to complete a project. The idea is to make the code easier to maintain, as the majority of the costs incurred when developing are in the maintenance, not the initial build.</p>
      <p>Currently, this means a primarily backend-rendered site (using Deno and Fresh) with web components for progressive enhancements.</p>
      <p>I specialise in frontend solutions. I am skilled in Typescript, React, SolidJS, Lit and many more.</p>
    </section>

    <section class="no-print">
      <h2>Download</h2>
      <p>Please use the button below to download the latest copy of my CV. Alternatively, you can print this web page to pdf </p>
      <button>Download</button>
    </section>

    <section class="page-break">
      <h2>My Interests and Hobbies</h2>
      <p> There's this stigma that all developers are still living in their mothers basements. Clearly people don't know they're paid enough to have their own basements these days!. I like to get out, meet people and explore. I love the outdoors, so here's a little bit about what I do outside of work. </p>
      <ul class="interests-list">
        <li>
          <picture>
            <source srcset={asset(`/images/interests/bouldering.webp`)} />
            <img src={asset(`/images/interests/bouldering.jpg`)} alt="" loading="lazy" />
          </picture>
          <strong>Bouldering</strong>
          <p>I started bouldering (both indoor and outdoor) in mid 2017 as a way to try and improve my climbing skills.</p>
          <p>I've always had a massive fear of heights and I was beginning to climb more technical mountains. I've found it's a fun sport in it's own right though and am often heading out in the evening for a climb.</p>
        </li>
        <li>
          <picture>
            <source srcset={asset(`/images/interests/skating.webp`)} />
            <img src={asset(`/images/interests/skating.jpg`)} alt="" loading="lazy" />
          </picture>
          <strong>Inline Roller Skating</strong>
          <p>Originally introduced by my father as a way of curbing the sibling rivalry between me and my younger brother, inline roller skating is now a family sport.</p>
          <p>Our obsession with this sport lead to us being skate marshals and the chairman of a roller rink in Rushden, Northamptonshire for several years.</p>
        </li>
        <li>
          <picture>
            <source srcset={asset(`/images/interests/hiking.webp`)} />
            <img src={asset(`/images/interests/hiking.jpeg`)} alt="" loading="lazy" />
          </picture>
          <strong>Hiking</strong>
          <p>I've always had a soft spot for the Lake District and the UK's countryside. I've now hit the peaks of summits in the Peak District, New Forest, the Cotswolds, the Forest of Bowland, the Yorkshire Dales, North York Moors, Eryri, Dartmoor, and Bodmin moor. </p>
          <p>I started climbing mountains in 2011, and I've now progressed to hiking with my cat Leo. He has travelled the UK with me and climbed more peaks than I can remember.</p>
        </li>
        <li>
          <picture>
            <source srcset={asset(`/images/interests/cycling.webp`)} />
            <img src={asset(`/images/interests/cycling.jpg`)} alt="" loading="lazy" />
          </picture>
          <strong>Cycling</strong>
          <p>Cycling is something I've been doing since I was a young child. I've cycled to the many places I have worked, cycled just to explore, and cycled as a daily means of transport.</p>
          <p></p>
        </li>
        <li>
          <picture>
            <source srcset={asset(`/images/interests/sailing.webp`)} />
            <img src={asset(`/images/interests/sailing.jpg`)} alt="" loading="lazy" />
          </picture>
          <strong>Sailing</strong>
          <p>I have a passionate love for sailing. I've lived on several boats over the years. I've come to love the nomadic lifestyle and close community on the water.</p>
        </li>
        <li>
          <picture>
            <source srcset={asset(`/images/interests/zelda.webp`)} />
            <img src={asset(`/images/zelda.png`)} alt="" loading="lazy" />
          </picture>
          <strong>The Legend of Zelda</strong>
          <p>Zelda is one of those games I grew up playing, first playing The Legend of Zelda: A Link to the Past on the Super Nintendo, and moving onto the Ocarina of Time on the Nintendo 64. It's one of the only video games to capture my interest with every single game in the franchise. </p>
        </li>
      </ul>
    </section>

    <section class="page-break">
      <h2>Experience</h2>
      <p>I pride myself in my ability to pick up a new technology / framework quickly, and am excited to learn on the job when the right opportunity presents itself. </p>
      <p>Please note that the below list is not fully comprehensive and has been filtered to remove smaller / less relevant projects.</p>
      <p class="no-print">Please use the search below if you're interested in particular technologies I have worked with. </p>

      <alert-section class="no-print">
        <p>
          <strong>Note: </strong> The search is client side only and will not appear unless you have javascript enabled.
        </p>
      </alert-section>

      <filter-search for="career-timeline" class="no-print">
        <input type="search" id="query" placeholder="search" style="display: none" />
      </filter-search>

      <time-line id="career-timeline">
        {experience.map(item => <TimelineItem {...item}/>)}
      </time-line>
    </section>

    <section class="page-break">
      <h2>References</h2>
      <p>References are available on request.</p>
    </section>
  </>
}
