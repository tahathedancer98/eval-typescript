var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let utilisateurs;
let articles;
document.addEventListener("DOMContentLoaded", () => __awaiter(this, void 0, void 0, function* () {
    const dataUsers = yield fetch("https://jsonplaceholder.typicode.com/users");
    const dataPosts = yield fetch("https://jsonplaceholder.typicode.com/posts");
    const users = (yield dataUsers.json());
    utilisateurs = users;
    const posts = (yield dataPosts.json());
    articles = posts;
    getDatas(users, posts);
}));
function getDatas(users, posts) {
    const div = document.querySelector('.data');
    div.innerHTML = "";
    let html = "";
    users.forEach(user => {
        const articlesUser = posts.filter(p => p.userId === user.id);
        html += `
           <div class="col-md-4">
                <h4 style="color:blue;">${user.name}</h4>
                <p>${user.email}</p>
                <h5 style="color:yellow">Titre des articles rédigés :</h5>
                <ul>`;
        articlesUser.forEach(article => {
            html += `
                <li>${article === null || article === void 0 ? void 0 : article.title}</li>
            `;
        });
        html += `
            </div>
            `;
    });
    div.innerHTML = html;
}
const form = document.querySelector(".Articles");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const titre = document.querySelector(".titre");
    const auteur = document.querySelector(".auteur");
    const user = utilisateurs.filter(u => u.name.toLowerCase().includes(auteur.value.toLowerCase()));
    const post = articles.filter(a => a.title.toLowerCase().includes(titre.value.toLowerCase()));
    getDatas(user, post);
});
