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
// import aurora from '../../public/assets/headshots/aurora.png';
import type { StaticImageData } from 'next/image';

export interface HeadshotData {
  id: string,
  src: StaticImageData,
}

export const HEADSHOTS: Array<HeadshotData> = [
  {
    id: 'aaron',
    src: aaron,
  },
  {
    id: 'alex',
    src: alex,
  },
  {
    id: 'carol',
    src: carol,
  },
  {
    id: 'cody',
    src: cody,
  },
  {
    id: 'june',
    src: june,
  },
  {
    id: 'kevin',
    src: kevin,
  },
  {
    id: 'linda',
    src: linda,
  },
  {
    id: 'margaret',
    src: margaret,
  },
  {
    id: 'matthew',
    src: matthew,
  },
  {
    id: 'michael',
    src: michael,
  },
  {
    id: 'rachel',
    src: rachel,
  },
  {
    id: 'ruby',
    src: ruby,
  },
  {
    id: 'steve',
    src: steve,
  },
  {
    id: 'terry',
    src: terry,
  },
  {
    id: 'tim',
    src: tim,
  },
  // {
  //   id: 'aurora',
  //   src: aurora,
  // },
];
