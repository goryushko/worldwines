import { Page, Locator, expect } from '@playwright/test';

export class HomePage {

  readonly page: Page;
  readonly modal: Locator;
  readonly confirmButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.modal = page.locator('div').filter({ hasText: 'Bам виповнилось 18' }).nth(5);
    this.confirmButton = page.getByText('Так, продовжити');
  }

  async open() {
    await this.page.goto('/');
  }

  async ageVerificationModalIsVisible() {
    await expect(this.modal).toBeVisible();
  }

  async ageVerificationModalIsNotVisible() {
    await expect(this.modal).not.toBeVisible();
  }

  async clickConfirmAgeButton() {
    await this.confirmButton.isVisible();
    await this.confirmButton.click();
  }
}