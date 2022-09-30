window.addEventListener("DOMContentLoaded", async function () {
  // const header = document.getElementById("configuration")

  const currentPage = window.location.pathname.split(/[/]+/).pop().split(".")[0] || "index"


  const headerActiveLink = document.getElementById(`${currentPage}-link`)
  headerActiveLink.classList.add("active")
}, false)
