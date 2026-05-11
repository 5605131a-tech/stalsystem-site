// Vercel Serverless Function - Proxy для Make.com webhook
// api/webhook.js
 
export default async function handler(req, res) {
  // Разрешаем CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
 
  // Обработка preflight запроса
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
 
  // Разрешаем только POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
 
  try {
    // Получаем данные от клиента
    const data = req.body;
 
    // Отправляем в Make.com webhook
    const response = await fetch('https://hook.eu1.make.com/fycwq5q02vbev6b69bh8m7s5d1bafrvw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
 
    // Получаем ответ от Make.com
    const result = await response.text();
 
    // Отправляем успешный ответ клиенту
    return res.status(200).json({
      success: true,
      message: 'Webhook sent successfully',
      makeResponse: result
    });
 
  } catch (error) {
    console.error('Webhook error:', error);
    
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
 
