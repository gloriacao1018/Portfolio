// import fetch from 'node-fetch';
import { createClient as createExperimentalTypesafeClient } from 'sanity-codegen';
import createClient from '@sanity/client';
// eslint-disable-next-line import/no-relative-packages
import { Documents } from '../../generatedSanitySchemaTypes';

const authorizedClientConfig = {
  projectId: 'yreszbh5',
  dataset: 'production',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
};

const clientConfig = {
  projectId: 'yreszbh5',
  dataset: 'production',
  useCdn: false,
};

export const authorizedSanityClient = createClient(authorizedClientConfig);
export const safeSanityClient = createClient(clientConfig);

export const authorizedSanityExperimentalTypesafeClient = createExperimentalTypesafeClient<Documents>({
  ...authorizedClientConfig,
  fetch,
});