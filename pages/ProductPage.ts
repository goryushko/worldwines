import { expect, Locator, Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly productContainer: Locator;
  readonly productTitle: Locator;
  readonly addToCartButton: Locator;
  readonly addToCartToast: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productContainer = page.locator('.js-store-product');
    this.productTitle = this.productContainer.locator('.js-store-prod-name');
    this.addToCartButton = this.productContainer.getByRole('link', {
      name: 'Додати у кошик',
    });
    this.addToCartToast = page.locator('.t706__bubble-container');
  }

  async verifyOpened() {
    await expect(this.page).toHaveURL(/\/tproduct\//);
    await expect(this.productTitle).toBeVisible();
    await expect(this.addToCartButton).toBeVisible();
  }

  async getProductName(): Promise<string> {
    await expect(this.productTitle).toBeVisible();
    return (await this.productTitle.textContent())?.trim() || '';
  }

  async clickAddToCart() {
    await expect(this.addToCartButton).toBeVisible();
    await this.addToCartButton.click();
  }

  async verifyAddToCartToast(productName: string) {
    await expect(this.addToCartToast).toBeVisible();
    await expect(this.addToCartToast).toContainText(productName);
    await expect(this.addToCartToast).toContainText('додано до кошика');
  }

  async waitForAddToCartToastToDisappear() {
    await expect(this.addToCartToast).toBeHidden();
  }
}