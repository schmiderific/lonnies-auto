import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'your_project_id', // from sanity.json or your dashboard
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
})