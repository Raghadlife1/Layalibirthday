let count = 0;

function checkCode(){

    let input = document.getElementById("codeInput").value.trim().toLowerCase();
    let correct = "31 /march";

    if(input === correct){

        document.querySelector(".lock-screen").classList.add("hide");

        setTimeout(()=>{
            document.getElementById("mainContent").classList.add("show");
        }, 400);

        let videos = document.querySelectorAll("video");
        

    } else {
        document.getElementById("error").innerText = "❌ Wrong code 😢";
    }
}

function createBackgroundText(){

    if(count >= 20) return;

    const text = document.createElement("div");

    text.classList.add("bg-text");

    text.innerHTML = "🎂 🎊 Happy Birthday 🎈 🥳";

    // مكان عشوائي داخل الشاشة
    text.style.left = Math.random() * 100 + "vw";
    text.style.top = Math.random() * 100 + "vh";

    // مدة الحركة
    text.style.animationDuration = (Math.random() * 10 + 5) + "s";

    document.getElementById("background-text").appendChild(text);

    count++; // 🔥 مهم جدًا

    
}

setTimeout(()=>{
    text.remove();
},15000);

/* نكرر إنشاء النصوص */
setInterval(createBackgroundText, 800);
