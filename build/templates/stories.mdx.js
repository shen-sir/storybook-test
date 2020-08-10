module.exports =  (ComponentName, componentname) => `
import { Meta, Story, Props, Primary, Preview, Description, Title } from '@storybook/addon-docs/blocks';
import Mx${ComponentName} from '../../packages/${componentname}/src/main.vue';

<Meta title='${ComponentName}' component={Mx${ComponentName}}/>

<Title>${componentname}</Title>

<Description>Some **markdown** description, or whatever you want.</Description>

<Primary>
  <mx-${componentname}></mx-${componentname}>
</Primary>

## Props

<Props of={Mx${ComponentName}} />


<Preview>
<Story name='${componentname}-1' height='400px'>{{
  components: { Mx${ComponentName} },
  template: '<mx-${componentname} />',
}}</Story>
</Preview>
`