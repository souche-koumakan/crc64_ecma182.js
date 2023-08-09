declare module 'crc64-ecma182.js' {
  export type Crc64FileCallback = (error?: Error | undefined, result?: string) => any;
  export function crc64(buff: Buffer | string, prev?: string): string;
  export function crc64File(filename: string, callback: Crc64FileCallback): void;
}
