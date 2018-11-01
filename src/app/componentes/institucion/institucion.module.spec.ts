import { InstitucionModule } from './institucion.module';

describe('InstitucionModule', () => {
  let institucionModule: InstitucionModule;

  beforeEach(() => {
    institucionModule = new InstitucionModule();
  });

  it('should create an instance', () => {
    expect(institucionModule).toBeTruthy();
  });
});
