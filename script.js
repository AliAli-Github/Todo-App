const textarea = document.getElementById("prompt-textarea");

textarea.addEventListener('input', function() {
    this.style.height = "auto";
    this.style.height = `${this.scrollHeight}px`;
});
