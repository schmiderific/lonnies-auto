export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
      { name: 'name', type: 'string', title: 'Customer Name' },
      { name: 'review', type: 'text', title: 'Review Text' },
      { name: 'rating', type: 'number', title: 'Rating (1–5)', validation: Rule => Rule.min(1).max(5) },
    ]
  }
  