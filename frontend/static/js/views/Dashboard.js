import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Welcome back, Dom</h1>
            <p> I am Yuvraj Singh, Welcome to Dashboard.
            </p>
            <p>
                <a href="/posts" data-link >View recent posts</a>.
            </p>
        `;
    }
}