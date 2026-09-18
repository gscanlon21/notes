
/* =========================================================
   RIGHT TRIANGLE CALCULATOR
   =========================================================

   Triangle convention:

            /|
           / |
        c /  | a
         /   |
        / A  | 
       /_____|
          b

   C = 90°
   A is opposite side a
   B is opposite side b
   c is the hypotenuse

   The user may enter ANY combination of values.

   Two independent values are sufficient.
   ========================================================= */

const fields = {
    a: document.getElementById("a"),
    b: document.getElementById("b"),
    c: document.getElementById("c"),
    A: document.getElementById("A"),
    B: document.getElementById("B")
};

const calculateButton = document.getElementById("calculate");
const resetButton = document.getElementById("reset");
const drawing = document.getElementById("drawing");
const status = document.getElementById("status");
const info = document.getElementById("info");

/* SVG circle dimensions */

const CX = 400;
const CY = 400;
const R = 300;

/* =========================================================
   HELPERS
   ========================================================= */

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

    return Number(value.toFixed(8)).toString();
}

function clearDrawing() {
    drawing.innerHTML = "";
}

function svgElement(name, attrs = {}) {
    const element = document.createElementNS("http://www.w3.org/2000/svg", name);

    for (const [key, value] of Object.entries(attrs)) {
        element.setAttribute(key, value);
    }

    return element;
}

/* =========================================================
   GET INPUTS
   ========================================================= */

function getInputs() {

    return {
        a: number("a"),
        b: number("b"),
        c: number("c"),
        A: number("A"),
        B: number("B")
    };
}

/* =========================================================
   VALIDATION
   ========================================================= */

function validateInputs(v) {
    /*
        Sides must be positive.
    */
    for (const key of ["c"]) {
        if (v[key] !== null && v[key] <= 0) {
            return `${key} must be greater than 0.`;
        }
    }

    /*
        Angles must be between 0 and 90.
    */
    for (const key of ["A", "B"]) {
        if (v[key] !== null &&
            (v[key] <= 0 || v[key] >= 90)) {

            return `${key} must be between 0° and 90°.`;
        }
    }

    /*
        If both A and B are entered, they must add to 90.
    */
    if (v.A !== null && v.B !== null) {

        if (Math.abs(v.A + v.B - 90) > 0.0001) {
            return "Angles A and B must add up to 90°.";
        }
    }

    /*
        Check side relationships if enough
        side information was supplied.
    */
    if (v.a !== null && v.b !== null && v.c !== null) {
        const calculated = Math.sqrt(v.a * v.a + v.b * v.b);

        if (Math.abs(calculated - v.c) > Math.max(0.0001, v.c * 0.0001)) {
            return "The three sides do not form a valid right triangle.";
        }
    }

    return null;
}

/* =========================================================
   SOLVE TRIANGLE
   ========================================================= */
