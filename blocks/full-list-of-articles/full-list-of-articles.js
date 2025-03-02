export default async function decorate(block) {
  try {
    const response = await fetch("https://main--wknd--adobe-biegner.aem.live/query-index.json");
    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();
    const magazinePages = data.data.filter(page => page.path.startsWith("/us/en/magazine/"));

    const list = document.createElement("ul");
    magazinePages.forEach(page => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");

      link.href = `https://main--wknd--adobe-biegner.aem.live${page.path}`;
      link.textContent = page.title;

      listItem.appendChild(link);
      list.appendChild(listItem);
    });

    block.innerHTML = "";
    block.appendChild(list);
  } catch (error) {
    console.error("Error loading magazine pages:", error);
  }
}
