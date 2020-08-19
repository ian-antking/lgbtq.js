## Installation

Install via `npm` with the following command: 

```
npm i -S lgbtq.js
```

## Importing

Import into your project with named imports:

```
import { buildFlag } from 'lgbtq.js'
```

## Usage

### Gradients

Linear gradients are built with the `buildFlag` function. These can then be injected into css or style objects.

`buildFlag` takes a config object with the following properties:

| Property        | Default           | Description  |
| ------------- |:-------------:| -----:|
| flag     | 'inclusivePride' | The name of the flag to render |
| opacity      | 1      |   Opacity of the flag gradient (0 - 1) |
| background | null      | Url of the background image |

### React

```jsx
import React from 'react';
import { buildFlag } from 'lgbtq.js';
const PrideFlag = {
  background: buildFlag({flag: 'inclusivePride', opacity: 1, background: null}),
  width: '500px',
  height: '300px'
};
return (
  <div style={prideFlag}></div>
);
export default PrideFlag;
```

#### With Styled Components

```jsx
import React from 'react';
import styled from 'styled-components';
import { buildFlag } from 'lgbtq.js';
const FlagContainer = styled.div`
  width: 500px;
  height: 300px;
  background: ${props => buildFlag({flag: props.flag, opacity: 1, background: null})};
  margin: 10px;
`
const Flag = ({ flag }) => (
  <FlagContainer flag="inclusivePride" />
)
export default Flag
```

### Colors

Flag colors are exported under their flag name on the `colors` object. They can be accessed like so:

```js
import { colors } from 'lgbtq.js';

console.log(colors.inclusivePride);
console.log(colors.inclusivePride.green);
```

