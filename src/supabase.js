import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://ndssbnkhyvotreganrzf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kc3NibmtoeXZvdHJlZ2FucnpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxNTA3MDEsImV4cCI6MjAxMTcyNjcwMX0.N6q3TT1519PqFzTQBVMDhAxzdhaH6BVrIsg5Wwfk0fY"
);

export default supabase;