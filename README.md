# Sample TypeScript Fastify app with Autometrics
This is a sample backend service written in TypeScript, Fastify framework that gives you a sense for how to get started with Autometrics.

The backend service emulates a simple user directory with REST API endpoints. Each endpoint is instrumented with Autometrics.

To get the sample up and running you can follow these steps:

1. Clone the repository and install the dependencies

```bash
git clone autometrics-dev/gettingstarted-am-ts

cd gettingstarted-am-ts

npm install
```

2. Download the Autometrics CLI

If you're on macOS you can use Homebrew:

```bash
brew install autometrics-dev/tap/am
```

or you can grab the binaries directly from the [GitHub release](https://github.com/autometrics-dev/am/releases/).

3. Start the application

Build the application with TypeScript and run it with Node.

```bash
npm run build
npm start
```

The application will start on a port 8080 by default and open a metrics endpoint on a separate port 9464.

4. Start the Autometrics CLI and Explorer

Start the Autometrics CLI and point it to the endpoint it can scrape metrics from.

```bash
am start :9464
```

Autometrics CLI will download and run a Prometheus binary under the hood and start scraping metrics.

5. Preview the metrics in Autometrics Explorer

Autometrics CLI will also start a server with the Explorer available on `localhost:6789`. You can browse it and start exploring your sample app metrics! (You might need to ping the endpoints a few times to see the data reflected).
