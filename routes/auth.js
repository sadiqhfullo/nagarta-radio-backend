router.post('/register', async (req, res) => {
  const { username, email, phone, password, role } = req.body;
  if (!username || !email || !password) return res.status(400).json({ error: 'Missing required fields' });

  try {
    const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userExists.rows.length > 0) return res.status(400).json({ error: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await pool.query(
      `INSERT INTO users (username, email, phone, password, role)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, username, email, role`,
      [username, email, phone || null, hashedPassword, role || 'listener']
    );

    res.status(201).json({ message: 'User registered', user: newUser.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});
