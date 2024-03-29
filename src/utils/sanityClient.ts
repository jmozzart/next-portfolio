//import { createClient } from '@sanity/client'
import {createClient} from 'next-sanity'

export default createClient({
    projectId: 'xle5b8xj', 
    dataset: 'checkdataset', 
    useCdn: false,
    //apiVersion: '2022-03-07',
    apiVersion: "2024-01-01",
})