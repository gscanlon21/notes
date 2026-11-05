const fields = {
    a: document.getElementById("a"),
    b: document.getElementById("b"),
    c: document.getElementById("c"),
    A: document.getElementById("A"),
    B: document.getElementById("B")
};

const calculateButton = document.getElementById("calculate");
const resetButton = document.getElementById("reset");
const status = document.getElementById("status");


/* HELPERS
************/
function number(id) {
    const value = parseFloat(fields[id].value);
    return Number.isFinite(value) ? value : null;
}

function setValue(id, value) {
    if (value === null ||
        !Number.isFinite(value)) {
        return;
    }

    fields[id].value = format(value);
}

function format(value) {
    if (!Number.isFinite(value)) {
        return "";
    }

    if (Math.abs(value) < 1e-10) {
        value = 0;
    }

    return Number(value.toFixed(4)).toString();
}


/* GET INPUTS
***************/
function getInputs() {
    return {
        a: number("a"),
        b: number("b"),
        c: number("c"),
        A: number("A"),
        B: number("B")
    };
}


/* VALIDATION
***************/
function validateInputs(v) {
    // Sides must be positive.
    for (const key of ["c"]) {
        if (v[key] !== null && v[key] <= 0) {
            return `${key} must be greater than 0.`;
        }
    }

    // Angles must be between 0 and 90.
    for (const key of ["A", "B"]) {
        if (v[key] !== null && (v[key] <= 0 || v[key] >= 90)) {
            return `${key} must be between 0° and 90°.`;
        }
    }

    // If both A and B are entered, they must add to 90.
    if (v.A !== null && v.B !== null) {
        if (Math.abs(v.A + v.B - 90) > 0.0001) {
            return "Angles A and B must add up to 90°.";
        }
    }

    // Check side relationships if enough side information was supplied.
    if (v.a !== null && v.b !== null && v.c !== null) {
        const calculated = Math.sqrt(v.a * v.a + v.b * v.b);

        if (Math.abs(calculated - v.c) > Math.max(0.0001, v.c * 0.0001)) {
            return "The three sides do not form a valid right triangle.";
        }
    }

    return null;
}


