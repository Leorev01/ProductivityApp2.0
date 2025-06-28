import {Request, Response} from 'express';

const sendEmail = async (req: Request, res: Response) => {
  const { email, habits } = req.body;
  try{
    // Simulate email sending
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
  res.status(200).json({ success: true, message: 'Email sent successfully' });
};

export default sendEmail