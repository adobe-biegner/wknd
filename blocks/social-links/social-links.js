export default function decorate(block) {
  // Get all direct children divs
  const children = [...block.children];

  // Assign classes to the first three divs (if they exist)
  if (children[0]) children[0].classList.add("div-social-link-picture");
  if (children[1]) children[1].classList.add("div-social-link-name");
  if (children[2]) children[2].classList.add("div-social-link-profile");

  // Extract name and format it as an ID
  let profileId = "default-user";
  if (children[1] && children[1].textContent.trim()) {
    profileId = children[1].textContent.trim().toLowerCase().replace(/\s+/g, "-");
  }

  // Create a new div for social media links
  const socialMediaDiv = document.createElement("div");
  socialMediaDiv.classList.add("div-social-link-social-media-links");

  // Add the social media buttons HTML inside the new div
  socialMediaDiv.innerHTML = `
    <div>
      <div class="social-links_button_flex">
        <div class="social-links_button">
          <a href="#facebook-${profileId}" aria-label="Facebook Social Media">
            <span class="social-links_button__icon--facebook" aria-hidden="true">
            Facebook
</span>
          </a>
        </div>
        <div class="social-links_button">
          <a href="#twitter-${profileId}" aria-label="Twitter Social Media">
            <span class="social-links_button__icon--twitter" aria-hidden="true">
            Twitter
</span>
          </a>
        </div>
        <div class="social-links_button">
          <a href="#instagram-${profileId}" aria-label="Instagram Social Media">
            <span class="social-links_button__icon--instagram" aria-hidden="true">
            Instagram
</span>
          </a>
        </div>
      </div>
    </div>
  `;

  block.appendChild(socialMediaDiv);
}