function solveTriangle(v) {

    /*
        We repeatedly use known information to
        derive new information.

        This makes combinations such as:

            a + A
            b + B
            a + c
            b + c
            a + b
            c + A
            c + B
            A + B + side

        all work.
    */

    let changed = true;

    let iterations = 0;

    while (changed && iterations < 20) {

        changed = false;

        iterations++;

        /* ---------------------------------------------
           Angles
           --------------------------------------------- */

        if (v.A !== null && v.B === null) {

            v.B = 90 - v.A;
            changed = true;
        }

        if (v.B !== null && v.A === null) {
            v.A = 90 - v.B;
            changed = true;
        }

        /* ---------------------------------------------
           Side a + side b -> c
           --------------------------------------------- */

        if (v.a !== null &&
            v.b !== null &&
            v.c === null) {

            v.c = Math.sqrt(
                v.a * v.a +
                v.b * v.b
            );

            changed = true;
        }

        /* ---------------------------------------------
           c + a -> b
           --------------------------------------------- */

        if (v.c !== null &&
            v.a !== null &&
            v.b === null) {

            const value =
                v.c * v.c -
                v.a * v.a;

            if (value < 0) {
                throw new Error(
                    "Side a cannot be longer than side c."
                );
            }

            v.b = Math.sqrt(value);

            changed = true;
        }

        /* ---------------------------------------------
           c + b -> a
           --------------------------------------------- */

        if (v.c !== null && v.b !== null && v.a === null) {

            const value = v.c * v.c - v.b * v.b;

            if (value < 0) {
                throw new Error(
                    "Side b cannot be longer than side c."
                );
            }

            v.a = Math.sqrt(value);

            changed = true;
        }

        /* ---------------------------------------------
           a + A -> c and b
           --------------------------------------------- */

        if (v.a !== null &&
            v.A !== null) {

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

        /* ---------------------------------------------
           a + B -> c and b
           --------------------------------------------- */

        if (v.a !== null &&
            v.B !== null) {

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

        /* ---------------------------------------------
           b + B -> c and a
           --------------------------------------------- */

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

        /* ---------------------------------------------
           b + A -> c and a
           --------------------------------------------- */

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

        /* ---------------------------------------------
           c + A -> a and b
           --------------------------------------------- */

        if (v.c !== null &&
            v.A !== null) {

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

        /* ---------------------------------------------
           c + B -> a and b
           --------------------------------------------- */

        if (v.c !== null &&
            v.B !== null) {

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

        /* ---------------------------------------------
           Three sides can give angles
           --------------------------------------------- */

        if (v.a !== null && v.b !== null) {

            if (v.A === null) {

                v.A = Math.atan2(v.a, v.b) * 180 / Math.PI;

                changed = true;
            }

            if (v.B === null) {

                v.B =
                    Math.atan2(
                        v.b,
                        v.a
                    ) * 180 / Math.PI;

                changed = true;
            }
        }

        if (v.a !== null &&
            v.c !== null) {

            if (v.A === null) {

                v.A =
                    Math.asin(
                        v.a / v.c
                    ) * 180 / Math.PI;

                changed = true;
            }

            if (v.B === null) {

                v.B = 90 - v.A;

                changed = true;
            }
        }

        if (v.b !== null &&
            v.c !== null) {

            if (v.B === null) {

                v.B =
                    Math.asin(
                        v.b / v.c
                    ) * 180 / Math.PI;

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

/* =========================================================
   DRAW UNIT CIRCLE
   ========================================================= */
function drawTriangle(v) {

    clearDrawing();

    /*
        We use angle A as the unit-circle angle.

        Mathematical convention:

             A = 0° -> positive x-axis
             A > 0 -> counterclockwise
    */

    const angle = v.A * Math.PI / 180;
    const x = Math.cos(angle);
    const y = Math.sin(angle);

    /*
        Unit-circle screen coordinates.
    */
    const pointX = CX + x * R;
    const pointY = CY - y * R;

    /*
        Projection onto x-axis.
    */
    const projectionX = pointX;
    const projectionY = CY;

    /* ---------------------------------------------
       Triangle
       --------------------------------------------- */

    const triangle =
        svgElement(
            "polygon",
            {
                points: `
                    ${CX},${CY}
                    ${projectionX},${projectionY}
                    ${pointX},${pointY}
                `,
                class: "triangle"
            }
        );

    drawing.appendChild(triangle);

    /* ---------------------------------------------
       Horizontal projection
       --------------------------------------------- */

    const horizontal =
        svgElement(
            "line",
            {
                x1: CX,
                y1: CY,
                x2: projectionX,
                y2: projectionY,
                class: "projection"
            }
        );

    drawing.appendChild(horizontal);

    /* ---------------------------------------------
       Vertical projection
       --------------------------------------------- */

    const vertical =
        svgElement(
            "line",
            {
                x1: projectionX,
                y1: projectionY,
                x2: pointX,
                y2: pointY,
                class: "projection"
            }
        );

    drawing.appendChild(vertical);

    /* ---------------------------------------------
       Hypotenuse / terminal ray
       --------------------------------------------- */

    const ray =
        svgElement(
            "line",
            {
                x1: CX,
                y1: CY,
                x2: pointX,
                y2: pointY,
                class: "ray"
            }
        );

    drawing.appendChild(ray);

    /* ---------------------------------------------
       Right angle marker
       --------------------------------------------- */

    const size = 18;

    const marker =
        svgElement(
            "polyline",
            {
                points: `
                    ${projectionX - size},${projectionY}
                    ${projectionX - size},${projectionY - size}
                    ${projectionX},${projectionY - size}
                `,
                class: "right-angle"
            }
        );

    drawing.appendChild(marker);

    /* ---------------------------------------------
       Angle arc
       --------------------------------------------- */

    const arcRadius = 75;

    const arcEndX =
        CX +
        arcRadius *
        Math.cos(angle);

    const arcEndY =
        CY -
        arcRadius *
        Math.sin(angle);

    const largeArc =
        v.A > 180 ? 1 : 0;

    const arc =
        svgElement(
            "path",
            {
                d: `
                    M ${CX + arcRadius} ${CY}
                    A ${arcRadius} ${arcRadius}
                      0 ${largeArc} 0
                      ${arcEndX} ${arcEndY}
                `,
                class: "angle-arc"
            }
        );

    drawing.appendChild(arc);

    /* ---------------------------------------------
       Terminal point
       --------------------------------------------- */

    const point =
        svgElement(
            "circle",
            {
                cx: pointX,
                cy: pointY,
                r: 9,
                class: "point"
            }
        );

    drawing.appendChild(point);

    /* ---------------------------------------------
       Origin
       --------------------------------------------- */

    const origin =
        svgElement(
            "circle",
            {
                cx: CX,
                cy: CY,
                r: 6,
                class: "origin"
            }
        );

    drawing.appendChild(origin);

    /* ---------------------------------------------
       Angle label
       --------------------------------------------- */

    const labelAngle = Math.min(v.A / 2, 75);

    const labelRad =
        labelAngle *
        Math.PI / 180;

    const labelRadius = 105;

    const angleLabel =
        svgElement(
            "text",
            {
                x:
                    CX +
                    labelRadius *
                    Math.cos(labelRad),

                y:
                    CY -
                    labelRadius *
                    Math.sin(labelRad),

                class: "angle-label",

                "text-anchor": "middle"
            }
        );

    angleLabel.textContent = `A = ${format(v.A)}°`;

    drawing.appendChild(angleLabel);

    /* ---------------------------------------------
       Coordinate
       --------------------------------------------- */

    const coordinate =
        svgElement(
            "text",
            {
                x:
                    pointX +
                    (x >= 0 ? 14 : -14),

                y:
                    pointY +
                    (y >= 0 ? -15 : 28),

                class: "coordinate",

                "text-anchor":
                    x >= 0
                        ? "start"
                        : "end"
            }
        );

    coordinate.textContent = `(${format(x)}, ${format(y)})`;

    drawing.appendChild(coordinate);

    /* ---------------------------------------------
       Side labels
       --------------------------------------------- */

    const bLabel =
        svgElement(
            "text",
            {
                x:
                    (CX + projectionX) / 2,

                y:
                    CY + 30,

                class: "side-label",

                "text-anchor": "middle"
            }
        );

    bLabel.textContent =
        `b = ${format(v.b)}`;

    drawing.appendChild(bLabel);

    const aLabel =
        svgElement(
            "text",
            {
                x:
                    projectionX + 18,

                y:
                    (projectionY + pointY) / 2,

                class: "side-label"
            }
        );

    aLabel.textContent =
        `a = ${format(v.a)}`;

    drawing.appendChild(aLabel);

    const cLabel =
        svgElement(
            "text",
            {
                x:
                    (CX + pointX) / 2 + 10,

                y:
                    (CY + pointY) / 2 - 10,

                class: "side-label"
            }
        );

    cLabel.textContent = `c = ${format(v.c)}`;

    drawing.appendChild(cLabel);
}

/* =========================================================
   MAIN CALCULATION
   ========================================================= */

function calculate() {

    let values = getInputs();

    /* Count supplied values */

    const supplied =
        Object.values(values)
            .filter(v => v !== null)
            .length;

    if (supplied < 2) {
        status.className = "status error";
        status.textContent = "Enter at least two independent values.";

        clearDrawing();

        info.textContent = "Enter values to calculate the triangle.";

        return;
    }

    /* Validate */

    const validation = validateInputs(values);

    if (validation) {
        status.className = "status error";

        status.textContent = validation;

        clearDrawing();

        info.textContent = "Invalid triangle.";

        return;
    }

    /* Solve */

    try {
        values = solveTriangle(values);
    } catch (error) {

        status.className = "status error";
        status.textContent = error.message;

        clearDrawing();

        return;
    }

    /* ---------------------------------------------
       Check whether everything was solved
       --------------------------------------------- */

    const complete =
        values.a !== null &&
        values.b !== null &&
        values.c !== null &&
        values.A !== null &&
        values.B !== null;

    if (!complete) {
        /*
            This happens when the user supplied
            two angles but no side.

            The angles determine shape but not scale.
        */

        status.className = "status";

        status.textContent = "The angles determine the shape, but you need at least one side to determine its size.";

        /*
            Still fill in angles.
        */

        setValue("A", values.A);
        setValue("B", values.B);

        info.textContent = `A = ${format(values.A)}°   B = ${format(values.B)}°`;

        return;
    }

    /* ---------------------------------------------
       Write solved values back to inputs
       --------------------------------------------- */

    setValue("a", values.a);
    setValue("b", values.b);
    setValue("c", values.c);
    setValue("A", values.A);
    setValue("B", values.B);

    /* ---------------------------------------------
       Success
       --------------------------------------------- */

    status.className = "status success";
    status.textContent = "Triangle calculated successfully.";

    info.textContent = `A = ${format(values.A)}°   •   B = ${format(values.B)}°   •   C = 90°`;

    /* Draw */

    drawTriangle(values);
}

/* =========================================================
   RESET
   ========================================================= */

function reset() {
    for (const field of Object.values(fields)) {
        field.value = "";
    }

    clearDrawing();

    status.className = "status";
    status.textContent = "Enter any two independent values.";
    info.textContent = "Enter values to calculate the triangle.";
}

/* =========================================================
   EVENTS
   ========================================================= */
calculateButton.addEventListener("click", calculate);
resetButton.addEventListener("click", reset);

/*
    Calculate when Enter is pressed.
*/
for (const input of Object.values(fields)) {
    input.addEventListener("keydown", event => {
            if (event.key === "Enter") {
                calculate();
            }
        }
    );
}
