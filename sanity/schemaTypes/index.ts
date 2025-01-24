import { type SchemaTypeDefinition } from 'sanity'
import { author } from './author'
import { startup } from './startup'
import { sanitySchema } from './sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup, sanitySchema],
}
