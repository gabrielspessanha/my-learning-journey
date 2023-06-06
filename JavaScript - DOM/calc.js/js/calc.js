import { calculate } from "./calculate.js"
import { themeSwitch } from "./theme.js"
import {eventCopy, eventKey,eventFocus,charkey} from "./eventos.js"


const input = document.getElementById('input')

document.querySelectorAll('.charKey').forEach(charkey)

document.getElementById('clear').addEventListener('click',eventFocus)

input.addEventListener('keydown',eventKey )

document.getElementById('equal').addEventListener('click', calculate)

document.getElementById('copyToClipboard').addEventListener('click',eventCopy)

document.getElementById('themeSwitcher').addEventListener('click', themeSwitch)
