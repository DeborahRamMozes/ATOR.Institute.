/* blog/blog.js */
(function () {
  const POSTS_JSON_PATH = "blog/posts.json";
  const POSTS_CONTAINER_ID = "posts";

  function escapeHtml(s) {
    return String(s ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function normalizePost(p) {
    // support common key names without you doing extra work
    const title =
      p.title ?? p.name ?? p.post_title ?? p.postTitle ?? p.TITLE ?? "";
    const file =
      p.file ?? p.href ?? p.url ?? p.path ?? p.slug ?? p.FILE ?? "";
    const description =
      p.description ?? p.desc ?? p.summary ?? p.subtitle ?? p.DESCRIPTION ?? "";

    return { title, file, description };
  }

  function renderError(msg) {
    const box = document.getElementById(POSTS_CONTAINER_ID);
    if (!box) return;
    box.innerHTML = `<div class="post"><p style="color:#ff9b9b">${escapeHtml(
      msg
    )}</p></div>`;
  }

  fetch(POSTS_JSON_PATH, { cache: "no-store" })
    .then((r) => {
      if (!r.ok) throw new Error("posts.json not found");
      return r.json();
    })
    .then((data) => {
      const posts = Array.isArray(data) ? data : data.posts || [];
      const box = document.getElementById(POSTS_CONTAINER_ID);
      if (!box) return;

      box.innerHTML = "";

      posts
        .map(normalizePost)
        .filter((p) => p.title && p.file)
        .forEach((p) => {
          const div = document.createElement("div");
          div.className = "post";
          div.innerHTML = `
            <a href="blog/${escapeHtml(p.file)}">${escapeHtml(p.title)}</a>
            ${p.description ? `<p>${escapeHtml(p.description)}</p>` : ``}
          `;
          box.appendChild(div);
        });

      if (!box.children.length) {
        renderError("No valid posts found in posts.json.");
      }
    })
    .catch(() => renderError("Failed to load blog/posts.json."));
})();
