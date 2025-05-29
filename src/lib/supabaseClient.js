import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://emeuhcvgadqggtqqloto.supabase.co"; // dari dashboard
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtZXVoY3ZnYWRxZ2d0cXFsb3RvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MTExMTEsImV4cCI6MjA2NDA4NzExMX0.8A9oyJRLl5EEqpXqA8bb1jSyjqcF6i-VmYMHHYx9_wg"; // dari dashboard > settings > API

export const supabase = createClient(supabaseUrl, supabaseKey);
