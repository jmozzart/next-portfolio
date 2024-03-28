import { createClient } from '@sanity/client'

export default createClient({
    projectId: 'xle5b8xj', 
    dataset: 'checkdataset', 
    useCdn: false,
    apiVersion: '2022-03-07',
})