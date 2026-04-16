import { expect, Locator, Page } from '@playwright/test';

export class WineCatalogPage {
  readonly page: Page;
  readonly productCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productCards = page.locator('.js-product > a');

  }

  async verifyOpened() {
    await expect
      .poll(() => decodeURIComponent(this.page.url()))
      .toContain('Червоні+вина');

    await expect(this.productCards.first()).toBeVisible();
  }

  async clickFirstProductCard() {
    await expect(this.productCards.first()).toBeVisible();
    await this.productCards.first().click();
  }
}