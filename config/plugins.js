module.exports = ({ env }) => ({
  upload: {
    breakpoints: {
      sm: 1024,
      md: 1280,
      lg: 1536,
      xl: 1920,
      "2xl": 2560,
    },
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("AWS_ACCESS_KEY_ID"),
      secretAccessKey: env("AWS_ACCESS_SECRET"),
      region: env("AWS_REGION", "us-east-1"),
      params: {
        Bucket: env("AWS_BUCKET"),
      },
    },
  },
  email: {
    provider: "nodemailer",
    providerOptions: {
      host: env("SMTP_HOST", "SMTP.titan.email"),
      port: env("SMTP_PORT", 465),
      secure: true,
      auth: {
        user: env("SMTP_USERNAME"),
        pass: env("SMTP_PASSWORD"),
      },
      // ... any custom nodemailer options
    },
    settings: {
      defaultFrom: env("SMTP_USERNAME"),
      defaultReplyTo: env("SMTP_USERNAME"),
    },
  },
});
