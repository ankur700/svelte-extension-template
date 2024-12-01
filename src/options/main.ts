import '@styles/global.css';
import { mount } from 'svelte';
import Options from './options.svelte';

const options = mount(Options, {
  target: document.getElementById('root')!,
});

export default options;
