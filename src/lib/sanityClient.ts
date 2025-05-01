import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'ohetzy12', 
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: false,
})