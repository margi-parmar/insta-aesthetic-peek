export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    let username, url;
    if (req.method === 'GET') {
      ({ username, url } = req.query);
    } else {
      ({ username, url } = req.body);
    }
    if (!username) {
      username = 'prathmeshsoni25';
    }

    if (!username && !url) {
      return res.status(400).json({ error: 'Username is required' });
    }

    let main_url = url ? url : `https://instacapture.stuffs.me/api/posts/@${username}`;
    const response = await fetch(main_url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    res.status(200).json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch Instagram data',
      details: `Url= '${main_url}', '${url}' : Error= ${error.message}`
    });
  }
}
