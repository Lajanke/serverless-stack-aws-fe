const dev = {
  STRIPE_KEY: "pk_test_51HMYwEGh28UtgXaPjlmXbbu9Hq6ixuNkJto6ap3VksIQYcriASBxprY2cpJ6JK4go40cWZBQ9aS1WSFFz1iIcVHX00DP42KX4W",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-14tic0ziy65ml"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://kpxnjysi06.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_EyKBjfsV8",
    APP_CLIENT_ID: "7m5t2rh5hgae4bqhpkq2qufvjc",
    IDENTITY_POOL_ID: "us-east-2:f5bc309b-14e4-4c28-88c0-ac06b51a1d6e"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51HMYwEGh28UtgXaPjlmXbbu9Hq6ixuNkJto6ap3VksIQYcriASBxprY2cpJ6JK4go40cWZBQ9aS1WSFFz1iIcVHX00DP42KX4W",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-ceczh6wfgjkz"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://mwusi33py6.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_i1ObKyeBy",
    APP_CLIENT_ID: "63sc49ptg3dm8u5048dt7mahee",
    IDENTITY_POOL_ID: "us-east-2:c1f059f1-6f42-4008-a017-23833b5ef6f9"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};