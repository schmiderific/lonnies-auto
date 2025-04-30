export default {
    name: 'hours',
    title: 'Hours of Operation',
    type: 'document',
    fields: [
      {
        name: 'days',
        type: 'array',
        title: 'Days',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'day', type: 'string', title: 'Day (e.g., Monday)' },
              { name: 'open', type: 'string', title: 'Opening Time (e.g., 8:00 AM)' },
              { name: 'close', type: 'string', title: 'Closing Time (e.g., 5:00 PM)' },
            ]
          }
        ]
      }
    ]
  }