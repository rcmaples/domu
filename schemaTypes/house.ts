import {defineType, defineField} from 'sanity'

export const house = defineType({
  name: 'house',
  type: 'document',
  title: 'House',
  fields: [
    defineField({name: 'name', type: 'string', title: 'Name'}),
    defineField({name: 'address', type: 'string', title: 'Address'}),
    defineField({
      name: 'propertyType',
      type: 'string',
      title: 'Property Type',
      options: {
        list: [
          {title: 'Single-Family', value: 'single-family'},
          {title: 'Condo', value: 'condo'},
          {title: 'Townhome', value: 'townhome'},
          {title: 'Duplex', value: 'duplex'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),
    defineField({name: 'squareFootage', type: 'number', title: 'Square Footage'}),
    defineField({name: 'lotSize', type: 'number', title: 'Lot Size (sq ft)'}),
    defineField({name: 'datePurchased', type: 'date', title: 'Date Purchased'}),
    defineField({
      name: 'photoGallery',
      type: 'array',
      title: 'Photo Gallery',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'historicalRecords',
      type: 'array',
      title: 'Historical Records',
      of: [
        defineField({
          type: 'object',
          fields: [
            defineField({name: 'event', type: 'string', title: 'Event'}),
            defineField({name: 'date', type: 'date', title: 'Date'}),
            defineField({name: 'description', type: 'text', title: 'Description'}),
          ],
        }),
      ],
    }),
    defineField({name: 'notes', type: 'text', title: 'Notes'}),
    defineField({
      name: 'rooms',
      type: 'array',
      title: 'Rooms',
      of: [{type: 'reference', to: [{type: 'room'}]}],
    }),
    defineField({
      name: 'outdoorAreas',
      type: 'array',
      title: 'Outdoor Areas',
      of: [{type: 'reference', to: [{type: 'outdoorArea'}]}],
    }),
  ],
})
