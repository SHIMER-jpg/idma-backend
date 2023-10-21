import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export default createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
