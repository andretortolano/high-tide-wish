import { HighTideWishPage } from './app.po';

describe('high-tide-wish App', () => {
  let page: HighTideWishPage;

  beforeEach(() => {
    page = new HighTideWishPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
