import { Locator, Page, expect } from '@playwright/test';

export class Header {
  readonly page: Page;
  readonly redWine: Locator;

  constructor(page: Page) {
    this.page = page;
    this.redWine = page.getByRole('link', { name: 'Червоні' });

  }

  async clickRedWine() {
    await expect(this.redWine).toBeVisible();
    await this.redWine.click();
  }

  async verifyRedWinePageOpened() {
    const currentUrl = decodeURIComponent(this.page.url());
    expect(currentUrl).toContain('Червоні+вина');
  }
}