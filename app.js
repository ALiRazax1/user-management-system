console.log(window.location.pathname);

async function checkSession() {
    
    
    
    try {
        const { data, error } = await supabase.auth.getSession()
        console.log(data);
        if (error) {   throw error;
        }
        if(data.session && (window.location.pathname !== "/dashboard.html")){
            window.location.href = "/dashboard.html";
        }if(!data.session  && window.location.pathname === "/dashboard.html"){window.location.href = "/login.html";}

    } catch (error) {
        console.log(error);
        
    }

}
window.onload = checkSession()