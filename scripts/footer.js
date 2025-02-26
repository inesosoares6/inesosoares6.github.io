const footerContent = `
<div class="container">
    <footer class="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top">
        <span class="mb-3 mb-md-0 text-body-secondary">2024 © Inês Soares | Web Developer</span>
    </footer>
</div>`;

document.addEventListener('DOMContentLoaded', () => {
    const container = document.createElement('div');
    container.innerHTML = footerContent;
    document.body.appendChild(container);
});