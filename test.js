alert('Update ci_session cookie value!');
// ฟังก์ชันช่วยอ่าน Cookie
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  
  // ดึงค่า ci_session
  const ciSession = getCookie('ci_session');
  console.log(ciSession);
  ttt