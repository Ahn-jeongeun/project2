document.getElementById("signupBtn").addEventListener("click", async()=>{
    const email = document.getElementById("email").value;
    const pwd = document.getElementById("pwd").value;
    const nickname = document.getElementById("nickname").value;

    const data ={email, pwd, nickname};
    await axios.post("http://localhost:8080/insertMember", data);
    alert(Response.data);
});