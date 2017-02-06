import { AnRPGPage } from './app.po';

describe('an-rpg App', function() {
  let page: AnRPGPage;

  beforeEach(() => {
    page = new AnRPGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
