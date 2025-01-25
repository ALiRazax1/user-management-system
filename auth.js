let signupEmail = document.getElementById("signup-email")
let signupPassword = document.getElementById("signup-password")
let signupBtn = document.getElementById("signup-btn")
let loginBtn = document.getElementById("login-btn")
let loginEmail = document.getElementById("login-email")
let loginPassword = document.getElementById("login-password")
let logoutBtn = document.getElementById("logout-btn")

async function signup() {
    try {
      const { data, error } = await supabase.auth.signUp({
          email: signupEmail.value,
          password: signupPassword.value,
        })
  
      if(error) throw error 
      if(data) {
        Swal.fire({
            text: 'Signup Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
      }
      return data
    } catch (error) {
      console.log(error)
    } finally {
    }
  }

async function login() {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: loginEmail.value,
            password: loginPassword.value,
          })
          if (error) throw error
          if (data){
            
            window.location.href = "dashboard.html"
          }
    } catch (error) {
        
    }
}

async function logout() {
try { const { error } = await supabase.auth.signOut()
if (error) throw error;
window.location.href = "login.html"
    
} catch (error) {
    console.log(error);
    
}
    
}
 if(signupBtn){ 
signupBtn.addEventListener("click", signup) 
 }
 if (loginBtn){
    loginBtn.addEventListener("click", login)
 }
  if(logoutBtn){
    logoutBtn.addEventListener("click", logout)
  }
  