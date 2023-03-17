<template>
<div>
    <div id="dragPanIcon">
        <button id="dragPanIconheader" @mousedown="dragElement">
            <svg class="dragIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="14 14 20 20" enable-background="new 14 14 20 20" xml:space="preserve">
                <path d="M24,34l-4.075-4.074l1.101-1.102l2.225,2.227V24.75h-6.3l2.1,2.1l-1.1,1.1L14,24l3.975-3.975l1.101,1.1L16.95,23.25h6.3
                v-6.3l-2.1,2.1l-1.101-1.1L24,14l3.949,3.95l-1.1,1.1l-2.1-2.1v6.3h6.301l-2.102-2.1l1.102-1.101L34,24l-3.949,3.949l-1.102-1.1
                l2.102-2.1H24.75v6.301l2.225-2.227l1.1,1.102L24,34z"/>
            </svg>
            <span></span>            
        </button>

        <div id="dragContent">
            <section>
                <svg class="github" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="20 20 40 40"
                    enable-background="new 20 20 40 40" xml:space="preserve">
                    <g>
                        <path d="M40,20c-10.763,0-19.485,8.955-19.485,20c0,11.046,8.726,19.999,19.485,19.999c10.764,0,19.485-8.953,19.485-19.999
                                    C59.485,28.955,50.764,20,40,20z M45.85,57.963c-0.938,0.188-1.27-0.403-1.27-0.91c0-0.62,0.021-2.66,0.021-5.191
                                    c0-1.768-0.593-2.923-1.253-3.51c4.113-0.466,8.429-2.069,8.429-9.339c0-2.066-0.714-3.759-1.899-5.082
                                    c0.189-0.478,0.826-2.4-0.183-5.008c0,0-1.547-0.51-5.072,1.943c-1.475-0.42-3.054-0.633-4.622-0.641
                                    c-1.571,0.008-3.151,0.216-4.62,0.641c-3.527-2.449-5.078-1.943-5.078-1.943c-1.004,2.608-0.372,4.531-0.18,5.008
                                    c-1.18,1.323-1.898,3.012-1.898,5.082c0,7.253,4.31,8.877,8.408,9.356c-0.526,0.473-1.004,1.306-1.172,2.529
                                    c-1.053,0.482-3.727,1.319-5.371-1.575c0,0-0.975-1.816-2.828-1.95c0,0-1.804-0.024-0.126,1.15c0,0,1.212,0.58,2.048,2.768
                                    c0,0,1.086,3.682,6.221,2.538c0.008,1.581,0.024,2.772,0.024,3.222c0,0.501-0.334,1.086-1.261,0.91
                                    C26.83,55.457,21.543,48.363,21.543,40C21.539,29.551,29.805,21.078,40,21.078c10.196,0,18.462,8.472,18.462,18.93
                                    C58.462,48.368,53.176,55.457,45.85,57.963z" />
                    </g>
                </svg>
                <span
                    @touchstart="openNewTab('https://github.com/zulfidly/Multi-Step-Form')"
                    @click="openNewTab('https://github.com/zulfidly/Multi-Step-Form')"
                    >
                </span>
            </section>

            <button>
                <svg class="frontendmentor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40"
                    xml:space="preserve">
                    <g>
                        <g>
                            <path fill="#67BECE" d="M32.516,20.662c-0.115,0-0.23-0.023-0.335-0.07l-7.032-3.148c-0.413-0.186-0.598-0.672-0.412-1.085
                                c0.083-0.182,0.229-0.33,0.412-0.412l7.032-3.138c0.412-0.184,0.896,0.001,1.082,0.414c0.183,0.414-0.003,0.898-0.414,1.083
                                l-5.359,2.392l5.359,2.399c0.414,0.185,0.6,0.668,0.414,1.083C33.132,20.474,32.839,20.662,32.516,20.662z" />
                            <path fill="#3F54A3" d="M22.935,32.086c-7.731,0-14.49-5.218-16.432-12.692c-0.114-0.437,0.148-0.885,0.586-1
                                c0.437-0.114,0.885,0.148,0.998,0.587c1.763,6.755,7.866,11.468,14.849,11.466c0.452,0,0.819,0.367,0.819,0.819
                                S23.387,32.086,22.935,32.086z" />
                            <path fill="#67BECE" d="M20.112,25.283c-0.452,0-0.819-0.367-0.819-0.819V8.894c0-0.453,0.367-0.819,0.819-0.819
                                c0.453,0,0.819,0.367,0.819,0.819v15.571C20.931,24.917,20.564,25.283,20.112,25.283z" />
                        </g>
                            <path fill="#808080" d="M20,0.75c10.614,0,19.25,8.636,19.25,19.251c0,10.614-8.636,19.25-19.25,19.25
                                c-10.615,0-19.251-8.635-19.251-19.25C0.749,9.386,9.385,0.75,20,0.75 M20,0C8.955,0-0.001,8.957-0.001,20.001
                                C-0.001,31.047,8.955,40,20,40c11.046,0,20.001-8.953,20.001-19.999C40.001,8.957,31.046,0,20,0L20,0z" />
                    </g>
                </svg>
                <span
                    @touchstart="openNewTab('https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ')"
                    @click="openNewTab('https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ')"
                    >
                </span>

            </button>
        </div>
    </div>
