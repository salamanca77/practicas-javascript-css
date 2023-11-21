const controles = document.querySelector("#controles");
const prevbuttom = document.querySelector("#prevbuttom");
const nextbuttom = document.querySelector("#nextbuttom");

const containerMovies = document.querySelector("#containerMovies");
const containerListMovies = document.querySelector("#containerListMovies");

const dataVideos = [
  { id: "T_j60n1zgu0" },
  { id: "2qgs7buSnHQ" },
  { id: "T_j60n1zgu0" },
  { id: "VcxXipZg1-0" },
];

let indexDataVideo = 0;

prevbuttom.addEventListener("click", (e) => {
  let cambio = indexDataVideo;
  indexDataVideo = indexDataVideo - 1 > 0 ? indexDataVideo - 1 : indexDataVideo;

  if (cambio != indexDataVideo) renderVideo(dataVideos[indexDataVideo].id);
});

nextbuttom.addEventListener("click", (e) => {
  let cambio = indexDataVideo;

  indexDataVideo =
    indexDataVideo + 1 < dataVideos.length
      ? indexDataVideo + 1
      : indexDataVideo;

  if (cambio != indexDataVideo) renderVideo(dataVideos[indexDataVideo].id);
});

renderVideo(dataVideos[0].id);

renderListMovie();

function renderListMovie() {
  const html = dataVideos.map((dataVideo, index) => {
    return `
            <div class="item" >
                <a href="#" data-id="${index}">
                    <img src="https://img.youtube.com/vi/${dataVideo.id}/mqdefault.jpg">
                 </a>
            </div>
            `;
  });
  containerListMovies.innerHTML = html.join("");

  document.querySelectorAll(".item a").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const id = +item.getAttribute("data-id");
      indexDataVideo = id;
      renderVideo(dataVideos[indexDataVideo].id);
    });
  });
}

function renderVideo(id) {
  containerMovies.innerHTML = `
            <iframe width="873" height="491" src="https://www.youtube.com/embed/${id}?list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC" title="Creando Custom Hooks y usando Context para conseguir un estado global en ReactJS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `;
}
/* https://www.youtube.com/watch?v=T_j60n1zgu0&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC&index=1
    https://www.youtube.com/watch?v=2qgs7buSnHQ&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC&index=3
    https://www.youtube.com/watch?v=2qgs7buSnHQ&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC&index=3
    https://www.youtube.com/watch?v=VcxXipZg1-0&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC&index=4 */

/* https://i3.ytimg.com/vi/T_j60n1zgu0/hqdefault.jpg */
