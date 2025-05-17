const express = require('express');
const cors = require('cors');
const { Options, IntegrationApiKeys, IntegrationCommerceCodes, WebpayPlus } = require('transbank-sdk');

const app = express();
app.use(cors());
app.use(express.json());

// Correct Transbank configuration for integration
const webpayPlus = new WebpayPlus.Transaction(
  new Options(
    IntegrationCommerceCodes.WEBPAY_PLUS,
    IntegrationApiKeys.WEBPAY,
    'https://webpay3gint.transbank.cl'
  )
);

app.post('/crear-transaccion', async (req, res) => {
  const { amount, sessionId, buyOrder, returnUrl } = req.body;
  try {
    const response = await webpayPlus.create(
      buyOrder,
      sessionId,
      amount,
      returnUrl
    );
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/confirmar-transaccion', async (req, res) => {
  const { token_ws } = req.body;
  try {
    const result = await webpayPlus.commit(token_ws);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Backend escuchando en http://localhost:3000');
});