class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <a id="logo" href="./index.html"><img style="height: 80px" src="./images/logo.png" alt=""></a>
            
            <ul>
              <li class="hideOnMobile"><a href="./index.html">Accueil</a></li>
              <li class="hideOnMobile"><a href="./annonces.html">Annonces</a></li>
              <li class="hideOnMobile"><a href="./boutique.html">Boutique</a></li>
              <li class="hideOnMobile"><a href="./inscriptions.html">Inscriptions</a></li>
              <li class="hideOnMobile"><a href="./apropos.html">À Propos</a></li>
              <li class="menu-button" onclick=showSidebar() aria-label="open sidebar"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="black"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
            </ul>
            
            <ul class="sidebar">
                <li class="close-button" onclick=hideSidebar() aria-label="close sidebar"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                <li><a href="./index.html">Accueil</a></li>
                <li><a href="./annonces.html">Annonces</a></li>
                <li><a href="./boutique.html">Boutique</a></li>
                <li><a href="./inscriptions.html">Inscriptions</a></li>
                <li><a href="./apropos.html">À Propos</a></li>
         </ul>
        </nav>`
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="footer">

              <div class="contact">
                <h3>Adresse</h3>
                <p>820 rue Montarville, <br>Longueuil, QC, Canada</p>
                <a class="maps" href="https://www.google.com/maps/place/Paroisse+de+Sainte+Rafqa/@45.5287598,-73.502126,18z/data=!3m1!4b1!4m6!3m5!1s0x4cc91b46cea5c98b:0x246d97a857f6cd03!8m2!3d45.5287598!4d-73.502126!16s%2Fg%2F1tlmmynm?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D">Google Maps -></a><br>
                <a class="maps" href="https://maps.apple.com/place?place-id=I492DCEAA79CCDB3C&address=869+Rue+Notre-Dame-De-Grâces%2C+Longueuil+QC+J4J+3E6%2C+Canada&coordinate=45.5285791%2C-73.502324&name=Paroisse+Ste+Rafqa&_provider=9902">Maps -></a><br>
            
                <h3>Contact</h3>
                <p><a href="tel:+1 5149455315">Tel: (514) 553-7382</a><br>
                  <a href="mailto: 255esainte.rafqa@gmail.com">255esainte.rafqa@gmail.com</a></p>
              </div>
            
              <div class="icons">
                <h3>Suivez-nous!</h3>
                <a href="https://www.facebook.com/profile.php?id=100068390004789"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="https://www.instagram.com/255ssr/"><ion-icon name="logo-instagram"></ion-icon></a>
              </div>
            
              <div>
                <h3>Liens</h3>
                <div class="navigate">
                  <ul>
                    <li><a href="./index.html">Accueil <span>></span></a></li>
                    <li><a href="./annonces.html">Annonces<span>></span></a></li>
                    <li><a href="./boutique.html">Boutique<span>></span></a></li>
                    <li><a href="./inscriptions.html">Inscriptions <span>></span></a></li>
                    <li><a href="./apropos.html">À propos<span>></span></a></li>
            
                  </ul>
                </div>
              </div>
        </div> `
    }
}

customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);
customElements.define('special-sidebar', Sidebar);

function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('#overlay');
    sidebar.style.right = '0';
    // sidebar.style.position = 'fixed';
    overlay.style.display = 'block';
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('#overlay');
    sidebar.style.right = '-100%';
    // sidebar.style.position = 'fixed';
    overlay.style.display = 'none';
}