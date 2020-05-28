import readline from 'readline';
import { Config } from '@w3f/config';
import { createLogger } from '@w3f/logger';
import { InputConfig } from '../types';
import { Engine } from '../engine';

export async function startAction(cmd): Promise<void> {
    const cfg = new Config<InputConfig>().parse(cmd.config);
    const logger = createLogger(cfg.logLevel);
    const engine = new Engine(cfg.items, logger);

    try {
        await engine.start();
    } catch (e) {
        logger.error(e);
        process.exit(1);
    }
}
