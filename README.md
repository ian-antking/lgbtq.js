# LGBTQ.js

LGBTQ+ pride flag gradients for React projects

[View Examples Here](ian-antking.github.io/lgbtq.js)

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

Gradients can be accessed through dot notation and injected into the style of an element or component.

`buildFlag` takes a config object with the following properties:

| Property        | Default           | Description  |
| ------------- |:-------------:| -----:|
| flag     | 'inclusivePride' | The name of the flag to render |
| opacity      | 1      |   Opacity of the flag gradient |
| background | null      | Url of the background image |

### React

```jsx
import React from 'react';
import { buildFlag } from 'lgbtq.js';

const PrideFlag = {
  background: buildFlag({flag: 'pride'}),
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
  background: ${props => buildFlag({ flag: props.flag })};
  margin: 10px;
`

const Flag = ({ flag }) => (
  <FlagContainer flag={flag} />
)

export default Flag
```

### Flags Included
  - inclusivePride
  - gilbertBakerPride
  - trans
  - bisexual
  - pan
  - polysexual
  - asexual
  - nonbinary
  - genderqueer
  - genderfluid
  - agender
   -aromantic

