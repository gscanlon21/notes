+++
title = "CSS"
description = "Cascading Style Sheets"

[extra]
key_words = ["Cascading Style Sheets", "CSS"]
updated = 2027-01-01
see_also = [
  { title = "Container Queries", href = "https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries" },
]
+++

{{ <hidden page={page} section={section} /> }}


```css
/* DROPDOWN ALERT
*******************/
details.alert {
    & > summary {
        margin-inline: calc(var(--bs-alert-padding-x) * -1);
        margin-block: calc(var(--bs-alert-padding-y) * -1);
        padding-inline: var(--bs-alert-padding-x);
        padding-block: var(--bs-alert-padding-y);
        position: relative;
        z-index: 1;
    }

    &:last-child {
        margin-block-end: 0;
    }
}

/* SHOW/HIDE TOGGLE
*********************/
.show-hide {
    justify-content: space-between;
    padding-block: .1rem;
    position: relative;
    display: flex;
    width: 100%;

    & > .dynamic-text {
        color: rgb(var(--color-webster-blue));
        letter-spacing: 1px;
        font-size: 1.25rem;
        font-weight: 500;
    }

    & > .plus-minus {
        position: absolute;
        cursor: pointer;
        height: 100%;
        width: 21px;
        right: 0;
        top: 0;
    }
}

details > summary > .show-hide {
    & > .dynamic-text::after {
        content: attr(data-show-text);
    }

    & > .plus-minus::before {
        background: rgb(var(--color-webster-blue));
        transition: transform .15s ease;
        transform: rotate(180deg);
        position: absolute;
        height: 3.2px;
        margin: auto;
        content: "";
        width: 20px;
        bottom: 0;
        left: 0;
        top: 0;
    }

    & > .plus-minus::after {
        background: rgb(var(--color-webster-blue));
        transition: transform .15s ease;
        transform-origin: center;
        transform: rotate(90deg);
        position: absolute;
        height: 3.2px;
        margin: auto;
        content: "";
        width: 20px;
        bottom: 0;
        left: 0;
        top: 0;
    }
}

details[open] > summary > .show-hide {
    & > .dynamic-text::after {
        content: attr(data-hide-text);
    }

    & > .plus-minus::before {
        content: "";
        transform: rotate(0deg);
    }

    & > .plus-minus::after {
        content: "";
        transform: rotate(0deg);
    }
}



/* DESCRIPTION LISTS 
**********************/
dl {
    dd {
        margin: revert;
    }

    dt:not(:first-of-type) {
        margin-top: 1rem;
    }

    &.horizontal {
        display: grid;
        grid-template-columns: max-content;

        dt, dd {
            margin: 0;
            padding-top: .3rem;
            padding-bottom: .3rem;
        }

        dt {
            padding-right: .5rem;

            &:not(.wrap) {
                max-width: 70vw;
            }
        }

        dd {
			word-break: break-word;
            grid-column-start: 2;
			padding-left: 0.5rem;
        }

        dt.wrap, dd.wrap, div.wrap {
            grid-column-start: 1;
            grid-column-end: 3;
        }

        &:not(.inline-small) {
            @media screen and (max-width: 768px) {
                grid-template-columns: auto;

                dt, div, dd {
                    grid-column-start: 1;
                    grid-column-end: 3;
                    padding: 0;
                }

                dd {
                    margin-left: revert;
                    padding-bottom: .5rem;
                }
            }
        }

        &.striped {
            dt, dd {
                margin-left: 0;
                padding: .3rem .5rem;

                &:nth-of-type(2n+1) {
                    background-color: rgba(rgba(var(--color-black), 0.25), .3);
                }
            }
        }
    }
}

/*
dl {
		display: grid;
		grid-auto-flow: row;
		padding-block-start: 1px;
		grid-auto-rows: max-content;
		grid-column-gap: $base-padding;
		grid-template-columns: max-content;
		margin-block-start: $base-padding;
		
		dt,
		dd,
		dd > p {
			margin: 0;
		}

		dt {
			grid-column: 1;
			grid-row: span 99;
			margin-block-start: -1px;
			padding-inline-end: $base-padding * 0.5;
			padding-block-start: $base-padding * 0.25;
			border-top: 1px dashed currentColor;

			&:not(:last-of-type) {
				margin-block-end: $base-padding * 0.5;
			}

			& > strong, & > em {
				display: block;
			}
		}

		dd {
			grid-column: 2;
			overflow-x: auto;

			&:empty {
				display: none;
			}
			
			&:has(+dd) {
				padding-block-end: $base-padding * 0.5;
			}

			&:has(+dd > blockquote) {
				padding-block-end: $base-padding * 0.2;
			}

			&:has(+dt) {
				padding-block-end: $base-padding * 0.75;

				&:has(blockquote) {
					margin-block-end: $base-padding * 0.5;
				}
			}

			& > blockquote:not([class^="markdown-alert-"]) {
				margin-inline-start: $base-padding * 0.1;
				margin-block-start: $base-padding * 0.5;

				p {
					margin-block-start: 0;
				}
			}

			& > blockquote[class^="markdown-alert-"] {
				margin-block: 0;
			}

			&:has(dl) {
				margin-block-start: -1px;

				&:has(+dt) {
					margin-block-end: $base-padding * 0.5;
				}
			}

			& > dl {
				margin-block-start: 0;
			}

			& > details.image {
				margin-block-start: 0;
			}

			pre {
				margin-block-start: 0;
			}
		}

		dt + dd {
			& > ul, & > ol, & > menu {
				margin-block-start:	0;
			}

			&:not(:has(dl)) {
				padding-block-start: $base-padding * 0.25;
			}

			& > blockquote:not([class^="markdown-alert-"]) {
				margin-block-start: $base-padding * 0;
			}

			& > h5 {
				margin-block-start: 0;
			}
		}

		dd + dd {
			& > ul {
				margin-block-start: $base-padding * 0;
			}
		}

		@media (min-width: $small-breakpoint) {
			dt {
				&:not(.wrap) {
					max-width: min(33vw, calc(var(--body-width) * 0.33));
				}
			}
			dd {
				&:has(pre) {
					padding-block-start: 0 !important;
				}
			}		
		}

		@media (max-width: (calc($small-breakpoint - 1px))) {
			grid-template-columns: auto;

			dt,
			dd,
			div {
				grid-column-start: 1;
				grid-column-end: 3;
			}

			dt {
				border-top: none;
				margin-block: 0 !important;
			}

			dd {
				margin-inline-start: revert;

				&:has(+dt) {
					padding-block-end: $base-padding * 0.5;

					&:has(blockquote) {
						margin-block-end: $base-padding * 0.25;
					}
				}
			}
		}

		dt.wrap~dd,
		dd.wrap {
			grid-column: 1 / 3;
		}

		&.striped {
			dt,
			dd {
				margin-left: 0;
				padding: .3rem .5rem;

				&:nth-of-type(2n+1) {
					background-color: rgba(0, 0, 0, .3);
				}
			}
		}

		&:has(+h1), &:has(+h2), &:has(+h3), &:has(+h4), &:has(+h5) {
			margin-block-end: 0;
		}

		li {
			& + li {
				margin-block-start: $base-padding * 0.1;
			}

			& > dl {
				margin-block-start: $base-padding * 0.5;
			}
		}
	}

	blockquote + dl:not(+blockquote) {
		margin-block-start: $base-padding * 2.5;
	}
*/

/* TOOLTIPS
*************/
[data-tooltip2] {
    /* Add this attribute to the element that needs a tooltip */
    text-decoration-style: dashed;
    text-decoration: underline;
    position: relative;
    cursor: pointer;
    z-index: 2;
    
    &:hover {
        z-index: 3;
    }
}

[data-tooltip2]:before,
[data-tooltip2]:after {
    /* Hide the tooltip content by default */
    pointer-events: none;
    visibility: hidden;
    opacity: 0;
}

[data-tooltip2]:before {
    /* Position tooltip above the element */
    background-color: rgb(var(--color-black));
    color: rgb(var(--color-white));
    content: attr(data-tooltip2);
    position: absolute;
    bottom: 100%;
    margin-bottom: 5px;
    padding: 7px;
    min-width: 14ch;
    width: auto;
    border-radius: 6px;
    text-align: center;
    white-space: normal;
}

[data-tooltip2].tooltip-down:before {
    bottom: unset;
    top: 100%;
    margin-bottom: unset;
    margin-top: 5px
}

[data-tooltip2]:after {
    /* Triangle hack to make tooltip look like a speech bubble */
    border-top: 5px solid rgb(var(--color-black));
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    width: 0;
    content: " ";
    font-size: 0;
    line-height: 0;
}

[data-tooltip2].tooltip-down:after {
    border-bottom: 5px solid rgb(var(--color-black));
    border-top: unset;
    bottom: unset;
    top: 100%;
}

[data-tooltip2]:hover:before,
[data-tooltip2]:hover:after {
    /* Show tooltip content on hover */
    visibility: visible;
    opacity: 1;
}
```


```css
.font-size--unset {
    font-size: unset;
}

.white-space--nowrap {
    white-space: nowrap;
}

.max-width--unset {
    max-width: unset;
}
```