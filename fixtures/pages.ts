import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { Header } from '../components/Header';
import { WineCatalogPage } from '../pages/WineCatalogPage';
import { ProductPage } from '../pages/ProductPage';
import { Cart } from '../components/Cart';

type Pages = {
  homePage: HomePage;
  header: Header;
  wineCatalogPage: WineCatalogPage;
  productPage: ProductPage;
  cart: Cart;
};

export const test = base.extend<Pages>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  header: async ({ page }, use) => {
    await use(new Header(page));
  },

  wineCatalogPage: async ({ page }, use) => {
    await use(new WineCatalogPage(page));
  },

  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },

  cart: async ({ page }, use) => {
    await use(new Cart(page));
  },
});