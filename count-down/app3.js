const addbtn = document.querySelector("#addbtn")
const main = document.querySelector("#main")
const savenote = () => {
    const note = document.querySelectorAll(".note textarea");
    console.log(note);
    const data = [];
    note.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    localStorage.setItem("note", JSON.stringify(data))
}
addbtn.addEventListener(
    "click",
    function () {
        addnote()
    }
)

const addnote = (text = " ") => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `   
    <div class="tool">
    <i class="save fas fa-save"></i>
    <i class="trash fas fa-trash"></i>
    </div>
    <textarea>${text}</textarea>`
        ;
    note.querySelector(".trash").addEventListener(
        "click",
        function () {
            note.remove()
            savenote()
        }
    )
    note.querySelector(".save").addEventListener(
        "click",
        function () {
            savenote()
        }
    )
    note.querySelector("textarea").addEventListener(
        "focusout",
        function () {
            savenote()
        }
    )
    main.appendChild(note);
    savenote()
}
(
    function () {
        const lsnote = JSON.parse(localStorage.getItem("note"));
        lsnote.forEach(
            (lsnote) => {
                addnote(lsnote)
            }
        )
        if (lsnote.length === 0) {
            localStorage.removeItem("note")
        } else {
            addnote()
        }
    }
)()