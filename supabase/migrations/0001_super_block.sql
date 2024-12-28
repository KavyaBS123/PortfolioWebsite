/*
  # Initial Schema Setup for Healthcare Management System

  1. New Tables
    - hospitals
      - Basic hospital information including location data
    - health_records
      - Patient health records and medical history
    - appointments
      - Appointment scheduling and management
    
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Hospitals table
CREATE TABLE IF NOT EXISTS hospitals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  address text NOT NULL,
  phone text,
  latitude double precision NOT NULL,
  longitude double precision NOT NULL,
  specialties text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Health Records table
CREATE TABLE IF NOT EXISTS health_records (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  date timestamptz DEFAULT now(),
  type text NOT NULL,
  description text NOT NULL,
  provider text NOT NULL,
  attachments text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  hospital_id uuid REFERENCES hospitals NOT NULL,
  doctor_id text NOT NULL,
  date date NOT NULL,
  time time NOT NULL,
  status text DEFAULT 'scheduled',
  type text NOT NULL,
  notes text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE hospitals ENABLE ROW LEVEL SECURITY;
ALTER TABLE health_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- Hospitals policies
CREATE POLICY "Hospitals are viewable by everyone"
  ON hospitals
  FOR SELECT
  TO authenticated
  USING (true);

-- Health Records policies
CREATE POLICY "Users can view own health records"
  ON health_records
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own health records"
  ON health_records
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Appointments policies
CREATE POLICY "Users can view own appointments"
  ON appointments
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own appointments"
  ON appointments
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own appointments"
  ON appointments
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);