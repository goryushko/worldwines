import { test } from '../fixtures/pages';

test('verify that user can add product to cart', async ({
  page,
  homePage,
  header,
  wineCatalogPage,
  productPage,
  cart,
}) => {
  await homePage.open();
  await page.waitForLoadState('domcontentloaded');
  await homePage.ageVerificationModalIsVisible();
  await homePage.clickConfirmAgeButton();
  await homePage.ageVerificationModalIsNotVisible();

  await header.clickRedWine();
  await wineCatalogPage.verifyOpened();

  await wineCatalogPage.clickFirstProductCard();
  await productPage.verifyOpened();

  const wineName = await productPage.getProductName();

  await productPage.clickAddToCart();
  await productPage.verifyAddToCartToast(wineName);
  await productPage.waitForAddToCartToastToDisappear();

  await cart.verifyCounter('1');
  await cart.open();
  await cart.verifyOpened();
  await cart.verifyProductName(wineName);
});