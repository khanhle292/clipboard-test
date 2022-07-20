const data = "Save data to clipboard successfully."
navigator.clipboard.writeText(data)

const btn = document.getElementById("copy")

btn.addEventListener("click", () => navigator.clipboard.writeText(data))
