#!/usr/bin/env node

import { program } from "@caporal/core";

import { slugify } from './index';

program
  .description('A program to generate slugs from strings')
  .argument('<string>', 'string to generate the slug from', { validator: program.STRING })
  .option('-o <order>', 'use the order to prepend it to slug and ensure order', { validator: program.NUMBER })
  .action(({ args, options, logger }) => {
    logger.info(slugify(args.string as string, parseInt(options.o as string)));
  });

program.run();
