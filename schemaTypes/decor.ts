import {defineType, defineField} from 'sanity'

export const decor = defineType({
  name: 'decor',
  type: 'document',
  title: 'Decor',
  fields: [
    defineField({name: 'name', type: 'string', title: 'Name'}),
    defineField({
      name: 'type',
      type: 'string',
      title: 'Type',
      options: {
        list: [
          {title: 'Artwork', value: 'artwork'},
          {title: 'Rug', value: 'rug'},
          {title: 'Furniture', value: 'furniture'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),
    defineField({name: 'brand', type: 'string', title: 'Brand', optional: true}),
    defineField({name: 'purchaseDate', type: 'date', title: 'Purchase Date'}),
    defineField({name: 'placeOfPurchase', type: 'string', title: 'Place of Purchase'}),
    defineField({name: 'notes', type: 'text', title: 'Notes'}),
    defineField({
      name: 'roomOrOutdoorArea',
      type: 'reference',
      title: 'Room or Outdoor Area',
      to: [{type: 'room'}, {type: 'outdoorArea'}],
    }),
  ],
})
