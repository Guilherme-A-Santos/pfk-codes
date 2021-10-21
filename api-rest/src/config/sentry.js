const Sentry = require('@sentry/node')

module.exports = () => {

  Sentry.init({
    dsn: "https://bdb8427b2fde45e98056886c177378df@o1045967.ingest.sentry.io/6021698",
    tracesSampleRate: 1.0,
  })

  const Transaction = Sentry.startTransaction({
    op: "test",
    name: "My First Test Transaction",
  });

  return { Sentry, Transaction }
}
