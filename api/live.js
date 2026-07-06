export default function handler(req, res) {
  if (req.method === 'GET') {
    const state = {
      isLive: false,
      title: 'No hay directo activo en este momento.',
      url: 'https://www.twitch.tv/twich_alecarrasco',
      updatedAt: Date.now(),
    };

    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json(state);
    return;
  }

  if (req.method === 'POST') {
    const { password, isLive, title, url } = req.body || {};
    if (password !== 'carrasco2026') {
      res.status(401).json({ error: 'No autorizado' });
      return;
    }

    const state = {
      isLive: Boolean(isLive),
      title: title || (Boolean(isLive) ? '¡Ahora mismo está en directo!' : 'No hay directo activo en este momento.'),
      url: url || 'https://www.twitch.tv/twich_alecarrasco',
      updatedAt: Date.now(),
    };

    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json(state);
    return;
  }

  res.status(405).json({ error: 'Método no permitido' });
}
