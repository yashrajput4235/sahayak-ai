import logger from '../utils/logger.js';

export function requestLogger(req, res, next) {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    const meta = {
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      duration: `${duration}ms`,
      ip: req.ip || req.connection?.remoteAddress,
    };

    if (res.statusCode >= 500) {
      logger.error('Request completed', meta);
    } else if (res.statusCode >= 400) {
      logger.warn('Request completed', meta);
    } else {
      logger.info('Request completed', meta);
    }
  });

  next();
}
