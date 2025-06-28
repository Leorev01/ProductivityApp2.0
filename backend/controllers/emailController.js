exports.sendEmail = (req, res) => {
  const { email, habits } = req.body;

  // TODO: use nodemailer or SendGrid here

  console.log(`Sending email to ${email} with habits:`, habits);
  res.json({ success: true });
};
