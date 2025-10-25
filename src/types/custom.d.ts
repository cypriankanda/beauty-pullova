// src/types/custom.d.ts

interface CustomStorage {
  // The return type should match what you expect from your custom storage implementation
  get(key: string, parseValue: boolean): Promise<{ value: string } | null>;
  set(key: string, value: string, stringifyValue: boolean): Promise<void>;
}

declare global {
  interface Window {
    storage: CustomStorage;
  }
}