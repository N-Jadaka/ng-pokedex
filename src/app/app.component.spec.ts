import { AppComponent } from "./app.component";

describe('App Component Tests', () => {
  let appComponent: AppComponent;

  beforeEach(() => {
    appComponent = new AppComponent();
  });

  it('Nav open should be set to false', () =>  {
    expect(appComponent.navOpen).toEqual(false);
  })

})
