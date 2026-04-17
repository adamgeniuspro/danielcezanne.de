exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const { email } = JSON.parse(event.body);
    
    if (!email || !email.includes('@')) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid email' }) };
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      return { statusCode: 500, headers, body: JSON.stringify({ error: 'API key not configured' }) };
    }

    // API key stored as environment variable for security
    const apiKey = process.env.BREVO_API_KEY;
    
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        listIds: [3],
        updateEnabled: true
      })
    });

    if (response.ok || response.status === 204) {
      return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
    }

    const data = await response.text();
    if (data.includes('Contact already exist')) {
      return { statusCode: 200, headers, body: JSON.stringify({ success: true, message: 'already subscribed' }) };
    }

    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  } catch (error) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Server error' }) };
  }
};
