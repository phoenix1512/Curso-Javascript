const url = "https://jsonplaceholder.typicode.com/posts"

fetch(url)
  .then(response => response.json())
  .then(posts => {
    const list = posts.map(post =>
      `<li> <a href="detalle.html?id=${post.id}">${post.id}</a> ${post.title} </li>`).join('')
    const listaHtml = document.getElementById('list');
    listaHtml.innerHTML = list;
  })
