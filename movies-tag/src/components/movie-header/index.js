import { Element, h } from "atomico";

export default class extends Element {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get props() {
        return ["title"];
    }
    css() {
        return `
            :host{
                width : 100%;
                display:block;
                border-top: 5px solid #a24cd2;
            }
            .box{
                display : flex;
                justify-content : space-between;
                padding: 1rem 2rem;
                box-sizing: border-box;
            }
            .logo{
                font-size : 28px;
                color : #232329;
            }
        `;
    }
    render() {
        return (
            <div class="box">
                <style>{this.css()}</style>
                <div class="logo">{this.props.title}</div>
            </div>
        );
    }
}
