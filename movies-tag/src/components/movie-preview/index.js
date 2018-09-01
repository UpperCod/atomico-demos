import { Element, h } from "atomico";

export default class extends Element {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get props() {
        return ["title", "image", "detail", "rank"];
    }
    css() {
        return `
            :host{
                width : 280px;
                display:block;
                box-sizing: border-box;
                padding : 1rem;
                color : #232329;
            }
            .blur{
                position : relative;
            }
            .blur img:first-child{
                position : absolute;
                top : 0px;
                left : 0px;
                width : 100%;
                height : 100%;
                filter : blur(30px);
                opacity : .5;
            }
            .blur img:last-child{
                width : 100%;
                position : relative;
                z-index: 1;
                border-radius : 10px;
                display : block;
            }
            .group{
                width : 100%;
                text-align : center;
                padding-top : 1rem;
            }
            .title{
                font-size : 18px;
            }
            .detail{
                font-size : 12px;
                opacity : .5;
                line-height: 1.2em;
            }
            .rank{
                position : relative;
                display : inline-block;
                margin-top : 10px;
            }
            .rank button{
                position : absolute;
                width : 100%;
                height : 100%;
                border : none;
                left : 0px;
                background : transparent;
                font-size : 10px;
                font-weight : bold;
            }
        `;
    }
    render() {
        let { title = "", detail = "" } = this.props;
        return (
            <div class="box">
                <style>{this.css()}</style>
                <div class="blur">
                    <img src={this.props.image} alt="" />
                    <img src={this.props.image} alt="" />
                </div>
                <div class="group">
                    <div class="title">
                        {(this.props.title || "").slice(0, 20)}
                        {(this.props.title || "").length > 20 ? "..." : ""}
                    </div>
                    <div class="detail">
                        {(this.props.detail || "").slice(0, 60)}
                        ...
                    </div>
                    <div class="rank">
                        <button>{this.props.rank}</button>
                        <svg
                            height="40"
                            width="40"
                            viewBox="0 0 100 100"
                            style={{
                                transform: "rotate(-90deg)",
                                display: "block"
                            }}
                        >
                            <circle
                                cx="50"
                                cy="50"
                                r="40"
                                stroke="#a24cd2"
                                stroke-width="10"
                                stroke-linecap="round"
                                stroke-dasharray={`${100 +
                                    250 * (this.props.rank / 10)} 300`}
                                stroke-dashoffset="100"
                                fill="rgba(0,0,0,0)"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}
