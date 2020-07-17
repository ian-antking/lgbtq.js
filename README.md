# LGBTQ.js

LGBTQ+ pride flag gradients for React projects

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

### React

```
const prideFlag = {
  background: buildFlag('pride'),
  width: '500px',
  height: '300px'
}

return (
  <div style={prideFlag}></div>
)
```

### Flags Included
- pride
- trans
- bisexual
- pan
- polysexual
- asexual
- nonbinary
- genderqueer
- genderfluid

