import { JsonObject } from '../types';
import { KINDS, BaseVersion, ReferenceFormatTypes } from './types';

export interface PartialReference {
  link: string;
  content: string; // formatted content
  ris: Record<string, any> | null; // research information system
}

// the versioned block
export interface Reference extends BaseVersion, PartialReference {
  kind: typeof KINDS.Reference;
}

export const defaultFormat = ReferenceFormatTypes.txt;

export function fromDTO(json: JsonObject): PartialReference {
  return {
    link: json.link ?? '',
    content: json.content ?? '',
    ris: json.ris ?? null
  };
}
