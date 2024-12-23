import {defineType, defineField} from 'sanity'

export const appliance = defineType({
  name: 'appliance',
  type: 'document',
  title: 'Appliance',
  fields: [
    defineField({name: 'name', type: 'string', title: 'Name'}),
    defineField({name: 'brand', type: 'string', title: 'Brand'}),
    defineField({name: 'modelNumber', type: 'string', title: 'Model Number'}),
    defineField({name: 'serialNumber', type: 'string', title: 'Serial Number'}),
    defineField({name: 'dateOfPurchase', type: 'date', title: 'Date of Purchase'}),
    defineField({name: 'placeOfPurchase', type: 'string', title: 'Place of Purchase'}),
    defineField({name: 'warrantyExpiration', type: 'date', title: 'Warranty Expiration'}),
    defineField({
      name: 'energyStarRating',
      type: 'string',
      title: 'Energy Star Rating',
    }),
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
