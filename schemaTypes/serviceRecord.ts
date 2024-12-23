import {defineType, defineField} from 'sanity'

export const serviceRecord = defineType({
  name: 'serviceRecord',
  type: 'document',
  title: 'Service Record',
  fields: [
    defineField({name: 'serviceDate', type: 'date', title: 'Service Date'}),
    defineField({
      name: 'typeOfService',
      type: 'string',
      title: 'Type of Service',
      options: {
        list: [
          {title: 'Maintenance', value: 'maintenance'},
          {title: 'Repair', value: 'repair'},
          {title: 'Replacement', value: 'replacement'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),
    defineField({name: 'description', type: 'text', title: 'Description'}),
    defineField({name: 'servicedBy', type: 'string', title: 'Serviced By'}),
    defineField({name: 'cost', type: 'number', title: 'Cost', optional: true}),
    defineField({name: 'invoiceOrReceipt', type: 'file', title: 'Invoice or Receipt'}),
    defineField({name: 'notes', type: 'text', title: 'Notes'}),
    defineField({
      name: 'applianceOrFixture',
      type: 'reference',
      title: 'Appliance or Fixture',
      to: [{type: 'appliance'}, {type: 'fixture'}],
    }),
  ],
})
