export function createSocialButtons(profileId, block) {
  // Create a new div for social media links
  const socialMediaDiv = document.createElement('div');
  socialMediaDiv.classList.add('div-social-links-social-media-links');

  // Add the social media buttons HTML inside the new div
  socialMediaDiv.innerHTML = `
    <div>
      <div class="social-links-button-flex">
        <div class="social-links-button">
          <a href="#facebook-${profileId}" aria-label="Facebook Social Media">
            <span class="social-links-button--icon--facebook" aria-hidden="true">
            Facebook
</span>
          </a>
        </div>
        <div class="social-links-button">
          <a href="#twitter-${profileId}" aria-label="Twitter Social Media">
            <span class="social-links-button--icon--twitter" aria-hidden="true">
            Twitter
</span>
          </a>
        </div>
        <div class="social-links-button">
          <a href="#instagram-${profileId}" aria-label="Instagram Social Media">
            <span class="social-links-button--icon--instagram" aria-hidden="true">
            Instagram
</span>
          </a>
        </div>
      </div>
    </div>
  `;

  block.appendChild(socialMediaDiv);
}

export default async function decorate(block) {
  // Extract name and format it as an ID
  let profileId = 'default-user';
  if (block.textContent.trim()) {
    profileId = block.textContent.trim().toLowerCase().replace(/\s+/g, '-');
  }

  createSocialButtons(profileId, block);
}
