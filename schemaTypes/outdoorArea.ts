import {defineType, defineField} from 'sanity'

export const outdoorArea = defineType({
  name: 'outdoorArea',
  type: 'document',
  title: 'Outdoor Area',
  fields: [
    defineField({name: 'name', type: 'string', title: 'Name'}),
    defineField({
      name: 'type',
      type: 'string',
      title: 'Type',
      options: {
        list: [
          {title: 'Landscaping', value: 'landscaping'},
          {title: 'Patio', value: 'patio'},
          {title: 'Pool', value: 'pool'},
          {title: 'Driveway', value: 'driveway'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),
    defineField({name: 'dimensions', type: 'string', title: 'Dimensions'}),
    defineField({name: 'notes', type: 'text', title: 'Notes'}),
    defineField({
      name: 'serviceRecords',
      type: 'array',
      title: 'Service Records',
      of: [{type: 'reference', to: [{type: 'serviceRecord'}]}],
    }),
    defineField({
      name: 'decor',
      type: 'array',
      title: 'Decor',
      of: [{type: 'reference', to: [{type: 'decor'}]}],
    }),
  ],
})
