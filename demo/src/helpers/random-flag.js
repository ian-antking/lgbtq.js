import { buildFlag, flags } from 'lgbtq.js';

const flagNames = Object.keys(flags);

export default () => {
  const flagName = flagNames[Math.floor(Math.random() * flagNames.length)];
  return buildFlag({ flag: flagName, opacity: 0.7 });
};
