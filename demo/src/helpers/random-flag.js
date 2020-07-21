import { buildFlag, flags } from 'lgbtq.js';

const flagNames = Object.keys(flags);

export default () => {
  const flag = flagNames[Math.floor(Math.random() * flagNames.length)]
  return buildFlag(flag);
}