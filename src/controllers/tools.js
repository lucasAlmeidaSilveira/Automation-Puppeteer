async function click(element, page) {
  await page.waitForSelector(element);
  await page.click(element);
}

async function waitForURL(page, urlPart) {
  const timeout = 60000; // tempo máximo de espera em milissegundos
  const startTime = Date.now();

  while (Date.now() - startTime < timeout) {
    if (page.url().includes(urlPart)) {
      return;
    }
    await page.waitForTimeout(500);
  }

  throw new Error(`Timeout: URL contendo ${urlPart} não foi encontrada`);
}

export { click, waitForURL };
