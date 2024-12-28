import { supabase } from './supabase';

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  project: string;
}

export async function sendMessage(message: ContactMessage) {
  const { error } = await supabase
    .from('contact_messages')
    .insert([message]);
  
  if (error) throw error;
  return true;
}