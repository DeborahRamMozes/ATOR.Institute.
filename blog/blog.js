fetch('posts.json')
  .then(res => res.json())
  .then(posts => {
    const list = document.getElementById('post-list');

    posts.forEach(post => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = post.url;
      a.textContent = post.title;
      li.appendChild(a);
      list.appendChild(li);
    });
  });
