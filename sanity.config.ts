import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'rcs-sanity-playground',

  projectId: 'uhpaa149',
  dataset: 'domu-dev',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})