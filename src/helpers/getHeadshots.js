import cody from '../../public/assets/headshots/cody.png';
import aaron from '../../public/assets/headshots/aaron.png';
import rachel from '../../public/assets/headshots/rachel.png';
import terry from '../../public/assets/headshots/terry.png';
import matthew from '../../public/assets/headshots/matthew.png';
import michael from '../../public/assets/headshots/michael.png';
import june from '../../public/assets/headshots/june.png';
import ruby from '../../public/assets/headshots/ruby.png';
import margaret from '../../public/assets/headshots/margaret.png';
import tim from '../../public/assets/headshots/tim.png';
import kevin from '../../public/assets/headshots/kevin.png';
import steve from '../../public/assets/headshots/steve.png';
import linda from '../../public/assets/headshots/linda.png';
import carol from '../../public/assets/headshots/carol.png';
import alex from '../../public/assets/headshots/alex.png';

export const getHeadshots = () => ({
    aaron,
    alex,
    carol,
    cody,
    june,
    kevin,
    linda,
    margaret,
    matthew,
    michael,
    rachel,
    ruby,
    steve,
    terry,
    tim,
});

export const getHeadshot = (actor : string) => getHeadshots()[actor];
