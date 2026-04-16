import { expect, Locator, Page } from '@playwright/test';

export class Cart {
  readonly page: Page;
  readonly cartIcon: Locator;
  readonly cartCounter: Locator;
  readonly cartModal: Locator;
  readonly productNameInCart: Locator;

  constructor(page: Page) {
    this.page = page;

    this.cartIcon = page.locator('.t706__carticon-wrapper');
    this.cartCounter = page.locator('.js-carticon-counter');
    this.cartModal = page.locator('.t706__cartwin');
    this.productNameInCart = this.cartModal.locator('[href*="/tproduct/"]').first();
  }

  async verifyCounter(value: string) {
    await expect(this.cartCounter).toBeVisible();
    await expect(this.cartCounter).toHaveText(value);
  }

  async open() {
    await expect(this.cartIcon).toBeVisible();
    await this.cartIcon.click();
  }

  async verifyOpened() {
    await expect(this.cartModal).toBeVisible();
  }

  async verifyProductName(expectedName: string) {
    await expect(this.productNameInCart).toContainText(expectedName);
  }
}