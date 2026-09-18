+++
title = "Trig Calculator"
sort_by = "title"
weight = 1050

[extra]
updated = 2026-06-01
theme = "light"
see_also = []
+++

{{ <hidden page={page} section={section} /> }}


<div class="calculator">
    <div class="layout">
        <!-- ==========================================
             INPUT PANEL
             ========================================== -->
        <div class="controls">
            <div class="field">
                <label for="a">side a</label>
                <input id="a" type="number" step="any">
            </div>
            <div class="field">
                <label for="b">side b</label>
                <input id="b" type="number" step="any">
            </div>
            <div class="field">
                <label for="c">side c</label>
                <input id="c" type="number" step="any">
            </div>
            <div class="field">
                <label for="A">angle A</label>
                <input id="A" type="number" step="any">
            </div>
            <div class="field">
                <label for="B">angle B</label>
                <input id="B" type="number" step="any">
            </div>
            <div class="buttons">
                <button id="calculate">Calculate</button>
                <button id="reset">Reset</button>
            </div>
            <div id="status" class="status">
                Enter any two independent values.
            </div>
        </div>
        <!-- ==========================================
             UNIT CIRCLE
             ========================================== -->
        <div class="graph">
            <div class="graph-title">
                Unit Circle
            </div>
            <div class="svg-wrap">
                <svg
                    viewBox="0 0 800 800"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <!-- Unit circle -->
                    <circle
                        class="grid"
                        cx="400"
                        cy="400"
                        r="300"
                    />
                    <circle
                        class="circle"
                        cx="400"
                        cy="400"
                        r="300"
                    />
                    <!-- Axes -->
                    <line
                        class="axis"
                        x1="55"
                        y1="400"
                        x2="745"
                        y2="400"
                    />
                    <line
                        class="axis"
                        x1="400"
                        y1="55"
                        x2="400"
                        y2="745"
                    />
                    <!-- Labels -->
                    <text
                        class="axis-label"
                        x="750"
                        y="408"
                    >x</text>
                    <text
                        class="axis-label"
                        x="408"
                        y="45"
                    >y</text>
                    <text
                        class="tick-label"
                        x="705"
                        y="393"
                    >1</text>
                    <text
                        class="tick-label"
                        x="380"
                        y="90"
                    >1</text>
                    <text
                        class="tick-label"
                        x="62"
                        y="393"
                    >−1</text>
                    <text
                        class="tick-label"
                        x="380"
                        y="725"
                    >−1</text>
                    <!-- Dynamic drawing -->
                    <g id="drawing"></g>
                </svg>
            </div>
            <div id="info" class="info">
                Enter values to calculate the triangle.
            </div>
        </div>
    </div>
</div>

