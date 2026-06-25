let students = [];

function addStudent() {
    let name = document.getElementById("name").value;
    let good = document.getElementById("good").value.split(",");
    let need = document.getElementById("need").value.split(",");

    let student = {
        name,
        goodAt: good,
        needsHelp: need
    };

    students.push(student);

    showStudents();
    showMatches();
}

function showStudents() {
    let div = document.getElementById("students");
    div.innerHTML = "";

    students.forEach(s => {
        div.innerHTML += `
            <p><b>${s.name}</b> | Good: ${s.goodAt} | Needs: ${s.needsHelp}</p>
        `;
    
    });
}

function getMatchScore(a, b) {
    let score = 0;

    (a.goodAt || []).forEach(subject => {
        if ((b.needsHelp || []).includes(subject)) {
            score += 10;
        }
    });

    return score;
}

function showMatches() {
    let div = document.getElementById("matches");
    div.innerHTML = "";

    for (let i = 0; i < students.length; i++) {
        for (let j = 0; j < students.length; j++) {

            if (i !== j) {
                let score = getMatchScore(students[i], students[j]);

                if (score>0){
                    div.innerHTML += `
                        <p>
                            ${students[i].name} can help ${students[j].name}
                            (Score: ${score})
                        </p>
                    `;
                }
            }
            /*if (score > 0) {
                div.innerHTML += `
                    <p>
                        $(students[i].name} can help $(students[j].name}
                        (Score: $(score})
                    </p>
                `;
            }*/
        }
    }
}