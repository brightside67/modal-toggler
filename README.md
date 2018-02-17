# modal-toggler

Simple logic for modals and toggle class on elements, using simple html attributes

## Installation

Use npm or yarn package manager to install

```bash
npm install modal-toggler
```

## Usage

```javascript
import modalToggler from "modal-toggler";

//modalToggler({options}, callback);

var MT = new modalToggler(
  {
    //class to show modal
    modalClass: "visible",
    //class for toggle elements
    toggleClass: "toggle-h1",
    //HTML Node for dark block behind the modal
    backgroundNode: ".bg-wall",
    //Class for dark background block
    backgroundClass: "visible"
  },
  function() {
    console.log("new MT added");
  }
);
```

```html
<style>
  body {
    text-align: center;
  }
  .modal {
    position: fixed;
    width: 200px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    display: none;
    z-index: 10;
  }
  .modal.visible {
    display: block;
  }
  .bg-wall {
    position: fixed;
    background: rgba(0, 0, 0, .4);
    display: none;
    z-index: 9;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .bg-wall.visible {
    display: block;
  }
  .toggle-h1 {
    color: red;
  }
</style>

<body>
  <h1>Modal-toggler simple example</h1>

  <div class="box">
    <button data-modal-open="#modal-1">Open modal</button>
    <button data-modal-toggle="h1">Toggle color of h1</button>
  </div>

  <div class="modal">
    Some modal text
    <button data-modal-close="#modal-1">Close modal</button>
  </div>

  <div class="bg-wall"></div>
</body>
```

## Data attributes

```html
<!-- just add this attributes to HTML elements -->
data-modal-open="${node id or class with # or dot. in front}"
data-modal-close="${node id or class with # or dot. in front}"
data-modal-toggle="${node id or class with # or dot. in front}"
```
