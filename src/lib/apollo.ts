import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri : 'https://api-sa-east-1.graphcms.com/v2/cl4otne0l10y901xsf0q5gi7u/master',
  cache: new InMemoryCache()
});