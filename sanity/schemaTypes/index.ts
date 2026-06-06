import { type SchemaTypeDefinition } from 'sanity'
import {eventType} from "./event"
import {execType} from "./exec"
import {teamType} from "./team"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, execType, teamType],
}
