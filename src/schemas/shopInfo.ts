export default {
    name: 'shopInfo',
    title: 'Shop Info',
    type: 'document',
    fields: [
      { name: 'name', type: 'string', title: 'Shop Name' },
      { name: 'address', type: 'string', title: 'Address' },
      { name: 'phone', type: 'string', title: 'Phone' },
      { name: 'email', type: 'string', title: 'Email' },
      { name: 'googleMapsUrl', type: 'url', title: 'Google Maps Link' },
    ]
  }