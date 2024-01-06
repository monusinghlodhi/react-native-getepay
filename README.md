## Prerequisites
 - Learn about the Getepay Payment Flow.
 - Sign up for a <a href="#">Getepay Account</a> and generate the <a href="#" target="_blank">API Keys</a> from the Getepay Dashboard. Using the Test keys helps simulate a sandbox environment. No actual monetary transaction happens when using the Test keys. Use Live keys once you have thoroughly tested the application and are ready to go live.

## You can use getepay payment geteway with this package firstly.

You can use getepay payment geteway with this package firstly you need to install cryptoJS with this package for encryption.

#install cryptojs
npm i crypto-js

now you can use getepay as payment geteway. you can import default function in your component.

after that you need to pass data as an argument.

const pgResponse = getepayPortal(data,Config);

## Schema Of Arguments

```sh
const data = {
  mid                     : <Getepay_MID Provided by Getepay>,
  amount                  : "<Amount>",
  merchantTransactionId   : "<Order_ID>",
  transactionDate         : "<Transaction_DATE>",
  terminalId              : "<Getepay_TerminalID Provided by Getepay>",
  udf1                    : "<Mobile_NO>",
  udf2                    : "<Name>",
  udf3                    : "<Email_ID>",
  udf4                    : "",
  udf5                    : "",
  udf6                    : "",
  udf7                    : "",
  udf8                    : "",
  udf9                    : "",
  udf10                   : "",
  ru                      : "<Return_URL>",
  callbackUrl             : "<Callback_URL>",
  currency                : "INR",
  paymentMode             : "ALL",
  bankId                  : "",
  txnType                 : "single",
  productType             : "IPG",
  txnNote                 : "<Txn Note>",
  vpa                     : "<Getepay_TerminalID Provided by Getepay>",
};

const Config = {
  "GetepayMid"        : <Getepay_MID Provided by Getepay>,
  "GetepayTerminalId" : "<Getepay_TerminalID Provided by Getepay>",
  "GetepayKey"        : "<Getepay_KEY Provided by Getepay>",
  "GetepayIV"         : "<Getepay_IV Provided by Getepay>",
  "GetepayUrl"        : "<Getepay_Payment_RequestURL Provided by Getepay>",
};
```