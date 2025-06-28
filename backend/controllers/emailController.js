const sendEmail = async (req, res) => {
  const { email, habits } = req.body;
  try{
    // Simulate email sending
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, message: 'Failed to send email' });
  }
  return res.status(200).json({ success: true, message: 'Email sent successfully' });
};

export default sendEmail