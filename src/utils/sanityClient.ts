import { createClient } from '@sanity/client'

export default createClient({
    projectId: 'xle5b8xj', 
    dataset: 'checkdataset', 
    useCdn: true,
    apiVersion: '2021-08-31',
})