/* SOLVE TRIANGLE
*******************/
function solveTriangle(v) {
    let changed = true;
    let iterations = 0;
    while (changed && iterations < 20) {
        changed = false;
        iterations++;

        // Angles
        if (v.A !== null && v.B === null) {
            v.B = 90 - v.A;
            changed = true;
        }

        if (v.B !== null && v.A === null) {
            v.A = 90 - v.B;
            changed = true;
        }

        // Side a + side b -> c
        if (v.a !== null && v.b !== null && v.c === null) {
            v.c = Math.sqrt(v.a * v.a + v.b * v.b);
            changed = true;
        }

        // c + a -> b
        if (v.c !== null && v.a !== null && v.b === null) {
            const value = v.c * v.c - v.a * v.a;

            if (value < 0) {
                throw new Error("Side a cannot be longer than side c.");
            }

            v.b = Math.sqrt(value);
            changed = true;
        }

        // c + b -> a
        if (v.c !== null && v.b !== null && v.a === null) {
            const value = v.c * v.c - v.b * v.b;

            if (value < 0) {
                throw new Error("Side b cannot be longer than side c.");
            }

            v.a = Math.sqrt(value);
            changed = true;
        }

        // a + A -> c and b
        if (v.a !== null && v.A !== null) {
            const rad = v.A * Math.PI / 180;

            if (v.c === null) {
                v.c = v.a / Math.sin(rad);
                changed = true;
            }

            if (v.b === null) {
                v.b = v.a / Math.tan(rad);
                changed = true;
            }
        }

        // a + B -> c and b
        if (v.a !== null && v.B !== null) {
            const rad = v.B * Math.PI / 180;

            if (v.c === null) {
                v.c = v.a / Math.cos(rad);
                changed = true;
            }

            if (v.b === null) {
                v.b = v.a * Math.tan(rad);
                changed = true;
            }

            if (v.A === null) {
                v.A = 90 - v.B;
                changed = true;
            }
        }

        // b + B -> c and a
        if (v.b !== null && v.B !== null) {
            const rad = v.B * Math.PI / 180;

            if (v.c === null) {
                v.c = v.b / Math.sin(rad);
                changed = true;
            }

            if (v.a === null) {
                v.a = v.b / Math.tan(rad);
                changed = true;
            }
        }

        // b + A -> c and a
        if (v.b !== null && v.A !== null) {
            const rad = v.A * Math.PI / 180;

            if (v.c === null) {
                v.c = v.b / Math.cos(rad);
                changed = true;
            }

            if (v.a === null) {
                v.a = v.b * Math.tan(rad);
                changed = true;
            }
        }

        // c + A -> a and b
        if (v.c !== null && v.A !== null) {
            const rad = v.A * Math.PI / 180;

            if (v.a === null) {
                v.a = v.c * Math.sin(rad);
                changed = true;
            }

            if (v.b === null) {
                v.b = v.c * Math.cos(rad);
                changed = true;
            }
        }

        // c + B -> a and b
        if (v.c !== null && v.B !== null) {
            const rad = v.B * Math.PI / 180;

            if (v.b === null) {
                v.b = v.c * Math.sin(rad);
                changed = true;
            }

            if (v.a === null) {
                v.a = v.c * Math.cos(rad);
                changed = true;
            }
        }

        // Two sides can give angles
        if (v.a !== null && v.b !== null) {
            if (v.A === null) {
                v.A = Math.atan2(v.a, v.b) * 180 / Math.PI;
                changed = true;
            }

            if (v.B === null) {
                v.B = Math.atan2(v.b, v.a) * 180 / Math.PI;
                changed = true;
            }
        }

        if (v.a !== null && v.c !== null) {
            if (v.A === null) {
                v.A = Math.asin(v.a / v.c) * 180 / Math.PI;
                changed = true;
            }

            if (v.B === null) {
                v.B = 90 - v.A;
                changed = true;
            }
        }

        if (v.b !== null && v.c !== null) {
            if (v.B === null) {
                v.B = Math.asin(v.b / v.c) * 180 / Math.PI;
                changed = true;
            }

            if (v.A === null) {
                v.A = 90 - v.B;
                changed = true;
            }
        }
    }

    return v;
}


/* MAIN CALCULATION
*********************/
function calculate() {
    let values = getInputs();

    // Count supplied values
    const supplied = Object.values(values).filter(v => v !== null).length;

    if (supplied < 2) {
        status.className = "status error";
        status.textContent = "Enter at least two independent values.";

        return;
    }

    // Validate
    const validation = validateInputs(values);

    if (validation) {
        status.className = "status error";
        status.textContent = validation;

        return;
    }

    // Solve
    try {
        values = solveTriangle(values);
    } catch (error) {
        status.className = "status error";
        status.textContent = error.message;

        return;
    }

    // Check whether everything was solved
    const complete =
        values.a !== null &&
        values.b !== null &&
        values.c !== null &&
        values.A !== null &&
        values.B !== null;

    if (!complete) {
        status.className = "status";
        status.textContent = "At least one side is required.";

        setValue("A", values.A);
        setValue("B", values.B);

        return;
    }

    document.getElementById("result-a").innerHTML = `${format(values.a)}`;
    document.getElementById("result-b").innerHTML = `${format(values.b)}`;
    document.getElementById("result-c").innerHTML = `${format(values.c)}`;
    document.getElementById("result-A").innerHTML = `${format(values.A)}`;
    document.getElementById("result-B").innerHTML = `${format(values.B)}`;

    status.className = "status success";
    status.textContent = "Triangle calculated successfully.";
}


/* RESET
**********/
function reset() {
    for (const field of Object.values(fields)) {
        field.value = "";
    }

    status.className = "status";
    status.textContent = "...";
}

/* EVENTS
***********/
calculateButton.addEventListener("click", calculate);
resetButton.addEventListener("click", reset);

// Calculate when Enter is pressed.
for (const input of Object.values(fields)) {
    input.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            calculate();
        }
    });
}