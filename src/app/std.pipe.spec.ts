import { StdPipe } from './std.pipe';

describe('StdPipe', () => {
  it('create an instance', () => {
    const pipe = new StdPipe();
    expect(pipe).toBeTruthy();
  });
});
