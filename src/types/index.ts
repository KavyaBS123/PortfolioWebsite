export interface Hospital {
  id: string;
  name: string;
  address: string;
  phone: string;
  latitude: number;
  longitude: number;
  specialties: string[];
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone?: string;
}

export interface HealthRecord {
  id: string;
  userId: string;
  date: string;
  type: string;
  description: string;
  provider: string;
  attachments?: string[];
}

export interface Appointment {
  id: string;
  userId: string;
  hospitalId: string;
  doctorId: string;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  type: string;
  notes?: string;
}