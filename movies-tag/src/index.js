import { Element, h } from "atomico";
import MoviewHeader from "./components/movie-header";
import MoviewPreview from "./components/movie-preview";

customElements.define("movie-header", MoviewHeader);
customElements.define("movie-preview", MoviewPreview);

customElements.define(
    "tag-movies",
    class extends Element {
        constructor() {
            super();
            this.attachShadow({ mode: "open" });
        }
        css() {
            return `
                :host{
                    width : 100%;
                    height : 100%;
                    display : block;
                    overflow-x : hidden;
                    overflow-y : scroll;
                }
                .list{
                    width : 100%;
                    display : flex;
                    flex-flow : row wrap;
                    justify-content : center;
                }
            `;
        }
        elementMount() {
            this.fetch(1).then(data => this.setState(data));
        }

        fetch(page) {
            return fetch(
                `https://api.themoviedb.org/3/discover/movie?page=${page}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=a361f80e17f8fb69899e2088cb413984`
            ).then(data => data.json());
        }
        render() {
            console.log(this.state);
            return (
                <div class="box">
                    <style>{this.css()}</style>
                    <movie-header title="Trending movies" />
                    <div class="list">
                        {(this.state.results || []).map(props => (
                            <movie-preview
                                title={props.title}
                                detail={props.overview}
                                rank={props.vote_average}
                                image={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${
                                    props.poster_path
                                }`}
                            />
                        ))}
                    </div>
                </div>
            );
        }
    }
);
