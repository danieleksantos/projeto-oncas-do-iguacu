import { type SchemaTypeDefinition } from 'sanity';

import { noticiaType } from './noticiaType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [noticiaType],
};
