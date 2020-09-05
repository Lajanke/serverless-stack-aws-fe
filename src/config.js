export default {
  s3: {
    REGION: "EU",
    BUCKET: "notes-app-aws"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://lf6akw7hrh.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_fafUdms16",
    APP_CLIENT_ID: "4ruo4o1id8o6tkjcr9h3tqknlu",
    IDENTITY_POOL_ID: "us-east-2:a59d0af4-de89-4eac-8a54-7257b87e378a"
  },
  MAX_ATTACHMENT_SIZE: 5000000,
};