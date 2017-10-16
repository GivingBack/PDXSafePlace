import { SafeplacePage } from './app.po';

describe('safeplace App', () => {
  let page: SafeplacePage;

  beforeEach(() => {
    page = new SafeplacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
