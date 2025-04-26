// src/routes/appointments.ts
import { Router, Request, Response } from 'express';

const router = Router();

router.post('/appointments', (req: Request, res: Response) => {
  const { service, date, time, name, email, phone } = req.body;

  if (!service || !date || !time || !name || !email || !phone) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Save appointment to database or in-memory store (example)
  const appointment = { service, date, time, name, email, phone };
  console.log('New appointment:', appointment);

  return res.status(200).json({ message: 'Appointment booked successfully!' });
});

export default router;
