import {defineType, defineField} from 'sanity'

export const room = defineType({
  name: 'room',
  type: 'document',
  title: 'Room',
  fields: [
    defineField({name: 'name', type: 'string', title: 'Name'}),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({name: 'dimensions', type: 'string', title: 'Dimensions'}),
    defineField({
      name: 'adjacentRooms',
      type: 'array',
      title: 'Adjacent Rooms',
      of: [{type: 'reference', to: [{type: 'room'}]}],
    }),
    defineField({
      name: 'ceilingDetails',
      type: 'object',
      title: 'Ceiling Details',
      fields: [
        defineField({name: 'paint', type: 'reference', to: [{type: 'paint'}], title: 'Paint'}),
        defineField({name: 'features', type: 'text', title: 'Features'}),
      ],
    }),
    defineField({
      name: 'wallFeatures',
      type: 'array',
      title: 'Wall Features',
      of: [
        defineField({
          type: 'object',
          fields: [
            defineField({name: 'description', type: 'string', title: 'Description'}),
            defineField({name: 'location', type: 'string', title: 'Location'}),
            defineField({name: 'notes', type: 'text', title: 'Notes'}),
          ],
        }),
      ],
    }),
    defineField({name: 'notes', type: 'text', title: 'Notes'}),
    defineField({
      name: 'paint',
      type: 'reference',
      title: 'Paint',
      to: [{type: 'paint'}],
    }),
    defineField({
      name: 'fixtures',
      type: 'array',
      title: 'Fixtures',
      of: [{type: 'reference', to: [{type: 'fixture'}]}],
    }),
    defineField({
      name: 'appliances',
      type: 'array',
      title: 'Appliances',
      of: [{type: 'reference', to: [{type: 'appliance'}]}],
    }),
    defineField({
      name: 'decor',
      type: 'array',
      title: 'Decor',
      of: [{type: 'reference', to: [{type: 'decor'}]}],
    }),
  ],
})
