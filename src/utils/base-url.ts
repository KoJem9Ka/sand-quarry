import { config } from '@/backbone/config';
import { mapValues } from 'lodash-es';


export function baseUrl(...path: string[]) {
  return path
    .filter(Boolean)
    .join('/')
    .replace(/(^|\s)(\/)/g, (_, pref) => `${pref}/${config.base}/`)
    .replace(/\/{2,}/g, '/');
}

export function baseUrlDeep<T>(obj: T, ...keys: string[]): T {
  if (Array.isArray(obj)) {
    return obj.map(item => baseUrlDeep(item, ...keys)) as T;
  }

  if (typeof obj === 'object') {
    return mapValues(obj, (value, key) => {
      // noinspection SuspiciousTypeOfGuard
      if (typeof value === 'string' && keys.includes(key)) {
        return baseUrl(value);
      }

      return baseUrlDeep(value, ...keys);
    }) as T;
  }

  return obj;
}
