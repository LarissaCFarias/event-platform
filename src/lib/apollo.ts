import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri : "https://api-sa-east-1.graphcms.com/v2/cl4otne0l10y901xsf0q5gi7u/master", 
  headers:{
  'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
  },
  cache: new InMemoryCache()
})