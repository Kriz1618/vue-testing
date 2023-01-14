import { counterStore } from "@/store/counterStore";

describe('Store tests', () => {
  afterAll(() => {
    counterStore.handleReset();
  });

  afterEach(() => {
    counterStore.handleReset();
  });

  it('Increase count to 1', () => {
    counterStore.handleAdd();

    expect(counterStore.count).toEqual(1);
  });

  it('Decrease count to -1', () => {
    counterStore.handleDis();

    expect(counterStore.count).toEqual(-1);
  });
});