import { Ng2FundamentalzPage } from './app.po';

describe('ng2-fundamentalz App', () => {
  let page: Ng2FundamentalzPage;

  beforeEach(() => {
    page = new Ng2FundamentalzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
