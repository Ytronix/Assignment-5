//! Favourite Count 
const favBtns = document.getElementsByClassName("fav-btn");
let favCount = document.getElementById("fav-count").innerText;

for (const btn of favBtns) {
    btn.addEventListener('click', function () {
        favCount++;
        document.getElementById("fav-count").innerText = favCount;
    })
}

//! Copy Count
const copyBtns = document.getElementsByClassName("copy-btn");
let copyCount = document.getElementById("copy-count").innerText;

for (const btn of copyBtns) {
    btn.addEventListener('click', function () {
        copyCount++;
        document.getElementById("copy-count").innerText = copyCount;
        const caller = {
          number: btn.closest(".card").querySelector("p").innerText
        };
        navigator.clipboard.writeText(caller.number);
        alert("Number Copied!")
    })
}

//! Call Effect
const callBtns = document.getElementsByClassName("call-btn");
let coin = document.getElementById("coin").innerText;

for (const btn of callBtns) {
    btn.addEventListener('click', function () {
        const caller = {
            name: btn.closest(".card").querySelector("h5").innerText,
            number: btn.closest(".card").querySelector("p").innerText
        };
        if (coin < 20) {
            alert("Not Enough Coin!");
        }
        else {
            alert("📞 Calling: "+ caller.name+ " " + caller.number);
            coin -= 20;
            document.getElementById("coin").innerText = coin;
            
            const historyCard = document.createElement("div");
            historyCard.classList.add(
                "history-box",
                "flex",
                "justify-between",
                "items-center",
                "bg-gray-100",
                "p-4",
                "rounded-lg"
            );
            historyCard.innerHTML =
            `<div>
                <h1 class="roboto text-lg font-semibold">${caller.name}</h1>
                <p class="text-gray-500">${caller.number}</p>
            </div>
            <p>${new Date().toLocaleTimeString()}</p>`;

            document.querySelector(".history-card").appendChild(historyCard);
        }

    })
}

//! Clear Button
const clrBtn = document.getElementById("clr-btn");

clrBtn.addEventListener('click', function () {
    callerInfo = [];
    document.querySelector(".history-card").innerHTML = "";
})