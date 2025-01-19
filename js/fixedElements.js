document.addEventListener("DOMContentLoaded", function () {
    const fixedIcons = `
      <div class="fixed-icons">
        <a href="tel:9743143065" class="icon call" title="Call">
          <img src="assets/call.jpg" alt="Call">
        </a>
        <a href="https://wa.me/9743143065" class="icon whatsapp" target="_blank" title="WhatsApp">
          <img src="assets/whatsapp.jpg" alt="WhatsApp">
        </a>
        <a href="#" onclick="window.scrollTo({ top: 0, behavior: 'smooth' }); return false;" class="icon backToTop" title="Back To Top">
          <img src="assets/backToTop.jpg" alt="Back To Top" style="width:40px,height:40px;">
        </a>
      </div>
    `;

    const navbar = `
      <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-brand"><img src="assets/logo.jpg" alt="Logo" class="logo"></div>
        <div class="navbar-toggle" onclick="toggleMenu()">&#9776;</div>
        <ul class="navbar-menu">
            <li><a href="index.html">HOME</a></li>
            <li>
                <a href="index.html#products0" class="dropdown-toggle">PRODUCTS</a>
                <span class="dropdown-icon" onclick="toggleDropdown(event)">+</span><span class="dropdown-icon-rev" onclick="toggleUp(event)">-</span>
                <ul class="dropdown">
                    <li><a href="np2.html">NP2 RCC Cement Pipes</a></li>
                    <li><a href="np3.html">NP3 RCC Cement Pipes</a></li>
                    <li><a href="cattleFeedingHRP.html">RCC Cattle Feeding Half Round Pipes</a></li>
                    <li><a href="septicTank.html">RCC Septic Tanks</a></a></li>
                    <li><a href="poles.html">RCC Poles</a></a></li>
                </ul>
            </li>
            <li><a href="index.html#section2">ABOUT</a></li>
            <li><a href="contactUs.html">CONTACT</a></li>
        </ul>
    </nav>
    </div>
    `;

    const footer = `
      <footer>
        <p>Chandanshiv Cement Pipe Factory, Mudhol © | All Rights Reserved.</p>
      </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', navbar);
    document.body.insertAdjacentHTML('beforeend', fixedIcons);
    document.body.insertAdjacentHTML('beforeend', footer);
});