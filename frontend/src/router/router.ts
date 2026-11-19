const routes: Record<string, string> = {
  "/": "/src/pages/Home/Home.html",
  "/projects": "/src/pages/Projects/Projects.html",
};

// Get the current route from the URL hash
function getCurrentPath(): string {
  return window.location.hash.slice(1) || "/";
}

// Load the HTML file associated with the current route
async function loadPage(): Promise<void> {
  const page = document.querySelector<HTMLElement>("#page");

  if (!page) {
    throw new Error("Page container #page not found");
  }

  const path = getCurrentPath();
  const route = routes[path];

  if (!route) {
    page.textContent = "404 - Page not found";
    return;
  }

  try {
    const response = await fetch(route);

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const html = await response.text();

    page.innerHTML = html;
  } catch (error) {
    console.error(error);
    page.textContent = "Unable to load the page.";
  }
}

// Update the URL hash without reloading the document
export function navigate(path: string): void {
  if (getCurrentPath() === path) {
    return;
  }

  window.location.hash = path;
}

// Initialize navigation and browser history handling
export function initRouter(): void {
  document.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof Element)) return;

    const link = target.closest<HTMLAnchorElement>("a[data-link]");

    if (!link) return;

    event.preventDefault();

    const path = link.getAttribute("href");

    if (path) {
      navigate(path.replace(/^#/, ""));
    }
  });

  // Handle browser back and forward navigation
  window.addEventListener("hashchange", () => {
    void loadPage();
  });

  // Load the initial page
  void loadPage();
}