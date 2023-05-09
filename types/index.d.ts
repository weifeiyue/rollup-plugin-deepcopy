export interface CopyTarget {
  src: string;
  pattern: RegExp | RegExp[];
  dest: string | string[];
}

export interface NormalizedTarget {
  src: string;
  pattern: RegExp[];
  dest: string[];
}

export type Arrayable<T> = T | Array<T>;