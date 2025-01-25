const {createClient} = supabase
const supabaseURL = 'https://odgotybypfquqaqtbrxl.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kZ290eWJ5cGZxdXFhcXRicnhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY2MjY5NzQsImV4cCI6MjA1MjIwMjk3NH0.ckzCqYKJlszG-QkYNDnwSAW5XJVf69PONEC2NFmf7Es"
const supabaseClient = createClient(supabaseURL, supabaseKey)
window.supabase = supabaseClient

