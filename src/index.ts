#!/usr/bin/env node

import getArgs from "./cli.js"
import generator from './lib.js'
import './utils.js'

const args = getArgs()

generator(args.name, args.fields)