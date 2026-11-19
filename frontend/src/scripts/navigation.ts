async function loadComponent( selector: string, path: string ): Promise<void> {
  const container = document.querySelector(selector);

  if (!container) return;

  const response = await fetch(path);

  if (!response.ok) {
    throw new Error(`Impossible de charger ${path}`);
  }

  container.innerHTML = await response.text();
}

export async function initLayout(): Promise<void> {
  await Promise.all([
    loadComponent("#header", "/src/components/layout/Header/Header.html"),
    loadComponent("#sidebar", "/src/components/layout/Sidebar/Sidebar.html"),
  ]);
}