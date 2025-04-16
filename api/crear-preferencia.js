// api/crear-preferencia.js

import { MercadoPagoConfig, Preference } from 'mercadopago';

// Reemplaza tu access token aquí (modo sandbox o producción)
const client = new MercadoPagoConfig({ accessToken: 'APP_USR-6483474954436015-041422-47680e2e2a7f6803505ecfaf0496754b-214767141' });

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { items } = req.body;
    console.log('🛒 Items recibidos en backend:', items);

    try {
      const preference = await new Preference(client).create({
        body: {
          items,
          back_urls: {
            success: 'https://celayareptiles.com/success',
            failure: 'https://celayareptiles.com/failure',
            pending: 'https://celayareptiles.com/pending',
          },
          auto_return: 'approved',
        },
      });

      res.status(200).json({ init_point: preference.init_point });
    } catch (error) {
      console.error('❌ Error al crear preferencia:', error);
      res.status(500).json({ error: 'Error al crear preferencia' });
    }
  } else {
    res.status(405).end();
  }
}
