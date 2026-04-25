<template>
  <footer id="contact" class="footer">
    <div class="cta-box">
      <h2>Let’s build something together</h2>
      <p>
        Whether you have a question or just want to say hi, my inbox is
        open.
      </p>
      <a href="mailto:inesosoares.6@gmail.com" class="contact-button"
        >Get in touch</a
      >
    </div>

    <div class="bottom-bar">
      <p>© {{ new Date().getFullYear() }} Inês Soares · Web Developer</p>
      <div class="socials">
        <a href="https://github.com/inesosoares6"
                target="_blank"
                rel="noopener noreferrer"">GitHub</a>
        <a 
                href="https://www.linkedin.com/in/inesosoares6"
                target="_blank"
                rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.cta-box {
  background: var(--text-main);
  color: white;
  padding: 60px 40px;
  border-radius: 32px;
  margin-bottom: 80px;
}

.footer {
  width: 100%;
  max-width: 1100px; /* Match the main container */
  text-align: center;
  margin: 0 auto;
  padding: 80px 2rem 40px;
}

.cta-box h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.cta-box p {
  opacity: 0.8;
  margin-bottom: 2.5rem;
}

.contact-button {
  background: white;
  color: var(--text-main);
  padding: 16px 32px;
  border-radius: 100px;
  text-decoration: none;
  font-weight: 700;
  transition: transform 0.2s ease;
  display: inline-block;
}
.contact-button:hover {
  transform: scale(1.05);
}
.bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: var(--text-muted);
  border-top: 1px solid #e2e8f0;
  padding-top: 30px;
}
.socials a {
  margin-left: 20px;
  color: var(--text-main);
  text-decoration: none;
  font-weight: 600;
}
</style>
