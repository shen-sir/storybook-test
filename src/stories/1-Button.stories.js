import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './Button.vue';

export default {
  title: 'Button',
  component: MyButton,
};

export const Text = () => ({
  components: { MyButton },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: { action: action('clicked') },
});

export const TextWithAction = () => ({
  components: { MyButton },
  template: '<my-button @click="action">Trigger Action</my-button>',
  methods: { action: () => action('This was clicked')() },
});

TextWithAction.storyName = 'With an action';
TextWithAction.parameters = { notes: 'My notes on a button with emojis' };

export const ButtonWithLinkToAnotherStory = () => ({
  components: { MyButton },
  template: '<my-button @click="action">Go to Welcome Story</my-button>',
  methods: { action: linkTo('Welcome') },
});

ButtonWithLinkToAnotherStory.storyName = 'button with link to another story';
