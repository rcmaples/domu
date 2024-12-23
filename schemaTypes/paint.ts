import {defineType, defineField} from 'sanity'

export const paint = defineType({
  name: 'paint',
  type: 'document',
  title: 'Paint',
  fields: [
    defineField({name: 'colorName', type: 'string', title: 'Color Name'}),
    defineField({name: 'brand', type: 'string', title: 'Brand'}),
    defineField({
      name: 'finish',
      type: 'string',
      title: 'Finish',
      options: {
        list: [
          {title: 'Flat', value: 'flat'},
          {title: 'Eggshell', value: 'eggshell'},
          {title: 'Satin', value: 'satin'},
          {title: 'Gloss', value: 'gloss'},
        ],
      },
    }),
    defineField({name: 'colorCode', type: 'string', title: 'Color Code'}),
    defineField({name: 'dateApplied', type: 'date', title: 'Date Applied'}),
    defineField({name: 'notes', type: 'text', title: 'Notes'}),
  ],
})
