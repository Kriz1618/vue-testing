import { mount } from '@vue/test-utils'

import App from '@/App.vue';

// test('Test default App component', () => {
//   const wrapper = mount(<App />);
//   expect(wrapper.html()).toBe('<h2>Counter: 2</h2>');
// });

// test('Pasing counter prop as 4', () => {
//   const wrapper = mount(<App />, {
//     props: { count: 4 }
//   });
//   expect(wrapper.html()).toBe('<h2>Counter: 4</h2>');
// });

describe('App component tests', () => {

  it('Test default App component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.html()).toContain('<button id="dis">-1</button>');
  });

  it('Pasing counter prop as 1', () => {
    const wrapper = mount(<App />, {
      // props: { count: 1 }
    });
    expect(wrapper.html()).toContain('<h2>Counter: 0</h2>');
  });

  it('Contain the word counter', () => {
    const wrapper = mount(<App />, {
      // props: { count: 1 }
    });
    expect(wrapper.html()).toContain('Counter');
  });
})

