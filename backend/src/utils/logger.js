import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logsDir = path.join(__dirname, '../../../logs');

if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });

const logFile = path.join(logsDir, 'app.log');
const errorFile = path.join(logsDir, 'error.log');

const LEVELS = { info: 'INFO', warn: 'WARN', error: 'ERROR' };

function formatMessage(level, message, meta) {
  const ts = new Date().toISOString();
  const metaStr = meta ? ' ' + JSON.stringify(meta) : '';
  return `[${ts}] [${level}] ${message}${metaStr}`;
}

function writeToFile(file, line) {
  fs.appendFile(file, line + '\n', (err) => {
    if (err) console.error('Logger write error:', err.message);
  });
}

const logger = {
  info(message, meta) {
    const line = formatMessage(LEVELS.info, message, meta);
    console.log(line);
    writeToFile(logFile, line);
  },
  warn(message, meta) {
    const line = formatMessage(LEVELS.warn, message, meta);
    console.warn(line);
    writeToFile(logFile, line);
  },
  error(message, meta) {
    const line = formatMessage(LEVELS.error, message, meta);
    console.error(line);
    writeToFile(logFile, line);
    writeToFile(errorFile, line);
  },
};

export default logger;
