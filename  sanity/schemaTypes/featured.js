import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Menu Catagories',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featured Category name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'restaurant',
      type: 'array',
      title: 'Image of the Restaurant',
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    },
  ],
})