</div>
</template>

<script setup>
    import { onMounted } from 'vue'
    let openNewTab = (url) => { window.open(url, "_blank", "noreferrer") }

    onMounted(() => {
        let x = document.getElementById("dragPanIcon")
        console.log(x)
        touchdragElement(x)
        dragElement(x)
    })

    function touchdragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        elmnt.ontouchstart = dragTouchDown;
        console.log("touch down")
    
        function dragTouchDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the touch position at startup:
        pos3 = e.touches[0].clientX;
        pos4 = e.touches[0].clientY;
        document.ontouchend = closeTouchDragElement;
        // call a function whenever the touch moves:
        document.ontouchmove = elementTouchDrag;
        }
  
        function elementTouchDrag(e) {
        e = e || window.event;
        //   e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.touches[0].clientX;
        pos2 = pos4 - e.touches[0].clientY;
        pos3 = e.touches[0].clientX;
        pos4 = e.touches[0].clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
    
        function closeTouchDragElement() {
        /* stop moving when touch is released:*/
        document.ontouchend = null;
        document.ontouchmove = null;
        }
    }

    function dragElement(elmnt) {
        console.log("dragElement", elmnt)
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
            console.log(elmnt.id)
            // if present, the header is where you move the DIV from:
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
            // otherwise, move the DIV from anywhere inside the DIV:
            elmnt.onmousedown = dragMouseDown;
        }
        function dragMouseDown(e) {
            console.log("dragMouseDown", e)
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }
        function elementDrag(e) {
            console.log("elementDrag", e)
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
        function closeDragElement() {
            // stop moving when mouse button is released:
            console.log("closeDragElement")
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
</script>

<style scoped>

span {
    position: absolute;
    z-index: 60;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
svg {
    display: flex;
    justify-content: center;
    align-items: center;
}
button { 
    cursor: pointer; 
    background-color: transparent;
    border: none;
}

#dragPanIconheader {
    z-index: 50;
}
#dragPanIcon {
    cursor: pointer;
    z-index: 40;
    top: 100%;
    width: 100%;
    height: 100%;
}
#dragContent {
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
    z-index: 50;
    position: absolute;
    top: 60%;
    left: 140%;
}
.dragIcon path {
    fill: var(--color-text);
}
.github, .frontendmentor {
    border-radius: 9999px;
}
.github path {
    fill: var(--color-text);
}
.github {
    background-color: var(--color-background);
}
.frontendmentor {
    background-color: rgb(216, 216, 216);
}

</style>