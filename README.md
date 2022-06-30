# Pay with Flexbase <font size="1">powered by [Flexbase](https://flexbase.app)</font>

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=flexbase-eng_pay-with-flexbase&metric=coverage)](https://sonarcloud.io/summary/new_code?id=flexbase-eng_pay-with-flexbase) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=flexbase-eng_pay-with-flexbase&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=flexbase-eng_pay-with-flexbase)


## Becoming a partner

Please contact [Flexbase](https://www.flexbase.app/merchant) to request information on becoming an integration partner.

## Getting started

Flexbase has provided a lightweight package that implements a component that can be used with any modern javascript framework. 

### Installation using a package manager

`yarn add pay-with-flexbase`

or

`npm i pay-with-flexbase`

### Usage

```ts
import 'pay-with-flexbase';

const apiKey = "api key";
const amount = 100.30;
const callback = "/done";
const session = "session id";

<pay-with-flexbase apikey={apiKey} amount={amount} callback={callback} session={session} />

```

Attribute | Type | Description
--- | --- | ---
apiKey | `string` | This is the api key provided to you by Flexbase
amount | `number` | The amount of the transaction
callback | `string` | The return URL **path** that Flexbase will redirect after completion by the user.
session | `string` | Identifies the checkout session

