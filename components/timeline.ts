import { html } from "npm:lit-html";

const props = {
    title: "",
    url: "",
    date: null,
    skills: [],
    content: [],
    pictureSrc: ""
}

export const picture = (src: string) => { return html`<slot name="picture">
        <picture>
            <img src="${asset('/' + src)}" async loading="lazy"  />
        </picture>
    </slot>`;
}

export const timelineItem = html`<timeline-item>
    <slot name="icon"></slot>
    <slot name="title">
        <h3>
        ${props.title}
        ${props.url ?? html`<span>(<a href=${props.url}>${props.url}</a>)</span>`}
        <span class="date">${props.date}</span>
        </h3>
    </slot>
    <div class="container">
        <div>
        ${props.content.map((paragraph: any) => html`<p>${paragraph}</p>`)}

            ${ props.skills && html`
                <ul class="skills-list">
                ${props.skills?.map((skill: string) => html`<li>${skill}</li>`)}
                </ul>
            ` }
        </div>


        ${ props.pictureSrc && picture(props.pictureSrc) }
    </div>
</timeline-item>`