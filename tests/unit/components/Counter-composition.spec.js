import { mount } from '@vue/test-utils';
import Counter from '@/components/Counter-composition.vue';

describe('Composition API Counter tests', () => {
  it('Render counter with zero', () => {
    const wrapper = mount(<Counter />);

    expect(wrapper.find('h2').text()).toEqual('Counter: 0');
  });

  it('Increase the counter', async () => {
    const wrapper = mount(<Counter />);
    await wrapper.find('button#add').trigger('click');
    await wrapper.find('button#add').trigger('click');
    await wrapper.find('button#add').trigger('click');

    expect(wrapper.find('h2').text()).toEqual('Counter: 3');
  });

  it('Decrease the counter', async () => {
    const wrapper = mount(<Counter />);
    await wrapper.find('button#dis').trigger('click');

    expect(wrapper.find('h2').text()).toEqual('Counter: 2');
  });

  it('Increase and decrease the counter', async () => {
    const wrapper = mount(<Counter />);
    await wrapper.find('button#add').trigger('click');
    await wrapper.find('button#add').trigger('click');
    await wrapper.find('button#add').trigger('click');
    expect(wrapper.find('h2').text()).toEqual('Counter: 5');

    await wrapper.find('button#dis').trigger('click');
    expect(wrapper.find('h2').text()).toEqual('Counter: 4');
  });
});