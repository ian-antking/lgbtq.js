# LGBTQ.js

LGBTQ+ pride flag gradients for React projects

[View Examples Here: https://ian-antking.github.io/lgbtq.js](https://ian-antking.github.io/lgbtq.js)

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

### buildFlag([options]) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - - CSS gradient string.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>object</code> | Configuration for the flag to render. |
| [options.flag] | <code>string</code> | The name of the flag to render. |
| [options.background] | <code>string</code> | URL of image to render underneath flag. |
| [options.opacity] | <code>number</code> | Opacity of flag as float between 0 and 1. |

### React

```jsx
import React from 'react';
import { buildFlag } from 'lgbtq.js';
const PrideFlag = {
  background: buildFlag({flag, opacity: 1, background: null}),
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

### Flags Included
  - agender
  - aromantic
  - asexual
  - bear
  - blackTrans
  - bisexual
  - genderfluid
  - genderqueer
  - gilbertBakerPride
  - inclusivePride
  - leather
  - lesbian
  - lipstickLesbian
  - nonbinary
  - pan
  - polysexual
  - pride
  - pride1978
  - trans

