import { createSocialButtons } from '../social-links/social-links.js';
import { loadCSS } from '../../scripts/aem.js';

export default async function decorate(block) {
  loadCSS(`${window.hlx.codeBasePath}/blocks/social-links/social-links.css`);

  // Get all direct children divs
  const children = [...block.children];

  // Assign classes to the first three divs (if they exist)
  if (children[0]) children[0].classList.add('div-writer-picture');
  if (children[1]) children[1].classList.add('div-writer-name');
  if (children[2]) children[2].classList.add('div-writer-profile');

  // Extract name and format it as an ID
  let profileId = 'default-user';
  if (children[1] && children[1].textContent.trim()) {
    profileId = children[1].textContent.trim().toLowerCase().replace(/\s+/g, '-');
  }

  createSocialButtons(profileId, block);
}
