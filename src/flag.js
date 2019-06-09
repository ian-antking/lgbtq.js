const Color = require('./color');

(function exportFlags() {
  const Flag = {
    pride: `linear-gradient(
      180deg,
      ${Color.pride.black} 0%,
      ${Color.pride.black} 12.5%,
      ${Color.pride.brown} 12.5%,
      ${Color.pride.brown} 25%,
      ${Color.pride.red} 25%,
      ${Color.pride.red} 37.5%,
      ${Color.pride.orange}  37.5%,
      ${Color.pride.orange}  50%,
      ${Color.pride.yellow}  50%,
      ${Color.pride.yellow}  62.5%,
      ${Color.pride.green}  62.5%,
      ${Color.pride.green}  75%,
      ${Color.pride.blue}  75%,
      ${Color.pride.blue}  87.5%,
      ${Color.pride.purple}  87.5%,
      ${Color.pride.purple}  100%
      )`,
    trans: `linear-gradient(
      180deg,
      ${Color.trans.blue} 0%,
      ${Color.trans.blue} 20%,
      ${Color.trans.pink} 20%,
      ${Color.trans.pink} 40%,
      ${Color.trans.white} 40%,
      ${Color.trans.white} 60%,
      ${Color.trans.pink} 60%,
      ${Color.trans.pink} 80%,
      ${Color.trans.blue} 80%,
      ${Color.trans.blue} 100%
      )`,
    bisexual: `linear-gradient(
      180deg,
      ${Color.bisexual.pink} 0%,
      ${Color.bisexual.pink} 40%,
      ${Color.bisexual.purple} 40%,
      ${Color.bisexual.purple} 60%,
      ${Color.bisexual.blue} 60%,
      ${Color.bisexual.blue} 1000%
    )`,
    pan: `linear-gradient(
      180deg,
      ${Color.pan.pink} 0%,
      ${Color.pan.pink} ${100 / 3}%,
      ${Color.pan.yellow} ${100 / 3}%,
      ${Color.pan.yellow} ${(100 / 3) * 2}%,
      ${Color.pan.blue} ${(100 / 3) * 2}%,
      ${Color.pan.blue} ${(100 / 3) * 3}%
    )`,
    polysexual: `linear-gradient(
      180deg,
      ${Color.polysexual.pink} 0%,
      ${Color.polysexual.pink} ${100 / 3}%,
      ${Color.polysexual.green} ${100 / 3}%,
      ${Color.polysexual.green} ${(100 / 3) * 2}%,
      ${Color.polysexual.blue} ${(100 / 3) * 2}%,
      ${Color.polysexual.blue} ${(100 / 3) * 3}%
    )`,
    asexual: `linear-gradient(
      180deg,
      ${Color.asexual.black} 0%,
      ${Color.asexual.black} 25%,
      ${Color.asexual.grey} 25%,
      ${Color.asexual.grey} 50%,
      ${Color.asexual.white} 50%,
      ${Color.asexual.white} 75%,
      ${Color.asexual.purple} 75%,
      ${Color.asexual.purple} 100%
      )`,
    nonbinary: `linear-gradient(
        180deg,
        ${Color.nonbinary.black} 0%,
        ${Color.nonbinary.black} 20%,
        ${Color.nonbinary.yellow} 20%,
        ${Color.nonbinary.yellow} 40%,
        ${Color.nonbinary.white} 40%,
        ${Color.nonbinary.white} 60%,
        ${Color.nonbinary.purple} 60%,
        ${Color.nonbinary.purple} 80%,
        ${Color.nonbinary.black} 80%,
        ${Color.nonbinary.black} 100%
        )`,
    genderqueer: `linear-gradient(
      180deg,
      ${Color.genderqueer.purple} 0%,
      ${Color.genderqueer.purple} ${100 / 3}%,
      ${Color.genderqueer.white} ${100 / 3}%,
      ${Color.genderqueer.white} ${(100 / 3) * 2}%,
      ${Color.genderqueer.green} ${(100 / 3) * 2}%,
      ${Color.genderqueer.green} ${(100 / 3) * 3}%
    )`,
    genderfluid: `linear-gradient(
      180deg,
      ${Color.genderfluid.pink} 0%,
      ${Color.genderfluid.pink} 20%,
      ${Color.genderfluid.white} 20%,
      ${Color.genderfluid.white} 40%,
      ${Color.genderfluid.purple} 40%,
      ${Color.genderfluid.purple} 60%,
      ${Color.genderfluid.black} 60%,
      ${Color.genderfluid.black} 80%,
      ${Color.genderfluid.blue} 80%,
      ${Color.genderfluid.blue} 100%
      )`,
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Flag;
  } else {
    window.Flag = Flag;
  }
}());
