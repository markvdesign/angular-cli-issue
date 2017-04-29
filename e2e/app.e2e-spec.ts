import { VarRouterPathNoWorkyPage } from './app.po';

describe('var-router-path-no-worky App', () => {
  let page: VarRouterPathNoWorkyPage;

  beforeEach(() => {
    page = new VarRouterPathNoWorkyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
