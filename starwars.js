// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.dev/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução
import { play } from "./music.js"
import { toRomano } from "./romano.js"
const API_ENDPOINT = 'https://swapi.dev/api'

let audioConfig = {
    audioUrl: "./audio/tema-sw.mp3",
    coverImageUrl: "./imgs/logo.svg",
    title: "Intro",
    artist: "John Williams",
};

play(audioConfig, document.body)

const resposta = await fetch(`${API_ENDPOINT}/films`);
var films = await resposta.json()
let filmesUL = document.querySelector('#filmes ul');
films.results.forEach(f => {
    let LI = document.createElement('li')
    LI.innerHTML = `Episode ${toRomano(parseInt(f.episode_id))} - ${f.title}`
    filmesUL.appendChild(LI)
})