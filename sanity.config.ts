import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {
  dashboardTool,
  sanityTutorialsWidget,
  projectInfoWidget,
  projectUsersWidget,
} from '@sanity/dashboard'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'rcs-sanity-playground',

  projectId: 'uhpaa149',
  dataset: 'domu-dev',

  plugins: [
    structureTool(),
    visionTool(),
    dashboardTool({widgets: [sanityTutorialsWidget(), projectInfoWidget(), projectUsersWidget()]}),
  ],

  schema: {
    types: schemaTypes,
  },
})
