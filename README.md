# **De-assistant - Decentralized AI Assistant Chatbot**


De-assistant is a decentralized AI assistant chatbot built on the Internet Computer Protocol (ICP). This README provides guidance on setting up and running the application.

## **Setup**

### **Frontend Canister**

### Credentials

Create a **`credential.js`** file in the root directory and set your OpenAI API and the assitant Id key as follows:

```javascript
export const ASSISTANT_ID = "ASSISTANT_ID";
```

Refer to **`credential.example.js`**
Note: This file is ignored by default; please ensure it is excluded from version control to prevent accidental exposure of your assistant id.

After setting up the frontend credentials, ensure that you have the **`dfx`** command-line tool installed on your computer. Check its version with the following command:

```bash
dfx --version
```


## **Install Dependencies**

To install project dependencies, run the following command:

```bash
npm install
```

## **Run the App Locally**

Before running the app locally, start the local replica with the following command:

```bash
dfx start --clean

```

To run the app locally, ensure that **`dfx`** (Internet Computer CDK) is installed and running.
```bash
dfx deploy

```

This command deploys both the frontend and backend canisters to your local network. However, you can also deploy them separately.

## **Preview the Deployment**

After deployment, you can access the local preview of the app using the links provided in **green**:

```bash

Frontend canister via browser dfinity_js_frontend: http://127.0.0.1:4943/?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai
Backend canister via Candid interface dfinity_js_backend: http://127.0.0.1:4943/?canisterId=br5f7-7uaaa-aaaaa-qaaca-cai&id=bkyz2-fmaaa-aaaaa-qaaaq-cai
internet_identity: http://127.0.0.1:4943/?canisterId=br5f7-7uaaa-aaaaa-qaaca-cai&id=be2us-64aaa-aaaaa-qaabq-cai

```

## **Separate Deployment**

You can deploy individual parts of the app separately:

- Deploy only the backend:

```bash
dfx deploy dfinity_js_backend

```

- Deploy only the frontend:

```bash
dfx deploy dfinity_js_frontend

```

- Test the frontend locally:

```bash
npm start

```