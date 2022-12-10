import './style.css'

import './ptrootui.css'

import { useMenu } from './menu'

import { useScrollHandler } from './scrollhandler';

useMenu('#toggler', '#menu', 'c-opened');

useScrollHandler('#header');