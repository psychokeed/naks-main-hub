import React, { useState } from 'react';
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AppointmentPage = () => {
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFeedbackMessage('');
    
    const appointmentData = { service, date, time, name, email, phone };

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        body: JSON.stringify(appointmentData),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      if (response.ok) {
        setFeedbackMessage('Appointment booked successfully!');
      } else {
        setFeedbackMessage('Something went wrong, please try again.');
      }
    } catch (error) {
      setFeedbackMessage('Error submitting your request!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Book an Appointment</h1>
            <p className="text-lg text-gray-600">
              Fill out the form below to schedule your appointment with us.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-8">
        {feedbackMessage && (
          <div
            className={`text-center p-4 mb-6 ${
              feedbackMessage.includes('successfully')
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {feedbackMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label className="font-medium mb-2" htmlFor="name">Name:</label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-2" htmlFor="email">Email:</label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-2" htmlFor="phone">Phone:</label>
            <Input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-2" htmlFor="service">Service:</label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Select Service</option>
              <option value="Teleconsultation">Teleconsultation</option>
              <option value="Personal Training">Personal Training</option>
              <option value="Nutritional Guidance">Nutritional Guidance</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-2" htmlFor="date">Date:</label>
            <Input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium mb-2" htmlFor="time">Time:</label>
            <Input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <Button
            type="submit"
            className="w-full p-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? 'Booking...' : 'Book Appointment'}
          </Button>
        </form>
      </div>
    </MainLayout>
  );
};

export default AppointmentPage;
