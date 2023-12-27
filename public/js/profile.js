const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#post-name").value.trim();
  const needed_funding = document
    .querySelector("#comment-section")
    .value.trim();
  const description = document.querySelector("#comments-desc").value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create project");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete project");
    }
  }
};

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".posts-list")
  .addEventListener("click", delButtonHandler);
