bhook · JS
Copy

// Netlify Function - Proxy для Make.com webhook
// Обходит CORS блокировку
 
exports.handler = async (event, context) => {
  // Разрешаем только POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }
 
  try {
    // Парсим данные от клиента
    const data = JSON.parse(event.body);
 
    // Отправляем в Make.com webhook
    const response = await fetch('https://hook.eu1.make.com/qjojq8dj8ppdj5thinkyq5cibds17ksuc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
 
    // Получаем ответ от Make.com
    const result = await response.text();
 
    // Отправляем успешный ответ клиенту
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Разрешаем CORS
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        success: true,
        message: 'Webhook sent successfully',
        makeResponse: result
      })
    };
 
  } catch (error) {
    console.error('Webhook error:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        success: false,
        error: error.message
      })
    };
  }
};
 
