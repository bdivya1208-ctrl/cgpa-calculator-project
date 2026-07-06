const table = document.getElementById("subjectTable");
const addBtn = document.getElementById("addBtn");
const calcBtn = document.getElementById("calcBtn");

addBtn.addEventListener("click", () => {

    const row = `
    <tr>
        <td>
            <input type="text" placeholder="Subject Name">
        </td>

        <td>
            <input type="number" placeholder="Credits">
        </td>

        <td>
            <select>
                <option value="10">O</option>
                <option value="9">A+</option>
                <option value="8">A</option>
                <option value="7">B+</option>
                <option value="6">B</option>
                <option value="0">F</option>
            </select>
        </td>
    </tr>
    `;

    table.insertAdjacentHTML("beforeend", row);

});

calcBtn.addEventListener("click", () => {

    const rows = document.querySelectorAll("#subjectTable tr");

    let totalCredits = 0;
    let totalPoints = 0;

    rows.forEach(row => {

        const credit = Number(
            row.cells[1].querySelector("input").value
        );

        const grade = Number(
            row.cells[2].querySelector("select").value
        );

        totalCredits += credit;
        totalPoints += credit * grade;

    });

    if (totalCredits === 0) {
        document.getElementById("result").textContent =
            "GPA: 0.00";
        return;
    }

    const gpa = totalPoints / totalCredits;

    document.getElementById("result").textContent =
        `GPA: ${gpa.toFixed(2)}`;

});