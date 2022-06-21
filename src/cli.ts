#!/usr/bin/env node

import * as prog from 'caporal';

import slugify from './index';

prog
  .version('1.0.0')
  .description('A program to generate slugs from strings')
  .argument('<string>', 'string to generate the slug from')
  .option('-o <order>', 'use the order to prepend it to slug and ensure order')
  .action((args, options, logger) => {
    logger.info(args);
    logger.info(options);
    logger.info(slugify(args.string, options.o));
  });

prog.parse(process.argv);
