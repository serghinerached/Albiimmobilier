import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://awsrkyyohuubpaazclrp.supabase.co";//process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3c3JreXlvaHV1YnBhYXpjbHJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3MTM4NDYsImV4cCI6MjA3MjI4OTg0Nn0.Ej38nRtrORWX1lG1iTqg_QM6WUDI_F7acyPOS6_HsKg";//process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
