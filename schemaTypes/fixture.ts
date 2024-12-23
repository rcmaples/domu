import {defineType, defineField} from 'sanity'

export const fixture = defineType({
  name: 'fixture',
  type: 'document',
  title: 'Fixture',
  fields: [
    defineField({name: 'name', type: 'string', title: 'Name'}),
    defineField({name: 'brand', type: 'string', title: 'Brand'}),
    defineField({
      name: 'type',
      type: 'string',
      title: 'Type',
      options: {
        list: [
          {title: 'Light Fixture', value: 'light-fixture'},
          {title: 'Plumbing Fixture', value: 'plumbing-fixture'},
          {title: 'Electrical Fixture', value: 'electrical-fixture'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),
    defineField({name: 'installationDate', type: 'date', title: 'Installation Date'}),
    defineField({name: 'warrantyExpiration', type: 'date', title: 'Warranty Expiration'}),
    defineField({name: 'notes', type: 'text', title: 'Notes'}),
    defineField({
      name: 'serviceRecords',
      type: 'array',
      title: 'Service Records',
      of: [{type: 'reference', to: [{type: 'serviceRecord'}]}],
    }),
    defineField({
      name: 'room',
      type: 'reference',
      title: 'Room',
      to: [{type: 'room'}],
    }),
  ],
})
