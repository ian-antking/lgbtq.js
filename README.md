# LGBTQ.js

LGBTQ+ pride flag gradients and colors for JavaScript projects

## Installation

Install via `npm` with the following command: 

```
npm i -S lgbtq.js
```

## Importing

Import into your project with named imports:

```
import { flags } from 'lgbtq.js'
```

Or

```
import { colors } from 'lgbtq.js'
```

## Usage

Gradients can be accessed through dot notation and injected into the style of an element or component.

### React

```
const prideFlag = {
  background: flags.pride,
  width: '500px',
  height: '300px'
}

return (
  <div style={prideFlag}></div>
)
```

### Flags Included
- prids
- trans
- bisexual
- pan
- polysexual
- asexual
- nonbinary
- genderqueer
- genderfluid

