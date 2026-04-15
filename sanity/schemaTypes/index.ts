import { type SchemaTypeDefinition } from 'sanity'
import {eventType} from "./event"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType],
}
