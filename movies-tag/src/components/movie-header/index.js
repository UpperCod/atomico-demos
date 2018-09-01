import { Element, h } from "atomico";

export default class extends Element {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get props() {
        return ["title", "page"];
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
                align-items : center;
                flex-flow: row wrap;
            }
            .logo{
                font-size : 28px;
                color : #232329;
                padding : 1rem 0px;
            }
            .pages{
                height : 35px;
                display : flex;
                flex-flow : row wrap;
                overflow : hidden;
                border-radius : 5px;
            }
            .pages button{
                border : none;
                background : #a24cd2;
                color : white;
                font-weight : 700;
                width : 80px;
            }
            .pages div{
                padding : 1rem;
                box-sizing: border-box;
                padding: 0px 1rem;
                border: 2px solid #a24ed2;
                color : #a24ed2;
            }
        `;
    }
    render() {
        return (
            <div class="box">
                <style>{this.css()}</style>
                <div class="logo">{this.props.title}</div>
                <div class="pages">
                    <button
                        click={() => {
                            this.dispatch("prev");
                        }}
                    >
                        Prev
                    </button>
                    <div>{this.props.page}</div>
                    <button
                        click={() => {
                            this.dispatch("next");
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
        );
    }
}
