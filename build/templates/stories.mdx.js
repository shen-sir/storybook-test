module.exports =  componentname => `
import { Meta, Story, Props, Primary, Preview, Description, Title } from '@storybook/addon-docs/blocks';
import ${componentname} from '../../packages/${componentname}/src/main.vue';

<Meta title='${componentname}' component={${componentname}}/>

<Title>${componentname}</Title>

<Description>Some **markdown** description, or whatever you want.</Description>

<Primary>
  <mo-${componentname}></mo-${componentname}>
</Primary>

## Props

<Props of={${componentname}} />


<Preview>
<Story name='${componentname}-1' height='400px'>{{
  components: { ${componentname} },
  template: '<mo-${componentname} />',
}}</Story>
</Preview>
`