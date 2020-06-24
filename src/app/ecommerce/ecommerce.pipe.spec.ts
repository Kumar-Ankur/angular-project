import { SortByPipe } from './ecommerce.pipe';

describe('SortByPipe', () => {
  const pipe = new SortByPipe();

  it('set default data for empty order type', () => {
    const data = [
      { id: 3, name: 'test3' },
      { id: 1, name: 'test1' },
      { id: 2, name: 'test2' },
    ];
    expect(pipe.transform(data, '', '')).toEqual(data);
  });
  it('sort data by ascending order', () => {
    const data = [
      { id: 3, name: 'test3' },
      { id: 1, name: 'test1' },
      { id: 2, name: 'test2' },
    ];
    expect(pipe.transform(data, 'asc', 'id')).toEqual([
      { id: 1, name: 'test1' },
      { id: 2, name: 'test2' },
      { id: 3, name: 'test3' },
    ]);
  });
  it('sort data by descending order', () => {
    const data = [
      { id: 3, name: 'test3' },
      { id: 1, name: 'test1' },
      { id: 2, name: 'test2' },
    ];
    expect(pipe.transform(data, 'desc', 'id')).toEqual([
      { id: 3, name: 'test3' },
      { id: 2, name: 'test2' },
      { id: 1, name: 'test1' },
    ]);
  });
});
