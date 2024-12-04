/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require("firebase-functions");
const dotenv=require("dotenv");
const axios = require("axios");
dotenv.config();
const APP_ID = process.env.APP_ID;
const SECRET_KEY = process.env.SECRET_KEY;
const BASE_URL = "https://sandbox.cashfree.com/pg/orders"; // Use 'https://api.cashfree.com/pg/orders' for production

exports.createPaymentOrder = functions.https.onRequest(async (req, res) => {
  try {
    const { order_id, order_amount, customer_details } = req.body;

    const response = await axios.post(
      BASE_URL,
      {
        order_id,
        order_amount,
        order_currency: "INR",
        customer_details,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-client-id": APP_ID,
          "x-client-secret": SECRET_KEY,
        },
      }
    );

    return res.status(200).json(response.data);
  } catch (error) {
    console.error("Error creating order:", error);
    return res.status(500).send("Failed to create order");
  }
});

