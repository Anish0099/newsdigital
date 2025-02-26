import { Client, Storage } from "appwrite"

export const appwriteConfig = {
  projectId: '67bd2c860008e83ff2b7',
  storageId: '67bd2e4d00216f106ca7',
  url: 'https://cloud.appwrite.io/v1',
}

export const client = new Client()

client.setEndpoint(appwriteConfig.url)
client.setProject(appwriteConfig.projectId)

export const storage = new Storage(client)
