import { mount } from '@vue/test-utils';
import Counter from '@/components/Counter.vue';

describe('Counter tests', () => {
  it('Validate data msg', () => {
    const wrapper = mount(<Counter />);

    expect(wrapper.find('h2').text()).toEqual('Counter: 0');
    expect(wrapper.find('h2').text()).toBe('Counter: 0');
  });

  it('Validate buttons content', () => {
    const wrapper = mount(<Counter />);

    expect(wrapper.find('button#add').text()).toBe('+1');
    expect(wrapper.find('button.dis').text()).toBe('-1');
  });

  it('Increase the counter', async () => {
    const wrapper = mount(<Counter />);
    await wrapper.find('button#add').trigger('click');
    await wrapper.find('button#add').trigger('click');

    expect(wrapper.find('h2').text()).toEqual('Counter: 2');
  });

  it('Decrease the counter', async () => {
    const wrapper = mount(<Counter />);
    await wrapper.find('button.dis').trigger('click');

    expect(wrapper.find('h2').text()).toEqual('Counter: -1');
  });
})