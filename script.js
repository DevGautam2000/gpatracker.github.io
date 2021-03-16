add = document.querySelector(".add");
container = document.querySelector(".container");
lists = document.querySelectorAll(".select");
count = 0;

credit = add.addEventListener("click", addList);

function addList() {
  if (count++ <= 6) {
    div = document.createElement("div");
    div.setAttribute("class", "form");

    div.innerHTML = `
            <form>
              <div>
                <input
                  class="subject"
                  type="text"
                  name="Subject"
                  placeholder="Subject"
                />
        
                <select class="select" name="credit" id="credit">
                  <option>Credit</option>
                  <option value="1">1</option>
                  <option value="1.5">1.5</option>
                  <option value="2">2</option>
                  <option value="2.5">2.5</option>
                  <option value="3">3</option>
                  <option value="3.5">3.5</option>
                  <option value="4">4</option>
                </select>
        
                <select class="select" name="credit" id="grade">
                  <option>Grade</option>
                  <option value="S">S</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                </select>
              </div>
            </form>
          `;

    container.append(div);

    if (count > 6) {
      add.disabled = true;
    }
  }
}
